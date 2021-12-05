const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http://localhost:3000`;
const passport = require("passport");
const auth = require("./routes/auth");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const weatherRoute = require("./routes/weather");
const nftsRoute = require('./routes/nfts')
const dbo = require("./db/conn");

auth(passport);
app.use(passport.initialize());

app.use(express.json());

const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(cookieParser());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

app.get("/", (req, res) => {
  if (req.session.token) {
    res.cookie("token", req.session.token);
    res.json({
      status: "session cookie set",
    });
  } else {
    res.cookie("token", "");
    res.json({
      status: "session cookie not set",
    });
  }
});

app.get(
  process.env.GOOGLE_AUTH_CALLBACK,
  passport.authenticate("google", { failureRedirect: "/auth/fail" }),
  (req, res) => {
    req.session.token = req.user.token;
    res.redirect("/");
  }
);

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });

  console.log(`Example app listening at ${baseUrl}`);
});

//RESTRICTED//
app.use((req,res,next) => {
  if(!req.session.token) res.redirect("/")
  else next()
})

app.use("/weather", weatherRoute);

app.use("/nfts", nftsRoute);

app.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

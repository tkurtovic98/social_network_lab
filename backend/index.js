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
const nftsRoute = require("./routes/nfts");
const dbo = require("./db/conn");

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(cookieParser());

app.use(passport.initialize());
auth(passport);

app.get("/", (req, res) => {
  if (!req.session.token) {
    res.clearCookie('token');
    res.json("Logged out");
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

app.get(
  process.env.GOOGLE_AUTH_CALLBACK,
  passport.authenticate("google", {
    failureRedirect: "/auth/fail",
  }),
  (req, res) => {
    req.session.token = req.user.token;
    res.cookie("token", req.session.token);
    res.redirect(process.env.CLIENT_CALLBACK_URL);
  }
);

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });

  console.log(`Example app listening at ${baseUrl}`);
});

//RESTRICTED//
app.use((req, res, next) => {
  if (!req.session.token) res.redirect("/");
  else next();
});

app.use("/weather", weatherRoute);

app.use("/nfts", nftsRoute);

app.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

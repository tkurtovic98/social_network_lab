const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
require("dotenv").config();
const user = require("../db/models/user/User.js");

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.BASE_URL + process.env.GOOGLE_AUTH_CALLBACK,
      },
      async (token, refreshToken, profile, done) => {

        let result = await user.createUser({
          name: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
        });

        return done(null, {
          result: result,
          token: token
        });
      }
    )
  );
};

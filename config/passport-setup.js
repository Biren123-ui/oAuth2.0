const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user.model");

passport.serializeUser(async (user, done) => {
  try {
    console.log("serealize user");
    done(null, user.id);
  } catch (error) {
    console.error("Error serializing user:", error);
    done(error); // Pass error to Passport
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    console.log("deserialize user");
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    console.error("Error deserializing user:", error);
    done(error); // Pass error to Passport
  }
});


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.URL,
    },

    async function handleGoogleLogin(req, accessToken, refreshToken, profile, done) {
      try {
        // Attempt to find existing user with matching Google ID
        console.log(profile);
        const existingUser = await User.findOne( {$or: [
          { email: profile.emails[0].value },
          { googleid: profile.id },
        ]
      });
      console.log(existingUser);
        
    
        if (existingUser) {
          console.log(`Existing user found: ${existingUser.username}`);
           done(null, existingUser);
        }
    
        // Create a new user if not found
        else{
        try {
          const newUser = await User.create({
            username: profile.displayName,
            googleid: profile.id,
            email: profile.emails[0].value,
          });
          console.log(`New user created: ${newUser.username}`);
           done(null, newUser);
        } catch (error) {
          console.error(`Error creating user: ${error.message}`);
          // return done(error); // Pass error to Passport for handling
        }
      }
      } catch (error) {
        console.log("hiii");
        console.error(`Error fetching user from database: ${error.message}`);
        // return done(error); // Pass error to Passport for handling
      }
    }
    
  )
);

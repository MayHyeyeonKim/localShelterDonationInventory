import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/userModel.js';

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });

    if (!user || !user.isValidPassword(password)) {
      return done(null, false, { message: 'Invalid username or password' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

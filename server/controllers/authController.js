import passport from 'passport';
import User from '../models/userModel.js';

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Log in a user
export const loginUser = passport.authenticate('local', {
  failureRedirect: '/login-failure',
});

// Log out a user
export const logoutUser = (req, res) => {
  req.logout();
  res.redirect('/');
};

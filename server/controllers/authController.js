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
export const loginUser = (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    req.login(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      // 로그인 성공
      return res.status(200).json({ message: 'Login successful', user });
    });
  })(req, res);
};

// Log out a user
export const logoutUser = (req, res) => {
  req.logout();
  res.redirect('/');
};

import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/signup', registerUser);
authRouter.post('/login', loginUser, (req, res) => {
  res.redirect('/login-success');
});
authRouter.get('/logout', logoutUser);

export default authRouter;

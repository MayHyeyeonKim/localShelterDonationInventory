// app.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import session from 'express-session';
import passport from 'passport';

import mainRoutes from './routes/mainRouters.js';
import donationRoutes from './routes/donationRouters.js';
import distributionRoutes from './routes/distributionRouters.js';
import authRouter from './routes/authRouter.js';
import './middleware/passport.js';

import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  },
}));

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',authRouter);
app.use('/main', mainRoutes);
app.use('/donations', donationRoutes);
app.use('/distributions', distributionRoutes);

app.use(express.static('public'));
app.use(express.static(join(__dirname, 'client')));

app.get('/Signup.html', (req, res) => {
  res.sendFile(join(__dirname, '../client/pages/Signup.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(join(__dirname, '../client/pages/login.html'));
});

app.get('/distribution.html', (req, res) => {
  res.sendFile(join(__dirname, '../client/pages/distribution.html'));
});

app.get('/donationList.html', (req, res) => {
  res.sendFile(join(__dirname, '../client/pages/donationList.html'));
});

app.get('/donation.html', (req, res) => {
  res.sendFile(join(__dirname, '../client/pages/donation.html'));
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../client/pages/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

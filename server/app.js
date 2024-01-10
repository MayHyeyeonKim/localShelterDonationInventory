import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';

import mainRoutes from './routes/mainRouters.js';
import donationRoutes from './routes/donationRouters.js';
import distributionRoutes from './routes/distributionRouters.js';
import authRouter from './routes/authRouter.js';

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
app.use(authRouter);

// 세션 설정
app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: false,
}));

// Passport 초기화 및 세션 설정
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user || !user.isValidPassword(password)) {
          return done(null, false, { message: '유효하지 않은 사용자명 또는 비밀번호' });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  ));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

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

app.get('/donation.html', (req, res) => {
  res.sendFile(join(__dirname, '../client/pages/donation.html'));
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../client/pages/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

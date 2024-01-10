import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import mainRoutes from './routes/mainRouters.js';
import donationRoutes from './routes/donationRouters.js';
import distributionRoutes from './routes/distributionRouters.js';

import dotenv from 'dotenv';

dotenv.config();
// console.log('Loaded environment variables:', process.env);

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

app.use('/main', mainRoutes);
app.use('/donations', donationRoutes);
app.use('/distributions', distributionRoutes); 

app.use(express.static('public'));
app.use(express.static(join(__dirname, 'client')));

app.get('/distribution.html', (req, res) => {
    res.sendFile(join(__dirname, '../client/distribution.html'));
});

app.get('/donation.html', (req, res) => {
    res.sendFile(join(__dirname, '../client/donation.html'));
});

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

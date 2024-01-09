import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

import mainRoutes from './routes/mainRouters.js';
import donationRoutes from './routes/donationRouters.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Connected...");

        app.use('/main', mainRoutes);
        app.use('/donations', donationRoutes);

        app.use(express.static('public'));
        app.use(express.static(join(__dirname, 'client')));

        app.get('/donation.html', (req, res) => {
            res.sendFile(join(__dirname, '../client/donation.html'));
        });

        app.get('*', (req, res) => {
            res.sendFile(join(__dirname, '../client/index.html'));
        });

        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

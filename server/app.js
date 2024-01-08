import express from "express";
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mainRoutes from './routes/mainRouters.js';
import donationRoutes from './routes/donationRouters.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/main', mainRoutes);
app.use('/donations', donationRoutes);

app.use(express.static('public'));
app.use(express.static(dirname(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile('./client/index.html', { root: dirname(__dirname, 'client') });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

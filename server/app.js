import express from "express";
import cors from 'cors';
import mainRoutes from './routes/mainRouters.js';
import donationRouters from './routes/donationRouters.js';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/main', mainRoutes);
app.use('/donations', donationRouters);

app.get('/', (req,res) => {
    res.send('Welcome to Mays Inventory!');
});

app.listen(port,() => {
    console.log(`server is running at http://localhost:${port}`);
});

import express from 'express';
import { submitDonation } from '../controllers/mainController.js';

const mainRouter = express.Router();

mainRouter.post('/submitDonation', submitDonation);

export default mainRouter;

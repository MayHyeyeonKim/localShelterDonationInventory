
import express from 'express';
import { submitDonation } from '../controllers/donationController.js';

const mainRouter = express.Router();

mainRouter.post('/submitDonation', submitDonation);

export default mainRouter;

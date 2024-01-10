// donationRouters.js
import express from 'express';
import path from 'path';
import donationShelter from '../models/donationShelter.js';
import { submitDonation, getAllDonations } from '../controllers/donationController.js';

const donationRouter = express.Router();


donationRouter.get('/getAllDonations', getAllDonations);
donationRouter.post('/submitDonation', submitDonation);

export default donationRouter;

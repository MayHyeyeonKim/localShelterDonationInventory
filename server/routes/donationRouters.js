// donationRouters.js
import express from 'express';
import path from 'path';
import donationShelter from '../models/donationShelter.js';
import { submitDonation, getAllDonations } from '../controllers/donationController.js';

const donationRouter = express.Router();


donationRouter.get('/getAllDonations', getAllDonations);
donationRouter.post('/submitDonation', submitDonation);
donationRouter.get('/donation.html', (req, res) => {
    res.sendFile('donation.html', { root: path.join(__dirname, '../client') });
});
donationRouter.get('/getDonations', (req, res) => {
    const allDonations = donationShelter.getDonations();
    res.status(200).json({ donations: allDonations });
});

export default donationRouter;

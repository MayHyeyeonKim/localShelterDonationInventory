// donationRouters.js
import express from 'express';
import path from 'path';
import donationShelter from '../models/donationShelter.js';

const donationRouter = express.Router();

donationRouter.post('/submitDonation', (req, res) => {
    // 클라이언트에서 받은 데이터
    const {
        donorName,
        donationType,
        quantity,
        amount,
        donationDate,
        donationDetails
    } = req.body;

    // 메모리에 데이터 저장
    const newDonation = {
        donorName,
        donationType,
        quantity,
        amount,
        donationDate,
        donationDetails
    };

    donationShelter.addDonation(newDonation);

    res.status(200).json({ message: 'Donation submitted successfully!', donation: newDonation });
});

donationRouter.get('/donation.html', (req, res) => {
    res.sendFile('donation.html', { root: path.join(__dirname, '../client') });
});

donationRouter.get('/getDonations', (req, res) => {
    const allDonations = donationShelter.getDonations();
    res.status(200).json({ donations: allDonations });
});

export default donationRouter;

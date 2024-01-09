import DonationShelter from '../models/donationShelter.js';

export const submitDonation = async (req, res) => {
    try {
        const {
            donorName,
            donationType,
            quantity,
            amount,
            donationDate,
            donationDetails
        } = req.body;

        const newDonation = {
            donorName,
            donationType,
            quantity,
            amount,
            donationDate,
            donationDetails
        };

        // MongoDB에 기부 내역 저장
        await DonationShelter.create(newDonation);

        res.status(200).json({ message: 'Donation submitted successfully!', donation: newDonation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
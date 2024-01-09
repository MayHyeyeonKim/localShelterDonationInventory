import donationShelter from '../models/donationShelter.js';

export const submitDonation = (req, res) => {
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

        // 기부 내역을 메모리에 저장
        donationShelter.addDonation(newDonation);

        res.status(200).json({ message: 'Donation submitted successfully!', donation: newDonation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

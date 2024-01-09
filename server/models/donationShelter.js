import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
    donorName: String,
    donationType: String,
    quantity: Number,
    amount: Number,
    donationDate: Date,
    donationDetails: String,
});

const DonationShelter = mongoose.model('DonationShelter', donationSchema);

export default DonationShelter;
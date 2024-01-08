import donationShelter from '../models/donationShelter.js';

export const getDonations = (req, res) => {
  res.json(donationShelter.getDonations());
};
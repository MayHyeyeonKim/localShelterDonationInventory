// donationDistributionController.js
import Distribution from '../models/distributionShelter.js';

export const submitDistribution = async (req, res) => {
    try {
        const {
            distributionDate,
            distributionLocation,
            donationType,
            quantity,
            amount,
        } = req.body;

        const newDistribution = new Distribution({
            distributionDate,
            distributionLocation,
            donationType,
            quantity,
            amount,
        });

        await newDistribution.save();

        res.status(200).json({ message: 'Distribution logged successfully!', distribution: newDistribution });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getDistributions = async (req, res) => {
    try {
        const allDistributions = await Distribution.find();
        res.status(200).json({ distributions: allDistributions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

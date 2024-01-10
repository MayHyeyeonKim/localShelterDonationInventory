// distributionRouters.js
import express from 'express';
import { submitDistribution, getDistributions } from '../controllers/donationDistributionController.js';

const distributionRouter = express.Router();

distributionRouter.post('/submitDistribution', submitDistribution);
distributionRouter.get('/getDistributions', getDistributions);

export default distributionRouter;

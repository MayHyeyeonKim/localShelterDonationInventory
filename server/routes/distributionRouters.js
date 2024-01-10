import express from 'express';
import { submitDistribution } from '../controllers/distributionController.js';
import { checkAuthentication } from '../middleware/authMiddleware.js';
import { getDonationReports } from '../controllers/reportController.js';


const distributionRouter = express.Router();

distributionRouter.post('/submitDistribution', checkAuthentication, submitDistribution);
distributionRouter.get('/donation-reports', getDonationReports);

export default distributionRouter;

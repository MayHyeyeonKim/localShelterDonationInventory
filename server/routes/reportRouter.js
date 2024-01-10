import express from 'express';
import { getDonationReports } from '../controllers/reportController.js';

const reportRouter = express.Router();

reportRouter.get('/donation-reports', getDonationReports);

export default reportRouter;

import express from 'express';
import { submitDistribution } from '../controllers/distributionController.js';
import { checkAuthentication } from '../middleware/authMiddleware.js';

const distributionRouter = express.Router();

distributionRouter.post('/submitDistribution', checkAuthentication, submitDistribution);

export default distributionRouter;

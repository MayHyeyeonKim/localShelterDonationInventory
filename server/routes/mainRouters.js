import express from 'express';
import * as mainController from '../controllers/mainController.js';

const router = express.Router();

router.post('/recordDonation', mainController.recordDonation);
// ... (Other routes)

export default router;
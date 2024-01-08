import express from 'express';
import * as donationController from '../controllers/donationController.js';

const router = express.Router();

router.get('/getDonations', donationController.getDonations);

export default router;
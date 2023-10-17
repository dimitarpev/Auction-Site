import express from "express";
import * as bidController from '../controller/bid-controller.js';

const router = express.Router();


//API requests linked to controller to execute
router.get('/users/:email/bids', bidController.getAllBidsOfUser);
router.get('/antiques/:antiqueId/bids', bidController.getAllBidsOfAntique);
router.post('/antiques/:antiqueId/bids', bidController.addBid);
router.delete('/antiques/:antiqueId/bids/:bidId', bidController.deleteBid);
export default router;
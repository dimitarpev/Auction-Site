import express from "express";
import * as bidController from '../controller/bid-controller.js';
import {isLoggedIn} from "../middleware/isLoggedIn.js";
import {isAdmin} from "../middleware/isAdmin.js";

const router = express.Router();


//API requests linked to controller to execute
router.get('/users/:email/bids', isLoggedIn, isAdmin, bidController.getAllBidsOfUser);
router.get('/antiques/:antiqueId/bids', bidController.getAllBidsOfAntique);
router.get('/users/:email/winners', isLoggedIn, bidController.getWinningBidsOfUser);
router.post('/antiques/:antiqueId/bids', isLoggedIn, bidController.addBid);
router.delete('/antiques/:antiqueId/bids/:id', isLoggedIn, isAdmin, bidController.deleteBid);
export default router;
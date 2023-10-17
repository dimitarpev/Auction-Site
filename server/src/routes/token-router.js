import express from "express";
import * as tokentController from '../controller/token-controller.js';

const router = express.Router();


//API requests linked to controller to execute
router.post('/', tokentController.addToken);
export default router;
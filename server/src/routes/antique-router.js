import express from "express";
import * as antiqueController from '../controller/antique-controller.js';

const router = express.Router();

// TODO: Do antiques need to be connected to users like in web apps?

//API requests linked to controller to execute
router.get('/antiques', antiqueController.getAllAntiques);
router.get('/antiques/:antiqueId', antiqueController.getSpecificAntique);
router.post('/antiques', antiqueController.addAntique);
router.patch('/antiques/:antiqueId', antiqueController.editAntique);
router.delete('/antiques/:antiqueId', antiqueController.deleteAntique);

// /antiques?limit=3

export default router;
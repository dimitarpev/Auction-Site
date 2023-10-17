import express from "express";
import * as antiqueController from '../controller/antique-controller.js';
import {isLoggedIn} from "../middleware/isLoggedIn.js";
import {isAdmin} from "../middleware/isAdmin.js";

const router = express.Router();

// TODO: Do antiques need to be connected to users like in web apps?

//API requests linked to controller to execute
router.get('/', antiqueController.getAllAntiques);
router.get('/:antiqueId', antiqueController.getSpecificAntique);
router.post('/', antiqueController.addAntique);
router.patch('/:antiqueId', antiqueController.editAntique);
router.delete('/:antiqueId', isLoggedIn, isAdmin, antiqueController.deleteAntique);

// /antiques?limit=3

export default router;
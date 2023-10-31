import express from "express";
import * as antiqueController from '../controller/antique-controller.js';
import {isLoggedIn} from "../middleware/isLoggedIn.js";
import {isAdmin} from "../middleware/isAdmin.js";

const router = express.Router();

//API requests linked to controller to execute
router.get('/', antiqueController.getAllAntiques);
router.get('/:antiqueId', antiqueController.getSpecificAntique);
router.post('/', isLoggedIn, isAdmin, antiqueController.addAntique);
router.patch('/:antiqueId', isLoggedIn, isAdmin, antiqueController.editAntique);
router.delete('/:antiqueId', isLoggedIn, isAdmin, antiqueController.deleteAntique);

export default router;
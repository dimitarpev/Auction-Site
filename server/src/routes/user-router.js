import express from "express";
import * as userController from "../controller/user-controller.js";
import {isLoggedIn} from "../middleware/isLoggedIn.js";
import {isAdmin} from "../middleware/isAdmin.js";

const router = express.Router();

router.get('/', isLoggedIn, isAdmin, userController.getAllUsers);
router.get('/:email', isLoggedIn, isAdmin, userController.getSpecificUser);
router.post('/', userController.addUser);
router.patch('/:username', isLoggedIn, isAdmin, userController.editUser);
router.delete('/:username', isLoggedIn, isAdmin, userController.deleteUser);

export default router;
import express from "express";
import * as userController from "../controller/user-controller.js";

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:username', userController.getSpecificUser);
router.post('/users', userController.addUser);
router.patch('/users/:username', userController.editUser);
router.delete('/users/:username', userController.deleteUser);

export default router;
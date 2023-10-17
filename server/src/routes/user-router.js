import express from "express";
import * as userController from "../controller/user-controller.js";

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:email', userController.getSpecificUser);
router.post('/', userController.addUser);
router.patch('/:username', userController.editUser);
router.delete('/:username', userController.deleteUser);

export default router;
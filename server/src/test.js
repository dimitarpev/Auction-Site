import bcrypt from "bcrypt";
import statusCodes from "http-status-codes";
import {users} from "./controller/user-controller.js";
import jwt from 'jsonwebtoken';
import token from "jsonwebtoken";

const password = "Hello!";
bcrypt.hash(password, 10, (err, hash) => {
    if (err){
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error hashing the password.'});
    }

});

jwt.verify(token, secret, (error, decoded) => {
    if (error){

    }

    console.log(decoded);
});
import statusCodes from "http-status-codes";
import bcrypt from "bcrypt";
import token from "jsonwebtoken"
import {users} from './user-controller.js';
import {secret} from '../utils/utils.js';
import jwt from "jsonwebtoken";
export function addToken(req, res) {
    const {email, password} = req.body;

    const specificUser = users.find(user => user.email === email);
    if (specificUser) {
        bcrypt.compare(password, specificUser.password, (error, result) => {
            if (error){
                return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error comparing the password.'});
            }

            if (!result) {
                return res.status(statusCodes.BAD_REQUEST).json({error: 'Username or password wrong!'});
            }

            jwt.sign({email: specificUser.email, isAdmin: specificUser.isAdmin}, secret, (err, token) => {
                if (error) {
                    return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error creating the JWT.'});
                }
                res.status(statusCodes.CREATED).json({token: token});
            });
        });
    } else {
        console.log("User not found!");
        return res.status(statusCodes.BAD_REQUEST).json({error: 'Username or password wrong!'})
    }


}

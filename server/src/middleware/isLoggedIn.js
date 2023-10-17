import jwt from 'jsonwebtoken';
import statusCodes from "http-status-codes";
import {secret} from "../utils/utils.js";

export function isLoggedIn(req, res, next) {
    const authHeader = req.get('Authorization');
    const token = authHeader.split(' ')[1];


    // TODO: Use request enrichment to add the user to the req.
    // TODO: Looks like: req.user = payload
    // use verify

    jwt.verify(token, secret, (error, decoded) => {
        if (error) {
            return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: "Something went wrong!"});
        }

        req.user = decoded;
        next();
    });
}
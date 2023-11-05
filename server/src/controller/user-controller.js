import statusCodes from "http-status-codes";
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {secret} from "../utils/utils.js";

export let users = [
    {
        username: "djimi",
        email: "djimi2992@outlook.com",
        password: "$2a$10$AePid2lOjHBNwl56WMVOe.CnR6LCDH/BBPG9BvoOkWcisePUB0Pfi", //password: 111111
        isAdmin: true
    },
    {
        username: "someone",
        email: "user@gmail.com",
        password: "$2a$10$0hwqrXechxl/WkJyu2QJTueXBUX4hgy0cscFeboxyl4DCmlYql2mq" // password : 12345678
    }
]

export function getAllUsers(req, res) {
    res.json(users);
}


export function getSpecificUser(req, res) {
    const email = req.params.email;
    const specificUser = users.find(user => user.email === email);

    if (specificUser) {
        res.json(specificUser);
    } else {
        res.status(statusCodes.NOT_FOUND).json({error: 'User not found'});
    }
}

function isValidEmail(email) {
    return isEmail(email);
}
export function addUser(req, res) {
    const user = req.body;
    user.isAdmin = false;
    const {email, username, password} = req.body;

    const errors = [];
    // const email = req.params.email;
    // const username = req.params.username;
    // const password = req.params.password;

    if (!isValidEmail(email)) {
        errors.push("Email is not valid!");
    }
    if (typeof user['username'] !== 'string'  || typeof user['email'] !== 'string'){
        errors.push("Username/Email need to contain letters and be strings.");
    }
    const specificUser = users.find(userInArray => userInArray.email === email || userInArray.username === username);
    if (specificUser) {
        errors.push("Username/Email is already taken");

    }
    // //Check if any of the fields are empty
    const requiredFields = ['username', 'email', 'password', 'isAdmin'];
    for (const field of requiredFields) {
        if (!(field in user) || user[field] === '') {
            errors.push(`No ${field} in user`);
        }
    }
    if (password.length < 6){
        errors.push("Password needs to be at least 6 characters long");
    }
    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    bcrypt.hash(password, 10, (err, hash) => {
        if (err){
            return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error hashing the password.'});
        }

        user.password = hash;

        users.push(user);
        // res.status(statusCodes.CREATED).json({message: 'User was added!'});
        jwt.sign({email: user.email, isAdmin: user.isAdmin}, secret, (error, result) => {
            if (error) {
                return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error creating the JWT.'});
            }
            res.status(statusCodes.CREATED).json({token: result});
        })
    });


}

import statusCodes from "http-status-codes";
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {secret} from "../utils/utils.js";

export let users = [
    {
        userId: 1,
        username: "djimi",
        email: "djimi2992@outlook.com",
        password: "$2a$10$AePid2lOjHBNwl56WMVOe.CnR6LCDH/BBPG9BvoOkWcisePUB0Pfi", //password: 111111
        isAdmin: true
    }
]

export function getAllUsers(req, res) {
    res.json(users);
}


export function getSpecificUser(req, res) {
    const userId = req.params.email;
    const specificUser = users.find(user => user.email === userId);

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
    const specificUser = users.find(userInArray => userInArray.email === email || userInArray.username === username);
    if (specificUser) {
        errors.push("User already exists");
    }

    // //Check if any of the fields are empty
    const requiredFields = ['username', 'email', 'password', 'isAdmin'];
    for (const field of requiredFields) {
        if (!(field in user) || user[field] === '') {
            errors.push(`No ${field} in user`);
        }
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
        console.log(user);
        // res.status(statusCodes.CREATED).json({message: 'User was added!'});
        jwt.sign({email: user.email, isAdmin: user.isAdmin}, secret, (error, result) => {
            if (error) {
                return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error creating the JWT.'});
            }
            res.status(statusCodes.CREATED).json({token: result});
        })
    });


}
export function editUser(req,res) {
    const user = req.body;
    const email = req.params.email
    const errors = [];

    //Check if any of the fields are empty
    if (!("username" in user) || user.username === '') {
        errors.push("No username in user");
    }
    if (!("email" in user) || user.email === ''){
        errors.push("No email in user");
    }
    if (!("password" in user) || user.password === '') {
        errors.push("No password in user");
    }
    if (!("isAdmin" in user) || user.isAdmin === ''){
        errors.push("No isAdmin in user");
    }
    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    const userIndex = users.findIndex(user => user.email === email);

    users[userIndex] = {
        ...users[userIndex],
        ...user
    };
    console.log(users[userIndex]);
    res.json({ message: 'User was updated!' });
}

export function deleteUser(req,res) {
    const user = req.body;
    const email = req.params.email;
    console.log(user);
    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1)[0];
        res.json({ message: 'User was deleted', deletedUser });
    } else {
        res.status(statusCodes.NOT_FOUND).json({ error: 'User not found' });
    }
}

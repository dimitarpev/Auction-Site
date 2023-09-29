import statusCodes from "http-status-codes";

let users = [
    {
        username: "djimi",
        email: "djimi2992@outlook.com",
        password: "111111",
        isAdmin: false
    }
]

export function getAllUsers(req, res) {
    res.json(users);
}


export function getSpecificUser(req, res) {
    const username = req.params.username;

    const specificUser = users.find(user => user.username === username);

    if (specificUser) {
        res.json(specificUser);
    } else {
        res.status(statusCodes.NOT_FOUND).json({error: 'User not found'});
    }
}

export function addUser(req, res) {
    const user = req.body;
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
    if (!("isAdmin" in user)){
        errors.push("No isAdmin in user");
    }
    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    users.push(user);
    console.log(user);
    res.status(statusCodes.CREATED).json({message: 'User was added!'});
}
export function editUser(req,res) {
    const user = req.body;
    const username = req.params.username
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

    const userIndex = users.findIndex(user => user.username === username);

    users[userIndex] = {
        ...users[userIndex],
        ...user
    };
    console.log(users[userIndex]);
    res.json({ message: 'User was updated!' });
}

export function deleteUser(req,res) {
    const user = req.body;
    const username = req.params.username;
    console.log(user);
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1)[0];
        res.json({ message: 'User was deleted', deletedUser });
    } else {
        res.status(statusCodes.NOT_FOUND).json({ error: 'User not found' });
    }
}

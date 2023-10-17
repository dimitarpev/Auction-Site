import tokenStore from '../stores/tokenStore.js';

export function isLoggedIn(token) {
    console.log('token isLoggedIn', token);
    return token && token !== '';
}

export function isAdmin(token) {
    if (!isLoggedIn(token)) {
        return false;
    }
    return JSON.parse(atob(token.split('.')[1])).isAdmin;
}

export function getEmail(token) {
    if (!isLoggedIn(token)){
        console.log("Need to log in first");
        return "";
    }
    return JSON.parse(atob(token.split('.')[1])).email;
}
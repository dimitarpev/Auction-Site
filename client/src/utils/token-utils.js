
export function isLoggedIn(token) {
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
        return "";
    }
    return JSON.parse(atob(token.split('.')[1])).email;
}
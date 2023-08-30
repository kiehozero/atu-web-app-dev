// Uses same methods as found in lecture material

// Blank array stores credentials
const users = [];

// Create new user
function createUser(username,password){
    // add details to users array
    users.push({username,password});
    // log test in terminal
    console.log(users);
}

// Validate user credentials
function authUser(username, password){
    // Find the user with the given username in the users array
    const user = users.find(user => user.username === username);

    // If the user is not found or the provided password does not match, return false
    if(!user || user.password !== password ) {
        return false;
    }
    // If the username is found and both items match, return true
    return true;
}

module.exports = { createUser, authUser };
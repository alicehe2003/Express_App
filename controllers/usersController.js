// abstractions for how user data is stored and retrieved 
const usersStorage = require("../storages/usersStorage"); 

/**
 * handles GET requests for the user list 
 * uses res.render() to render index view, passing an object 
 * containing title and user info 
 */
exports.usersListGet = (req, res) => {
    res.render("index", {
        title: "User list", 
        users: usersStorage.getUsers(), 
    }); 
}; 

/**
 * handles GET requests to serve user creation from 
 * uses res.render to render the createUser view, passing an object
 * containing title 
 */
exports.usersCreateGet = (req, res) => {
    res.render("createUser", {
        title: "Create user", 
    });
}; 

/**
 * handles POST requests to create new user 
 * extracts firstName and lastName from request body, which contains 
 * the data submitted from the user creation form 
 * redirects user back to root (this is a common pattern to prevent 
 * duplicate submissions and to refresh user list)
 */
exports.usersCreatePost = (req, res) => {
    const { firstName, lastName } = req.body; 
    usersStorage.addUser({ firstName, lastName }); 
    res.redirect("/"); 
}

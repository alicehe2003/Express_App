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

// for validation 

const { body, validationAResult, validationResult } = require("express-validator"); 

const alphaErr = "must only contain letters."; 
const lengthErr = "must be between 1 and 10 characters."; 

const validateUser = [
    body("firstName").trim()
        .isAlpha().withMessage(`First name ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`), 
    body("lastName").trim()
        .isAlpha().withMessage(`Last name ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`), 
]; 

// pass array of middleware validations to controller 
exports.usersCreatePost = [
    validateUser, 
    (req, res) => {
        const errors = validationResult(req); 
        if (!errors.isEmpty()) {
            return res.status(400).render("createUser", {
                title: "Create user", 
                errors: errors.array(), 
            }); 
        }
        const { firstName, lastName } = req.body; 
        usersStorage.addUser({ firstName, lastName }); 
        res.redirect("/"); 
    }
]; 

exports.usersUpdateGet = (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    res.render("updateUser", {
        title: "Update user",
        user: user,
    });
};

exports.usersUpdatePost = [
    validateUser,
    (req, res) => {
        const user = usersStorage.getUser(req.params.id);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).render("updateUser", {
            title: "Update user",
            user: user,
            errors: errors.array(),
        });
        }
        const { firstName, lastName } = req.body;
        usersStorage.updateUser(req.params.id, { firstName, lastName });
        res.redirect("/");
    }
];



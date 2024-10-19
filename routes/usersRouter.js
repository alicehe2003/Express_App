const { Router } = require("express"); 
const usersController = require("../controllers/usersController"); 
const usersRouter = Router(); 

// usersRouter.METHOD("PATH", HANDLER) 

/** 
 * listens for GET requests at the root path / of the usersRouter
 * the handler function usersListGet (from usersController) will be 
 * called when this route is accessed 
*/ 
usersRouter.get("/", usersController.usersListGet); 

/**
 * listens for GET requests at the /create path of the usersRouter 
 * the handler function usersCreateGet (from usersController) will be 
 * called when this route is accessed 
 * usually, this is used to serve a form for creating a new user
 */
usersRouter.get("/create", usersController.usersCreateGet); 

/**
 * listens for POST requests to /create
 * the handler function usersCreatePost (from usersController) will
 * process form submission or data sent to create a new user 
 * usually, when the form served by the /create GET route is submitted, 
 * it send a POST request to the same path (/create), and this handler 
 * would process the form data to create a new user in the system 
 */
usersRouter.post("/create", usersController.usersCreatePost); 

module.exports = usersRouter; 

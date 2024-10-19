# Express_App
Odin Project: Express app demo 

`npm init -y` to create package.json 

`npm install express ejs express-validator` to install dependencies - use `express-validator` for form validation to prevent malicious inputs

# Notes 

`express.urlencoded()` is a middleware used to parse incoming request bodies that contain URL-encoded data, which is typically submitted through HTML forms. It ensure that the data in the body of a POST request is properly parsed and made available on `req.body` as a JavaScript object. Most simple forms will use `Content-Type: application/x-www-form-url-encoded` HTTP header when sending data to server, if `Content-Type` does not match this form, server will show data as an empty object `{}`, 

`req`: the requested object, which contains information about the HTTP request 

`res`: the response object, which is used to send back a response to the client 

After POST request, redirect user to root path - this prevents duplicate submissions and refreshes the user list. 

The usersStorage class simulates interactions with a database. 

Run with `node --watch app.js`. 

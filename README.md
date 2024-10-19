# Express_App
Odin Project: Express app demo 

`npm init -y` to create package.json 

`npm install express ejs express-validator` to install dependencies - use `express-validator` for form validation to prevent malicious inputs

# Notes 

`express.urlencoded()` is a middleware used to parse incoming request bodies that contain URL-encoded data, which is typically submitted through HTML forms. It ensure that the data in the body of a POST request is properly parsed and made available on `req.body` as a JavaScript object. 

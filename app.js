const express = require("express"); 
const app = express(); 
const userRouter = require("./routes/usersRouter"); 

app.set("view enginer", "ejs"); 
app.use(express.urlencoded({ extended: true })); 
app.use("/", usersRouter); 

const PORT = process.end.PORT || 3000; 
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`)); 


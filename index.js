// Use as final when we get the routes and controllers

const express = require('express'); // IMPORT EXPRESS FRAMEWORK
const commentsRouter = require("./routes/comments")
const contactsRouter = require("./routes/contacts")
const productsRouter = require("./routes/products")
const vehiclesRouter = require("./routes/vehicles")

const app = express(); // DECLARE APP THAT USES EXPRESS

let PORT = 5001; // DEFINE PORT
app.use(express.json()); // LETS APP USE JSON


//Let app know where the public items are located
app.use(express.static('public'));
app.use(commentsRouter)
app.use(contactsRouter)
app.use(productsRouter)
app.use(vehiclesRouter)



app.listen(PORT, () => {
    console.log('Application is listening on port', PORT)
})

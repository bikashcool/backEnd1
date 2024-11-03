const express = require('express');
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');
// specifically parse json data & add it to the request body object
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log("Server started at port no. 4000")
});

app.get('/', (request, response) => {
    response.send("BackEnd Development")
})

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted succesfully");
});

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/myDatabase")
.then(() => {console.log("Connection Successfull")})
.catch((error)=> {console.log("Recieved an Error")});


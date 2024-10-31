const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server started at port no. 3000")
});

app.get('/', (request, response) => {
    response.send("BackEnd Development Started")
})
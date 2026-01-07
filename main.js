 const express = require('express');
const app = express();
app.get("/hello", (req,res) => {
    res.send("helloooo")
})

app.get("/", (req,res) => {
    res.send("welcome to home page")
})

app.get("/hi", (req,res) => {
    res.send("hi guys")
})

app.get("/ti", (req,res) => {
    res.send("ti guys")
});


app.delete("/de", (req,res) => {
    res.send("delete guys ")
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

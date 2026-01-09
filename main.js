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

app.get("/go", (req,res) => {
    res.send("go guys")
});


app.delete("/de", (req,res) => {
    res.send("delete guys ")
});


app.get("/findSummation", (req,res) => {
     res.send("find summation")
});



app.listen(3000, () => {
    console.log("57 Server is running on port 3000");
});


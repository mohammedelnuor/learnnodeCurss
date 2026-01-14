 const express = require('express');

 const app = express();

 app.use(express.json());


app.get("/hello", (req,res) => {
    res.send("helloooo")
})

app.get("/", (req,res) => {
    res.send("welcome to home page")
})

app.get("/hi", (req,res) => {
    res.send("hi guys")
})

app.get("/numbers", (req,res) => {
    let numbers = "";
    for(let i=0; i<=100; i++){
        numbers += i + " ";
    }
    // res.send(`the numbers are : ${numbers}`);
    res.sendFile(__dirname + "/views/numbers.html");
});

app.get("/findSum/:numbers1/:numbers2", (req,res) => {

const num1 = req.params.numbers1;
const num2 = req.params.numbers2;

    const total = Number(num1) + Number(num2);
});

app.get("/sehello", (req,res) => {
    

    // console.log(req.query);

    // res.send(`hello ${req.body.name}, your age is : ${req.query.age}`);

       res.json({
        name: req.body.name,
        age: req.query.age
        
    });
});



app.get("/seHello", (req,res) => {
    console.log(req.query);
    res.send(`hello ${req.query.name} your age is ${req.query.age}`);
});

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
    console.log(" Server is running on port 3000");
});


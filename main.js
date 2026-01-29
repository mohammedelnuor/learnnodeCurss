 const express = require('express');
 const mongoose = require('mongoose');
 

 const app = express();

 app.use(express.json());



const Article = require('./models/Article.js');



mongoose.connect("mongodb+srv://mohammedelnour:0117063955@myfierstonecluster.tlp1kbe.mongodb.net/?appName=MyFierstOneCluster")
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error("Error connecting to MongoDB", error);
    });

//  mongodb+srv://<db_username>:<db_password>@myfierstonecluster.tlp1kbe.mongodb.net/?appName=MyFierstOneCluster


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
    // res.sendFile(__dirname + "/views/numbers.html");
   app.render("numbers.ejs",{
    name : "MOHAMMED",
    numbers : numbers,
   });

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



// aritcale endpoints

app.post("/articles", async (req,res) => {
    const newArticle = new Article();

    const arTitle = req.body.articaletitle;
    const arBody = req.body.articalebody;

    newArticle.title = arTitle;
    newArticle.body = arBody;
    newArticle.Numberoflikes = 110;
    await newArticle.save();
    res.json(newArticle);
});



app.get("/articles/:articleId", async (req,res) => {
    const id = req.params.articleId;
    const article = await Article.findById(id);
    res.json(article);
});

app.get("/articles", async (req,res) => {
    const articles =  await Article.find();


    

res.json(articles);
});


app.delete("/articles/:articleId", async (req,res) => {
    const id = req.params.articleId;
   try{
    const article = await Article.findByIdAndDelete(id);
    res.json(article);
    return; 
   } catch(error){
    console.log("Error deleting article", id);
    return;
   }
}); 

app.get("/showArticles", async (req,res) => {
    const articles =  await Article.find();


res.render("article.ejs" , {
    allarticlesList : articles});
});

app.listen(3000, () => {
    console.log(" Server is running on port 3000");
});


// al-vFiVYoanaL5dhUyDCZU0G5IozWtHaC7W6eh0UdYtW1O

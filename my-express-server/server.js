// first step is npm init, in order to install external dependencies

const express = require("express");

const app = express();

// '/' is our home page
app.get("/", function (req, res) {
  res.send("<h1>Hello World!!</h1>");
});

app.get('/contact',function(req,res){
res.send('Contact me at: plw@gmail.com')
})

app.get('/about', function(req,res){
    res.send("My name PLW. I started learning web-development in Feb 2020 in an online course for 1 year . I found the group-class not helpful for me. I graduated from the school in Feb 2021, did internship in a startup company till Apr 9, 2021. After that, I'm re-learning by myself following a Udemy course from Angela Yu. I find her course helpful for me!")
})

app.get('/hobbies',function(req,res){
    res.send('<ul>My hobbies are:<li>Cooking</li><li>Traveling</li><li>Learning coding</li></ul>')
})








app.listen(3000, function () {
  console.log("Server started on port 3000");
});

const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.urlencoded({extended : true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");    
});

app.post("/bmicalculator", function(req,res) {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    console.log(req.body);
    res.send("Your BMI is " + weight / Math.pow(height,2));
});

app.listen(3000);

const express = require("express");
const app =express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({extended:true}));
app.use( express.static ( __dirname  +"/public"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname , "views"));

app.get("/",(req,res)=>{
    res.render( "index.ejs");
})
//bmi calci
app.get("/bmi",(req,res)=>{

    res.render("bmi.ejs")
})


app.post("/bmi",function(req,res){   
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height); 
     let converH = (height/100)  
       var BMI =( weight/Math.pow(converH,2));
    res.send("your Bmi is " + BMI);
 });
 //calorie calci
 app.get("/calorie",(req,res)=>{
    res.render("calorie.ejs")
 })

 app.post("/calorie",(req,res)=>{

    var calHeight = (req.body.calht); 
    var calAge = (req.body.colAg);
    var calWeight = parseFloat(req.body.calwt); 
    // let htfinal = calHeight*0.0328084 ;
    // console.log(htfinal);
    var result = 66.5 + (13.75 * calWeight) + (5.003 * calHeight) - (6.75 * calAge);
    res.send("You need " + result + " calories to maintain your weight and if you want to gain muscle then you need " + (500+result) + " and to loose weight you need " + (result-500));
 });
 //contact page

 app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
 })
 //workout page
 app.get("/workouts",(req,res)=>{
    res.render("workout.ejs");
 })






//listening on port 3000s
app.listen(3000,function(){
    console.log("port is running on 3000");
});
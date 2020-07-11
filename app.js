var express=require('express');
var billController=require('./controllers/bill-controller');

var app=express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));


//fire controllers
billController(app);
//listen to port
var PORT= process.env.PORT || 3000;
app.listen(PORT);
console.log("Application started at localhost:3000!!!");

var express=require('express');
var path = require('path');
var app=express();
var bodyParser=require('body-parser');
app.locals.pretty = true;
app.set('view engine','jade');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

var mongoose=require('mongoose');
var router =express.router();
var BoardContents=require('../models/codes');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost:27017/databases');
// var boards=require('./routes/contents');
// app.use('/R',boards);
var code=require('./models/code');

app.get('/Python',function(req,res){
    res.render('Python');
});


app.listen(3000,function(){
    console.log('connected 3000 port!');
});

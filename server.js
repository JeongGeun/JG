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
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
mongoose.connect('mongodb://localhost:27017/databases');;
// var code=require('./mode ls/code');
// var router=require('./routes')(app,code);
//app.use(express.static(path.join(__dirname,'public/')));
app.get('/R',function(req,res){
  res.sendFile(path.join(__dirname+'/public/R.html'));
});
app.post('/R',function(req,res){
    var title =req.body.title;
    var Rcode=req.body.Rcode;
    res.send(title+","+Rcode);
});
app.get('/Python',function(req,res){
    res.sendFile(path.join(__dirname+'/public/Python.html'));
});
app.get('/R/form',function(req,res){
  res.render('form');
});
app.get('/Python/form2',function(req,res){
  res.render('form');
});
// module.exports = function(app,codes)
// {
//     // GET ALL BOOKS
//     app.get('/R/code', function(req,res){
//       Code.find(function(err, books){
//       if(err) return res.status(500).send({error: 'database failure'});
//       res.json(books);
//   });
//     });
//
//     // GET SINGLE BOOK
//     app.get('/R/code/:codes_id', function(req, res){
//         res.end();
//     });
//
//     // CREATE BOOK
//     app.post('/R/code', function(req, res){
//           var code = new Code();
//           code.title = req.body.title;
//           code.date = new Date(req.body.date);
//
//           code.save(function(err){
//               if(err){
//                   console.error(err);
//                   res.json({result: 0});
//                   return;
//               }
//
//               res.json({result: 1});
//
//           });
//         //res.end();
//     });
//
//     // UPDATE THE BOOK
//     app.put('/R/code/:codes_id', function(req, res){
//         res.end();
//     });
//
//     // DELETE BOOK
//     app.delete('/R/code/:codes_id', function(req, res){
//         res.end();
//     });

// }


app.listen(3000,function(){
    console.log('connected 3000 port!');
});

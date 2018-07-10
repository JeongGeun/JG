var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/',function(req,res){
  res.send('Hello homepage');
});
app.get('/route',function(req,res){
  res.send('Hello homepage,<img src="/s1.png">');
});
app.get('/login',function(req,res){
      res.send('login please')

})
app.listen(3000,function(){
    console.log('connected 3000 port!');
})

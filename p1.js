var http=require('http');
var express=require('express');
var app=express();

// app.use(function(reuest,response,next){
//   console.log('request');
//   next();
// });
// app.use(function(request,response){
//   response.send('Hi');
//
// // });
// app.use('/user',function(req,res){
//
//
// });
// app.use('/movies',function(req,res){
//
//
// });
//라우팅을 통한 미들웨어 설정 경로에 따라 나누고 함수 기능 구현
//같은 function을 나누었을 때에는 next로 다음 것을 실행함
//url에 ?가 있을 때에는 쿼리문을 분석해서 미들웨어를 구현함


//post방식에서의 사용법
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
  extended:true
}));//json형태
app.use(bodyParser.json());
app.post('경로',function(req,res){
  req.body.'키'='값'
})


//파일을 보내는법
//정적파일:변하지 않는 파일들(ex)이미지파일,)
var app=express();
app.use(express.static('image'));
app.use('/image',express.static('image'));
//server_add/image/file_name

//에러 핸들링 코드(미들웨어의 한 종류)
var app=express();
app.use(function(err,req,res){
      if(err==404)
  {
          res.send("not ");

  }
}
)








http.createServer(app).listen(30000);

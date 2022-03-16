var express = require('express');
// var portlink = require('./routes/router')
var app = express(); //express module instuns app
var time = new Date(); //기본적으로 컴퓨터가 쓰고 있는 매체(절대적으로 한개밖에 없음)
var mysql = require('mysql')
var dbconfig = require('./db/config.js')
var connection = mysql.createConnection(dbconfig)

var postsend = require('./api/postsend')//application protocal interface
var getsend = require('./api/getsend')


app.set('port',8080)
app.get('/',(req,res)=>{
    res.send('/루트요청 있었음')
})

app.get('/introduce',(req,res)=>{
    connection.query(
        'SELECT * FROM introduce_react_interview.Users',
        (error,result)=>{
            if(error)throw error;
            res.send(result)
        })
})

//리액트에서 비동기로 정보요청할 주소 세팅
app.use('/postsend',postsend); //localhost:8080n/postsend
app.use('/getsend',getsend);

app.listen(app.get('port'),()=>{
    console.log(time + '콘솔에서 시간으로 확인해보면 바로 알게됨');
})

// app.get('/',function(req,res){
//     res.send('글자노출')
// })

// app.get('/me',function(req,res){
//     res.send('나의소개')
// })
// app.get('/portfolio',function(req,res){
//     res.send('나의작품')
// })
// app.get('/preinterview',function(req,res){
//     res.send('사전면접')
// })
// app.get('/contact',function(req,res){
//     res.send('면접제안')
// })
// app.get('/react',function(req,res){
//     res.send('리액트')
// })

// app.use('/mylink',portlink);

// app.listen(8080,function(){
//     console.log('서버구동')
// })


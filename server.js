var express = require('express');
var portlink = require('./routes/router')
var app = express();

app.get('/',function(req,res){
    res.send('글자노출')
})

app.get('/me',function(req,res){
    res.send('나의소개')
})
app.get('/portfolio',function(req,res){
    res.send('나의작품')
})
app.get('/preinterview',function(req,res){
    res.send('사전면접')
})
app.get('/contact',function(req,res){
    res.send('면접제안')
})
app.get('/react',function(req,res){
    res.send('리액트')
})

app.use('/mylink',portlink);

app.listen(8080,function(){
    console.log('서버구동')
})


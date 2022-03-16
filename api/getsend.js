var express = require('express')
var getsend = express.Router();

getsend.get('/',(req,res,next)=>{
    res.send('그냥 가벼운 데이터/타입은 텍스트')
})
module.exports = getsend
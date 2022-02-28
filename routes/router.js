var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('/user라고 치면 내가 나옴')

})
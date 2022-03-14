var express = require('express');
var router = express.Router();

router.get('/',function(a,b){
    b.send('/뭐라고 나오게 할까 나와라나와라')
})
router.get('/myport',function(a,b){
    b.send({'navidb':'[["나의소개","/about"],["면접제안","contact"],["포트폴리오","/portfolio"]]'});
})

module.exports = router;
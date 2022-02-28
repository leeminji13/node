var express = require('express');
var router = express.Router();

router.get('/',function(a,b){
    b.send('/뭐라고 나오게 할까 나와라나와라')
})
module.exports = router;
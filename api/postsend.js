var express = require('express');
var router = express.Router();

router.post('/',(req,res,next)=>{
    res.send({
        'postdbtitle':'post 전송방식은 좀 이렇게 xml혹은 json과 같은 구조가 단순하지 않음',
        'postbdtitle':'좀더 내용을 넣어보는데 key 와 value가 구분되는 json포맷으로',
        'key':'value'
    })
})

module.exports = router;
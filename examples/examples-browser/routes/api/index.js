var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({ success: true})
});

router.post('/', function(req, res, next) {
  res.send({ success: true})
});


/* 없는 페이지 처리 */
router.all('*', function(req, res, next) {
  next(createError(404, `${req.path} not found`))
});

module.exports = router;


// < url = /api > 
// 토큰을 검사하여 req.user에 싣거나 사전차단 기능을 수행함
// front에서 axios.post를 통해 헤더와 내용이 들어올 때, 
// 헤더에서 토큰 값을 받아 verify하고 이를 req에 추가하여 넘김

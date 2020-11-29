var express = require('express');
var router = express.Router();

// 以下、データ受信
router.post('/', function(req, res, next) {
  console.log(req.body.menu);
  console.log(req.body.sex);
  console.log(req.body.age);
  [req.body.menu, req.body.sex, req.body.age],
      (error, result, fields) =>{
        res.send('データが送信されました！！');
      };
});




module.exports = router;
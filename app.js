// モジュールをロードしてインスタンス化。
var createError = require('http-errors');
var express = require("express");
var app = express();

// save.jsの処理
var saveRouter = require('./routes/save');
app.use('/save', saveRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// ポート番号を指定して待ち受け開始。
// app.get('/', function (req, res) {
//   res.send('nodeが起動しました!');
// });
// app.listen(3000, function () {
// });

module.exports = app;
var port = process.env.PORT || 3000
app.listen(port, () => console.log('右のportが立ち上がりました : ',port));
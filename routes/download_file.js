var express = require('express');
var router = express.Router();
var path=require('path');

router.get('/', function (req, res) {
//   res.sendStatus(200);
  console.log(req.query)
  res.download(__dirname+'/../'+req.query.file_path);
});


module.exports = router;
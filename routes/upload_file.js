var express = require('express');
var router = express.Router();
var multer = require('multer');
var path=require('path');

const storage = multer.diskStorage({ 
  destination:(req,file,cb) => {
    cb(null,__dirname+'/../public/uploads')
  },
  filename: (req, file, cb)=> {
    cb(null,Date.now()+ path.extname(file.originalname)) //Appending extension
  }
});

var upload=multer({storage:storage});

router.get('/', function (req, res) {
  res.render("form");
});

router.post('/',upload.single('upload'), async (req, res) => {
  res.json({msg:req.file});
});

module.exports = router;
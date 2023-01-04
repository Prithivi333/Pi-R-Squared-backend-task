var express = require('express');
var router = express.Router();
var multer = require('multer');
var path=require('path');
var mongoose = require('mongoose');
// var FormData=require('form-data');
// var fs=require('fs');
// const {GridFsStorage}=require('multer-gridfs-storage');
const url = "mongodb://localhost:27017/API";

// const storage=new GridFsStorage({url});
const upload = multer({ dest:"./public/uploads",
  filename: async (req, file, cb)=> {
    await cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
});

router.get('/', function (req, res) {
  res.render("form");
});

router.post('/',upload.single('upload'), async (req, res) => {
  // const fd=new FormData();
  // fd.append("my_file",fs.createReadStream(req.file),req.file.filename);
  // console.log(path.extname(req.file.originalname));
  res.json({msg:req.file});
});

module.exports = router;
var express = require('express');
var router = express.Router();
const fs=require('fs');

router.get('/', function(req, res, next) {
    const token=req.session.user.token;
    if(token!=null){
        // console.log(__dirname)
        fs.readdir(__dirname+'/../public/uploads',(err,files)=>{
            if(err)res.status(400);
            console.log(files);
            res.json({"status": "ok", "data": files});
        })
    }
});

module.exports = router;
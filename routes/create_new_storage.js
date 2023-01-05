var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const session=require('express-session');

var sessionData;

router.post('/', function(req, res, next) {
    sessionData=req.session;
    sessionData.user={'token':uuidv4()};
    res.json({
        "status": "ok",
        "message": "Storage Created Successfully"
    })
});

module.exports = router;
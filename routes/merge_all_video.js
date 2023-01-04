var express = require('express');
var router = express.Router();
var ffmpeg = require('fluent-ffmpeg');
var fs=require('fs');

const dest=fs.createWriteStream("public/videos/mergedAllVideo.mp4")

router.post('/', function(req, res, next) {
    req.body.video_file_path_list.forEach((vid)=>{
        ffmpeg(dest).mergeAdd(vid)
    });
    ffmpeg().output("public/videos/mergedAllVideo.mp4")
    res.json({message:"Videos merged successfully",video_file_path:"public/videos/mergedAllVideo.mp4"});
});

module.exports = router;
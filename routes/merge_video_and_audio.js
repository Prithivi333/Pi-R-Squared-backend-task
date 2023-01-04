var express = require('express');
var router = express.Router();
var ffmpeg = require('fluent-ffmpeg');
var fs=require('fs');

// const dest=fs.createWriteStream("public/videos/mergedVideo.mp4")

router.post('/', function(req, res, next) {
    ffmpeg()
    .addInput(req.body.video_file_path)
    .addInput(req.body.audio_file_path)
    .addOutputOption('-map 0:v:0')
    .addOutputOption('-map 1:a:0')
    .output("public/videos/mergedVideo.mp4")
    // .save('/public/videos/mergedVideo.mp4')
    // .pipe(dest,{end:true});

    res.json({message:"Video and Audio merged successfully",video_file_path:"public/videos/mergedVideo.mp4"});
});

module.exports = router;
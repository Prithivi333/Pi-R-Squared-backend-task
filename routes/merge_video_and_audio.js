var express = require('express');
var router = express.Router();
var ffmpeg = require('fluent-ffmpeg');
var fs=require('fs');

// const dest=fs.createWriteStream("public/videos/mergedVideo.mp4")
const dest="public/videos/mergedVideo.mp4";
const tmp="public/videos";
const final=ffmpeg();

router.post('/', function(req, res, next) {
    final
    .input(req.body.video_file_path)
    .input(req.body.audio_file_path)
    // .output(dest)
    // .noAudio()
    // .on('error', function(err) {console.log(err);})
    // .on('end', function() {console.log('Successfully removed source audio');});
    // // .addOutputOption('-map 0:v:0')
    // // .addOutputOption('-map 1:a:0')
    // final.addInput(req.body.audio_file_path)
    .on("error",(err)=>{console.log(err);})
    .on("end",()=>{
        console.log("finished merging videos!");
        res.json({message:"Video and audio merged successfully",video_file_path:dest});
    })
    .saveToFile(dest,tmp)
    // .save('/public/videos/mergedVideo.mp4')
    // .pipe(dest,{end:true});

    // res.json({message:"Video and Audio merged successfully",video_file_path:dest});
});

module.exports = router;
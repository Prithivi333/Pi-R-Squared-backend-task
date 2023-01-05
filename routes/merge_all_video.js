var express = require('express');
var router = express.Router();
var ffmpeg = require('fluent-ffmpeg');
var fs=require('fs');


router.post('/', function(req, res, next) {
    const final=ffmpeg();
    req.body.video_file_path_list.forEach((vid)=>{
        final.addInput(vid);
    })
    final.mergeToFile("public/videos/mergedAllVideo.mp4")
    .on("error",(err)=>{console.log(err);})
    .on("end",()=>{
        console.log("finished merging videos!");
        res.json({message:"Videos merged successfully",video_file_path:"public/videos/mergedAllVideo.mp4"});
    });
});

module.exports = router;
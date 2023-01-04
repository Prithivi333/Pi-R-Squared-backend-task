var express = require('express');
var router = express.Router();
var videoshow=require('videoshow');

var videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
  }

router.post('/', function(req, res, next) {
    videoshow([req.body.image_file_path],videoOptions)
    .audio(req.body.audio_file_path)
    .save('public/videos/video.mp4')
    .on('error', (err)=>{console.log(err)})
    .on('end', ()=>{console.log('Success!')});

    res.json({message:"Video created successfully",video_file_path:"public/videos/video.mp4"});
});

module.exports = router;
const express = require('express');
const router = express.Router();
const fs=require('fs');
const gtts=require('gtts');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
    fs.readFile(req.body.file_path, 'utf8', async (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
        const audio=new gtts(data,'en');
        await audio.save('./public/audios/audio.mp3',async (err,res)=>{
          if(err){
            throw new Error(err);
          }
          else{
            console.log(`Open public/audios/audio.mp3 to listen!`);
          }
        });
      });
      res.json({"message":"Audio converted","audio_file_path":"/public/audios/audio.mp3"});
});

module.exports = router;
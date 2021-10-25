const express = require('express')
const router = express.Router()
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");
router.get('/search/:idAnime',(req,res)=>{
    API.Anime.GetByID(req.params.idAnime).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send({status_code:400,error:err})
    });
})

router.get('/search',(req,res)=>{
    API.Anime.Get({
        genres: [
            "Action",
            "Adventure",
            "Comedy"
          ]
    },1,100).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send({status_code:400,error:err})
    });
})

module.exports = router
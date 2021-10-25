const express = require('express')
const router = express.Router()
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");
router.get('/:animeId/:id',(req,res)=>{
    API.Episode.GetByID(req.params.id).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send({status_code:400,error:err})
    })
})

router.get('/:animeId',(req,res)=>{
    API.Episode.Get({
        anime_id: req.params.animeId
    }).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send({status_code:400,error:err})
    });
})

module.exports = router
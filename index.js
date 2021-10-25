const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");
const express = require('express');
const app = express()
const routerAnime = require('./routes/anime')
const routerEpisode = require('./routes/episode')
const routerSong = require('./routes/songs')
app.use('/animes',routerAnime)
app.use('/episode',routerEpisode)
app.use('/songs',routerSong)
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})
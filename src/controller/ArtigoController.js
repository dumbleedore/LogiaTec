const express = require('express')
const mongoose = require('mongoose')
const Artigo = require('../models/Artigo')

module.exports = {
    async getArtigos(req,res){
        const artigo = await Artigo.find()
        return res.json(artigo)
    }
}



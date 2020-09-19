const express = require('express');
const Artigo = require('../models/Artigo');
const User = require('../models/User');

module.exports = {
  async getArtigos(req, res) {
    const artigo = await Artigo.findAll();
    return res.json(artigo);
  },

  async addArtigo(req, res) {
    const newArtigo = await Artigo.create({
      title: req.body.title,
      sobre: req.body.sobre,
      userId: req.params.id,
    });
    return res.json(newArtigo);
  },
};

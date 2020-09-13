const express = require('express');
const Artigo = require('../models/Artigo');

module.exports = {
  async getArtigos(req, res) {
    const artigo = await Artigo.findAll();
    return res.json(artigo);
  },
};

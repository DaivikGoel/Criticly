var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
var TMDBApiKey = require('../apikeys');
/* GET home page. */
var trending;
router.get('/', function(req, res, next) {
  fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=' + TMDBApiKey.TMDBApiKey)
    .then(res => res.json())

});

module.exports = router;

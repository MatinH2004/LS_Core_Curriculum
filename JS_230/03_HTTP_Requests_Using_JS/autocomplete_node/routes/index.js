var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var COUNTRIES_PATH = path.join(__dirname, '../data/countries.json');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Autocomplete!' });
});

router.get('/countries', function(req, res, next) {
  var query = req.query.matching.toLowerCase() || '';
  var searchResults = searchCountry(query);
  res.json(searchResults);
});

function searchCountry(query) {
  if (query.length === 0) return [];
  return countries().filter(function(country) {
    return nameStartsWith(country, query);
  }).slice(0, 20);
}

function countries() {
  var file = fs.readFileSync(COUNTRIES_PATH, 'utf8');
  return JSON.parse(file);
}

function nameStartsWith(country, characters) {
  return country['name'].toLowerCase().startsWith(characters);
}

module.exports = router;

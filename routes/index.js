var express = require('express');
var CSV = require('csv-string');
var router = express.Router();
var fs = require('fs')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

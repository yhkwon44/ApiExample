var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var list = [];
router.all('/write', function(req, res, next) {
  var name = req.query.name
  var content = req.query.content
  
  list.push({name:name, content:content});
  console.log(list)
  res.send(true)
});

router.all('/read', function(req, res, next) {
  console.log(list)
  res.send(list);
});

module.exports = router;

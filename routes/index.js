var validate = require('../lib/validate.js');
var calculate = require('../lib/splitter.js');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/calculate', function (req, res, next) {
  var errorCheck = validate(req.body.totalAmount, req.body.splitCount);
  if (errorCheck.length > 0) {
    res.render('index', {errors: errorCheck});
  } else {
    var amountToPay = calculate.moneySplitter(req.body.totalAmount, req.body.splitCount);
    res.render('index' , {amountToPay: amountToPay});
  }
});

module.exports = router;

//require express
var express = require('express');
var path = require('path');

// create router object
var router = express.Router();

//export router
module.exports = router;

// route for home page 
router.get('/', function(req, res){
	res.render('pages/index');
});

// route for about page 
router.get('/about', function(req, res){
	res.render('pages/about');
});

router.get('/contact', function (req, res){
	res.render('pages/contact');
});

router.post('/contact', function (req, res){

});
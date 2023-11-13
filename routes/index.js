var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var axios = require('axios');


router.use(bodyParser.urlencoded({ extended: false }));

/* GET login index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dashboard page. */
router.get('/dashboard', async function(req, res, next) {

  let userData = await axios.get('https://jsonplaceholder.typicode.com/users')
   
  res.render('dashboard', { userData: userData.data });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Profile' });
});



module.exports = router;

var express = require('express');
var router = express.Router();
var helper = require('../helper/firebase');

router.route('/')
.get(helper.retrieveItems)


module.exports = router;
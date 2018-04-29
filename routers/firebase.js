var express = require('express');
var router = express.Router();
var helper = require('../helper/firebase');

router.route('/')
.post(helper.createItem)
.get(helper.retrieveItems)


router.route('/:itemID')
.put(helper.updateItem)



module.exports = router;
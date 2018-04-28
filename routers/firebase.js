var express = require('express');
var router = express.Router();
var helper = require('../helper/firebase');

router.route('/')
.get(helper.retrieveItems)
.post(helper.createItem)


/*router.route('/:itemId')
.get(helper.getTodo)
.put(helper.putTodo)
.delete(helper.deleteTodo)*/


module.exports = router;
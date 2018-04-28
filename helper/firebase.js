// get firebase model
const firebase_db = require("../models/firebase");

exports.createItem = (req,res) => {

    var user_item = {
        add:req.body.address,
        name: req.body.name,
        reservedPickUp:false};


    // add the item..
    firebase_db.put().child("item_ino").set(user_item);
}

exports.retrieveItems = (req,res) => {
// 
    var data = firebase_db.on("value",snapshot => {
        res.json(snapshot.val());
    });

}

module.exports = exports;
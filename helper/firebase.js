// get firebase model
const firebase_db = require("../models/firebase");

exports.addItem = (req,res) => {
    var item = {
        add:"ABC 123 ave 2FL 11228",
        name: "sheng",
        reservedPickUp:false};

    // add the item..
    firebase_db.child("item_ino").set(user_items);
}

exports.retrieveItems = (req,res) => {
// 
    var data = firebase_db.on("value",snapshot => {
        res.json(snapshot.val());
    });

}

module.exports = exports;
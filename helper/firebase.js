// get firebase model
const firebase_db = require("../models/firebase");

exports.addItem = () => {
    var item = {
        add:"ABC 123 ave 2FL 11228",
        name: "sheng",
        reservedPickUp:false};

    // add the item..
    firebase_db.child("item_ino").set(user_items);
}

exports.retrieveItems = () => {

    console.log(firebase_db);
    console.log(firebase_db.toJSON());
}

module.exports = exports;
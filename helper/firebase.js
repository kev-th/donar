// get firebase model
const firebase_db = require("../models/firebase");

exports.createItem = function(req,res) {
    
    var user_item = {
        add: req.body.address,
        name: 'req.body.name',
        reservedPickUp: false,
        reservedBy: 'Hackathon Demo'
    };


    // add the item..
    firebase_db.push().set(user_item)
    .then( (d) => {
        res.json(user_item);
    })

}

exports.retrieveItems = (req,res) => {
// 
    console.log(req);
    var data = firebase_db.on("value",snapshot => {
        res.json(snapshot.val());
    })

}

exports.updateItem = (req,res) => {
    // 
        // var data = firebase_db.on("value",snapshot => {
        //     res.json(snapshot.val());
        // });
    
    console.log("This is req:::::"+ req);
        // var updates = {};
        // updates["/item_ino/" + req.params.id + "/reservedPickedUp"] = true;
        // firebase_db.update(updates);
}

module.exports = exports;
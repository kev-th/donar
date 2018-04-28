const firebase = require("firebase");
//---------------------------------------------------------------Firebase
var config = { 
    apiKey: "AIzaSyCe2H4qhxan8EduPbmL2zAk6_Bj8UcXU2Y",
    authDomain: "donar-b2ae2.firebaseapp.com",
    databaseURL: "https://donar-b2ae2.firebaseio.com",
    projectId: "donar-b2ae2",
    storageBucket: "donar-b2ae2.appspot.com",
    messagingSenderId: "384545117152"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database().ref();

  // updates user's item information up to firebase database---------
  // get user input from here...
  function hardCodeDatabaseInit(){
    var user_item1 = {
                add:"ABC 123 ave 2FL 11228",
                name: "sheng",
                reservedPickUp:false}
    var user_item2 = {
                add:"ABC 123 ave 2FL 11228",
                name: "shen_ABC",
                reservedPickUp:false}
    var user_item3 = {
                add:"ABC 123 ave 2FL 11228",
                name: "she_ING",
                reservedPickUp:false}
    var user_item4 = {
                add:"ABC 123 ave 2FL 11228",
                name: "sh_AKOP",
                reservedPickUp:false}
    var user_items = [user_item1,user_item2,user_item3,user_item4,user_item4];

  database.child("item_ino").set(user_items);

  }

module.exports = database;
//---------------------------------------------------------------Firebase end
  


//Import Express
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const path = require('path');
const firebase = require("firebase");

var html_dir = './views/'

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

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
  var item_infos = {
                add:"ABC 123 ave 2FL 11228",
                name: "sheng",
                reservedPickUp:false}

  database.push().child("item_info").set(item_infos);



  


//Start the server
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

//Rout to the index/home page
app.get('/', (req,res)=>{
    res.send("Hello");
})

app.get('/home', (req,res)=>{
    res.sendFile('home.html', {root: path.join(__dirname, 'views')});
})


app.get('/item1', (req,res)=>{
    res.sendFile('item1.html', {root: path.join(__dirname, 'views')});
})
app.get('/item2', (req,res)=>{
    res.sendFile('item2.html', {root: path.join(__dirname, 'views')});
})
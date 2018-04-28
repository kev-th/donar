//Import Express
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const path = require('path');
const firebase = require("firebase");
const fs = require('fs');

//IBM Cloud Watson Visual Recognation
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

var visualRecognition = new VisualRecognitionV3({
    version_date: '2018-03-19',
    api_key: "63e90ae817c302706cc1a4b0ad348b3c7643f78b",
    headers: {
        'X-Watson-Learning-Opt-Out': 'true'
    }
  });

var images_file = fs.createReadStream('./clothes.png');
var classifier_ids = ["default"];

var params = {
    images_file: images_file,
    classifier_ids: classifier_ids
};

visualRecognition.classify(params, (err, res)=> {
    if(err)
    console.log(err);
    else
    console.log(JSON.stringify(res, null, 2))
})


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
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
  var item_infos = {
                add:"ABC 123 ave 2FL 11228",
                name: "sheng",
                reservedPickUp:false}

  database.push().child("item_info").set(item_infos);


//---------------------------------------------------------------Firebase end
  


//Start the server
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

//Rout to the index/home page
app.get('/', (req,res)=>{
    res.send("Hello");
})

//rout to /views/test.html when user go to localhost:5000/main
app.get('/main', (req,res)=>{
    res.sendFile('test.html', {root: path.join(__dirname, 'views')});
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
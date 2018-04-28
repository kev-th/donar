//Import Express
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const path = require('path');
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
//Import Express
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const path = require('path');

var html_dir = './views/'

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


//Start the server
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

//Rout to the index/home page
app.get('/', (req,res)=>{
    res.send("Hello");
})

app.get('/main', (req,res)=>{
    res.sendFile('test.html', {root: path.join(__dirname, 'views')});
})
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

app.get('/home', (req,res)=>{
    res.sendFile('home.html', {root: path.join(__dirname, 'views')});
})


app.get('/item1', (req,res)=>{
    res.sendFile('item1.html', {root: path.join(__dirname, 'views')});
})
app.get('/item2', (req,res)=>{
    res.sendFile('item2.html', {root: path.join(__dirname, 'views')});
})
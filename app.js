#!/usr/bin/env nodejs

const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res){
    res.render('test')

})


app.get('/todo_v1/', function(req, res){
    res.send('welcome to todo v21 test');

})

app.listen(8080, () => console.log('Example app listening on port 8080!'));

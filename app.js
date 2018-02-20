#!/usr/bin/env nodejs

const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, () => console.log('Example app listening on port 8080!'));

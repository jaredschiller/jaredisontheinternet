console.log('app started...');

//set up for pre-reqs
const EXPRESS = require('express');
const PATH = require('path');
const bodyParser = require('body-parser');
// const formidable = require('express-formidable');

var queueController = require('./controllers/queueController.js');
const app = EXPRESS();
app.set('view engine', 'ejs');
app.set('views', PATH.join(__dirname, 'views'));
app.use(EXPRESS.static(PATH.join(__dirname, 'public')));


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(formidable(
//   {
//     encoding: 'utf-8',    
//   })
// );

//fire controlleres
queueController(app);

//listen on port
app.listen(8080, () => console.log('Listening on port 8080...'));

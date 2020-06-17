const express = require('express');
const app  = express();

const PORT = process.env.PORT || 3000;

//static files
app.use(express.static('public'));


//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./routes/index'));

app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });
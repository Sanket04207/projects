const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api'); // declare the routes

const port = 3000;  //declaring the port

const app = express();//creating the instance of express()

app.use(express.static(path.join(__dirname,'dist')));  // join angular js folder to current directory.
app.use(bodyParser.urlencoded({extended:true}));  // parse the text as url encoded data.
app.use(bodyParser.json());  // parse text as JSON.

app.use('/api',api);  // use api route from server/routes/api when user hit /api.

app.get('*',(req,res)=>{

	res.sendFile(path.join(__dirname,'dist/index.html'));
});   // display the index.html file when user hit any other uri other than api.

app.listen(port,function(){

	console.log('Server running on localhost' + port);
});
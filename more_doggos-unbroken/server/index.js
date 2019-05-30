const express = require('express');
const parser = require('body-parser');
const router = require('./router.js');
const db = require('../database/index.js');
// const cors = require('cors');


const app = express();


app.use(parser.json());

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

app.use('/api/doggos' , express.static(__dirname + '/../client/dist'));

app.use('/api/doggos', router);

app.listen(3001, console.log("Server running on port 3001"));
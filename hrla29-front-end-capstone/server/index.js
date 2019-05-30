const express = require('express');
const app = express();
const port = 3002;
const routes = require('./routes.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/nav', express.static(__dirname + '/../public'));
app.use('/api/nav', routes);
// app.use(
//   '/api',
//   proxy({ target: 'http://localhost:3000', changeOrigin: true })
// );

app.listen(port, () => console.log(`Navigation bar server: ${port}!`))
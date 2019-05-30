var express = require('express');
var proxy = require('http-proxy-middleware');
const parser = require('body-parser');

var options = {
    target: 'http://localhost:3000', // target host
    changeOrigin: true, // needed for virtual hosted sites
    // ws: true, // proxy websockets
    router: {
      // when request.headers.host == 'dev.localhost:3000',
      // override target 'http://www.example.org' to 'http://localhost:8000'
      '/doggos': 'http://localhost:3001', // http:localhost:3000/api/doggos => http://loclahost:3001/api/doggos
      '/nav': 'http://localhost:3002',
      '/carouselPhotos': 'http://localhost:3003'
    }
  };
  
  // create the proxy (without context)
  var exampleProxy = proxy(options);
  
  // mount `exampleProxy` in web server
  var app = express();
  app.use(parser.json());
  app.use('/api', exampleProxy);
  app.use(express.static(__dirname));
  app.listen(3000, console.log('listening on port 3000'));
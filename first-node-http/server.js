const http = require('http');

const port = process.env.PORT || 3000;

http.createServer( function(req, res) {
    let url = req.url;
    
    // 設定 response header : Status & Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // 根據 reqeust 路徑做 routing
    if ( url === "/" ) {
      res.end('This is Home page baby !');  
    } else if ( url === "/user" ) {
      res.end('This is user page yeah !');
    } else if ( url === "/article" ) {
      res.end('This is article page lol !');
    } else {
      res.end('No such Page !');
    }
  
}).listen(port);

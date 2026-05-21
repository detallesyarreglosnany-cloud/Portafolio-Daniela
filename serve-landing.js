const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const LANDING_DIR = path.join(__dirname, 'download');
const IMAGES_DIR = path.join(__dirname, 'public', 'images');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  
  // Default route serves the landing HTML
  if (urlPath === '/' || urlPath === '') {
    urlPath = '/llave-digital-3.0-RESPALDO.html';
  }

  // Try download dir first, then public/images
  let filePath = path.join(LANDING_DIR, urlPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(IMAGES_DIR, urlPath);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'public', urlPath);
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found: ' + urlPath);
      return;
    }
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Landing page server running at http://0.0.0.0:${PORT}/`);
  console.log(`Serving: llave-digital-3.0-RESPALDO.html`);
});

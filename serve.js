// serve.js - Zero-dependency static web server for NSS CELL UEM JAIPUR
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
  let rawPath = req.url.split('?')[0];
  let safePath = decodeURIComponent(rawPath);
  if (safePath === '/' || safePath === '') safePath = '/index.html';
  
  const filePath = path.join(__dirname, safePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 Not Found</h1><p>The requested URL <code>${safePath}</code> was not found on NSS CELL UEM JAIPUR server.</p><a href="/">Back to Home</a>`);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<h1>500 Internal Server Error</h1><p>${err.code}</p>`);
      }
      return;
    }

    if (stats.isDirectory()) {
      res.writeHead(403, { 'Content-Type': 'text/html' });
      res.end('<h1>403 Forbidden</h1>');
      return;
    }

    // Support HTTP Range Requests (essential for HTML5 video streaming)
    const range = req.headers.range;
    if (range && ext === '.mp4') {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(filePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
      });
      file.pipe(res);
    } else {
      res.writeHead(200, { 
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

function getLocalIp() {
  const nets = os.networkInterfaces();
  if (nets['Wi-Fi']) {
    for (const net of nets['Wi-Fi']) {
      if (net.family === 'IPv4' && !net.internal) return net.address;
    }
  }
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal && !name.toLowerCase().includes('virtual') && net.address !== '192.168.56.1') {
        return net.address;
      }
    }
  }
  return '192.168.68.104';
}

server.listen(PORT, '0.0.0.0', () => {
  const localIp = getLocalIp();
  console.log(`\n======================================================`);
  console.log(`  NSS CELL UEM JAIPUR Website Running Successfully!   `);
  console.log(`======================================================`);
  console.log(`  On This PC:   http://localhost:${PORT}`);
  console.log(`  On Other Devices (Same Wi-Fi):`);
  console.log(`                http://${localIp}:${PORT}`);
  console.log(`\n  Press Ctrl+C to stop the server.\n`);
});

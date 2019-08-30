// ..

const port = process.env.PORT || 8124;
const host = process.env.HOST || '127.0.0.1';
const net = require('net');

const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen(port, host, () => {
  console.log('server bound (' + host + ':' + port + ')');
});
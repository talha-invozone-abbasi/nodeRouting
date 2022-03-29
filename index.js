const fs = require('fs');
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 5000;
// fs.readFile('./file.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
const work = 'hello this is afaaq';

fs.appendFile('./file.txt', work, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFile(path.join(__dirname, './file.txt'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile('./new-text.txt', work, 'utf-8', (err, data) => {
  if (err) throw err;

  return;
});

// fs.mkdir(path.join(__dirname, './name'), (err) => {
//   if (err) throw err;
// });

const server = http.createServer((req, res) => {
  let URL = './name/';
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case '/index':
      URL += 'index.html';
      break;
    case '/home':
      URL += 'home.html';
      break;
    case '/':
      URL += 'home.html';
      res.statusCode = 301;
      res.setHeader('location', '/index');
      res.end();
      break;
    default:
      URL += 'index.html';
      break;
  }
  console.log(URL);

  fs.readFile(URL, (err, data) => {
    console.log(URL);
    try {
      res.statusCode = 200;
      res.write(data);
      res.end();
    } catch (e) {
      if (err) throw err;
      res.end();
    }
  });
});
server.listen(PORT, () => {
  console.log('running ' + PORT);
});

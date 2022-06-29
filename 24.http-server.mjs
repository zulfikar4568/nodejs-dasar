import http from 'http';

const server = http.createServer((request, response) => {
  console.info(request.method);
  console.table(request.headers);
  console.info(request.url);

  if (request.method === 'POST') {
    request.addListener('data', function(data) {
      response.setHeader('Content-Type', 'application/json');
      response.write(data);
      response.end();
    })
  } else {
    if (request.url === '/zulfikar') {
      response.write('Hello Zulfikar');
    } else {
      response.write('Hello World');
    }
  }
})  

server.listen(3000, 'localhost')
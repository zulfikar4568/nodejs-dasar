import net from 'net';

const server = net.createServer(function (client) {
  console.info('Client connected!');
  client.on("data", function(data) {
    console.info(`Received data from client ${data.toString()}`)
    client.write(`Hello ${data.toString()}\r\n`)
  })
})

server.listen(3000, 'localhost')

// node 17.net-server.mjs
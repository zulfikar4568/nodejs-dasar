const express = require('express');
const app = express();
const port = 3000;
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Global variables
let tasks = [];

app.get('/', (req, res) => {

  // Closure with external variables reference
  tasks.push(function(){
    return req.headers;
  });

  // to much data
  const hugeArray = new Array(1000000000).fill(req);
  // try to use cache like node-cache, memcache, etc.

  // Circular Object reference
  req.user = {
    id: '1',
    username: 'ZUl',
    badObject: req,
    hugeArray,
  }

  // Clear event listeners
  eventEmitter.on('start', () => {
    console.log('Useless event emitter!')
  });


  const resWithTimeout = setTimeout(() => {
    res.send('Hello, world!');
  });

  clearTimeout(resWithTimeout);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
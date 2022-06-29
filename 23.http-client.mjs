import https from 'https';

const data = JSON.stringify({
  name: "John"
})

const options = {
  hostname: "hookb.in",
  port: 443,
  path: "/lJjRePnxp6tJ7ZEJWNL6",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
}

const request = https.request(options, (response) => {
  response.addListener('data', function(data) {
    console.info(`Receive : ${data.toString()}`)
  })
});

request.write(data);
request.end();
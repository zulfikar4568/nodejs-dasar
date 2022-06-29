import cluster from "cluster";
import http from 'http';
import os from 'os';
import process from "process";

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    console.info(`Primary: ${process.pid}`)
    cluster.fork();
  }
  cluster.addListener('exit', function(worker) {
    console.info(`Worker ${worker.id} is exited!`)
    cluster.fork()
  })
} 

if(cluster.isWorker) {
  console.info(`Start Cluster Worker: ${process.pid}`)
  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    process.exit();
  })
  server.listen(3000)
}
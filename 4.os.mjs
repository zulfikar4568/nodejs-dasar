import os from "os";

console.info(os.platform());
console.info(os.arch());
console.table(os.cpus());
console.info(os.hostname());
console.info(os.homedir());
console.info(os.freemem());
console.table(os.networkInterfaces());
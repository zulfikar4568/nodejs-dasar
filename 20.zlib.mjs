import zlib from 'zlib';
import fs from 'fs';

const source = fs.readFileSync('20.zlib.mjs');
const result = zlib.gzipSync(source); // Akan di ubah menjadi binary file 

console.info(result)
fs.writeFileSync('zlib.mjs.txt', result)
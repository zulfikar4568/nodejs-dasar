import fs from 'fs';

const buffer = fs.readFileSync("4.os.mjs");

console.info(buffer.toString());

fs.writeFileSync("temp.txt", "Halllow");
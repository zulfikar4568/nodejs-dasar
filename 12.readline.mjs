import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

input.question('Umur anda berapa? : ', function(nama) {
  console.info(`Umur anda adalah ${nama}`);
  input.close(); 
})
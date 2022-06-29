import fs from 'fs';

const writter = fs.createWriteStream("target.log");
writter.write("Zulfikar\n");
writter.write("Isnaen\n");
writter.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", function(data) {
  console.info(data.toString()); 
})



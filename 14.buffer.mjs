const buffer = Buffer.from('Zulfikar');
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());

// ################### Buffer Encoding
const buffer2 = Buffer.from('Zulfikar Isnaen', 'utf-8');
console.info(buffer2.toString('base64'));
console.info(buffer2.toString('hex'));
console.info(buffer2.toString('base64url'));

const buffer3 = Buffer.from('WnVsZmlrYXIgSXNuYWVu', 'base64url');
console.info(buffer3.toString('utf-8'))


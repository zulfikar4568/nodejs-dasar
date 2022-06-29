import util from 'util';

console.info(util.format('Nama: %s', 'Zulfikar'));

const orang = { firstName: 'Zulfikar', lastName: 'Isnaen' };
console.info(util.format('Person: %j', orang));
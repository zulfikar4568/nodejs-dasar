import { URL } from 'url';

const myGithub = new URL('https://github.com/zulfikar4568?tab=overview&from=2022-05-01&to=2022-05-31');

console.info(myGithub.toString());
console.info(myGithub.protocol);
console.info(myGithub.hostname);
console.info(myGithub.pathname);
console.info(myGithub.searchParams);
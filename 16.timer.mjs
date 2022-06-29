import timers from 'timers/promises';
// Callback
// setInterval(() => {
//   console.info(`Start time at ${new Date}`)
// }, 1000)

// Promises
// console.info(`Start time at ${new Date}`)
// const nama = await timers.setTimeout(1000, "Zulfikar");
// console.info(`End time at ${new Date}`)
// console.info(nama)

for await (const startTime of timers.setInterval(1000, new Date())){
  console.info(`Start time at ${new Date}`)
}

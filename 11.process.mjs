import process from 'process';

process.addListener("exit", function(exitCode){
  console.info(`Node js exit with code ${exitCode}`)
})

console.info(process.version)
console.info(process.arch)
console.table(process.argv)
console.table(process.report)
console.table(process.env)

process.exit(1)

console.info("Selesai, tidak akan di print")

// Argument
// node 11.process.mjs "Zulfikar Isnaen"
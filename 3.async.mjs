function sampleFunction () {
  return Promise.resolve("Zul");
}

const names = await sampleFunction();
console.log(names);
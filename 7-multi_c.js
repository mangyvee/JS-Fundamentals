const x = parseInt(process.argv[2]);

const output = isNaN(x) ? "Missing number of occurrences" : Array(x).fill("C is fun").join("\n");

console.log(output);


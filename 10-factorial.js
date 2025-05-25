// Get the first argument and convert to integer
const num = parseInt(process.argv[2]);

function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Call the function and print the result
console.log(factorial(num));

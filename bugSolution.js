function foo(a, b) {
  if (a === null) {
    a = 0; // handle null input for a
  }
  if (b === null) {
    b = 0; // handle null input for b
  }
  return a + b; // always return a numerical result
}

console.log(foo(1, null)); // outputs 1
console.log(foo(null, 1)); // outputs 1
console.log(foo(1, 2)); // outputs 3
console.log(foo(null, null)); // outputs 0
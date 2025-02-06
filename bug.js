function foo(a, b) {
  if (a === null || b === null) {
    return null; // this line is problematic
  }
  return a + b;
}

console.log(foo(1, null)); // outputs null
console.log(foo(null, 1)); // outputs null
console.log(foo(1, 2)); // outputs 3
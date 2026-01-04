// Create web server
function calculateNumbers(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: b !== 0 ? a / b : null
  };
}



function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case '+': return add(x, y);
    case '-': return substract(x, y);
    case '*': return multiply(x, y);
    default: return divide(x, y);
  }
}

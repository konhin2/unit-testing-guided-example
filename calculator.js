function sum(a, b) {
  if (a && b) {
    return a + b
  } else if (a) {
    return a
  }else if(b){
    return b
  } else {
    return 0
  }
}

function subtract(a, b) {
  if (a && b) {
    return a - b
  } else if(a){
    return a
  } else if (b){
    return b
  } else{
    return 0
  }
  
}

function divide(a, b) {
  if (a && b) {
    return a / b
  } else {
    return error('No puedes dividir entre 0')
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };

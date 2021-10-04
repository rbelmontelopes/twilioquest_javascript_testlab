

function addFirstToLast(inputArray) {
  let firstAndLast = '';

  // Only execute this code if the array has items in it
  if (inputArray.length > 0) {
    // Change the line below! What should it be?
    firstAndLast = inputArray[0] + inputArray[inputArray.length-1];
  }

  return firstAndLast;
}


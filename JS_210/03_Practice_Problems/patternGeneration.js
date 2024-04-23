const generatePattern = (nStars) => {
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    for (let count = lineNumber + 1; count <= nStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}

// generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

function generatePattern(nStars) {
  let lastRowString = '';

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }

  let width = lastRowString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';
    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    let numberOfStars = width - string.length;
    for (let count = 1; count <= numberOfStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}

generatePattern(20);

// console output
// 1******************************
// 12*****************************
// 123****************************
// 1234***************************
// 12345**************************
// 123456*************************
// 1234567************************
// 12345678***********************
// 123456789**********************
// 12345678910********************
// 1234567891011******************
// 123456789101112****************
// 12345678910111213**************
// 1234567891011121314************
// 123456789101112131415**********
// 12345678910111213141516********
// 1234567891011121314151617******
// 123456789101112131415161718****
// 12345678910111213141516171819**
// 1234567891011121314151617181920
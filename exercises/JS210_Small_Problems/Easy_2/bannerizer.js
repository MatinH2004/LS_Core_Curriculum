function logInBox(text) {
  const horizontalRule = `+${repeatedChar('-', text.length + 2)}+`;
  const emptyLine = `|${repeatedChar(' ', text.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(horizontalRule)
}

function repeatedChar(char, times) {
  let repeated = '';

  while (repeated.length < times) {
    repeated += char;
  }

  return repeated;
}

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
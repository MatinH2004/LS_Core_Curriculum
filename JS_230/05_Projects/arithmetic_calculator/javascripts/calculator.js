document.addEventListener('DOMContentLoaded', () => {
  const Calculate = {
    '+': (firstNum, secondNum) => firstNum + secondNum,
    '-': (firstNum, secondNum) => firstNum - secondNum,
    '*': (firstNum, secondNum) => firstNum * secondNum,
    '/': (firstNum, secondNum) => {
      if (secondNum === 0) return 'Cannot divide by 0!'
      return firstNum / secondNum;
    },
  };

  const getValueOf = selector => form.querySelector(selector).value;
  const form = document.querySelector('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    let firstNum = +getValueOf('#first-number');
    let secondNum = +getValueOf('#second-number');
    let operator = getValueOf('#operator');

    let calculate = Calculate[operator];
    let answer = calculate(firstNum, secondNum);
    document.querySelector('#result').textContent = String(answer);
  });
});
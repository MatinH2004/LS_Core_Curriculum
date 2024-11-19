const Calculate = {
  '+': (firstNum, secondNum) => firstNum + secondNum,
  '-': (firstNum, secondNum) => firstNum - secondNum,
  'x': (firstNum, secondNum) => firstNum * secondNum,
  '%': (firstNum, secondNum) => firstNum % secondNum,
  '/': (firstNum, secondNum) => (secondNum === 0 ? 'Zero Division Error' : firstNum / secondNum),
};

function newOperation(first, operation) {
  return function(second) {
    return Calculate[operation](Number(first), Number(second));
  }
}

const App = {
  init() {
    this.resetState();
    this.bindEvents();
  },

  log(num, op) {
    const text = $('#operation_window').text();
    $('#operation_window').text(`${text} ${num} ${op}`.trim());
  },

  resetState() {
    this.currentOperation = null;
    this.newEntry = true;
  },

  bindEvents() {
    $('#c').on('click', $.proxy(this.handleClear, this));
    $('#ce').on('click', $.proxy(this.handleClearEntry, this));
    $('#neg').on('click', $.proxy(this.handleNegate, this));
    $('.digit').on('click', $.proxy(this.handleDigit, this));
    $('.dot').on('click', $.proxy(this.handleDecimal, this));
    $('.op').on('click', $.proxy(this.handleOperation, this));
    $('.result_button').on('click', $.proxy(this.handleResult, this));
  },

  handleClear() {
    this.clearEntry();
    $('#operation_window').text('');
    this.currentOperation = null;
  },
  
  handleClearEntry() {
    this.clearEntry();
  },
  
  clearEntry() {
    $('#entry_window').text('0');
  },

  handleNegate() {
    const value = $('#entry_window').text();
    $('#entry_window').text(value.startsWith('-') ? value.slice(1) : `-${value}`);
  },  

  handleDigit(e) {
    const value = $('#entry_window').text();
    const newValue = this.newEntry ? $(e.target).text() : value + $(e.target).text();
    $('#entry_window').text(value === '0' ? $(e.target).text() : newValue);
    this.newEntry = false;
  },

  handleDecimal(e) {
    const $entry = $('#entry_window');
    if (!$entry.text().includes('.')) {
      $entry.text($entry.text() + '.');
    }
  },

  handleOperation(e) {
    const number = $('#entry_window').text();
    const operation = $(e.target).text();

    if (this.currentOperation !== null) {
      this.currentOperation = newOperation(this.currentOperation(number), operation);
    } else {
      this.currentOperation = newOperation(number, operation)
    }

    this.log(number, operation);

    this.newEntry = true;
  },

  handleResult() {
    if (this.currentOperation === null) return;

    const number = $('#entry_window').text();
    const result = this.currentOperation(number);

    $('#operation_window').text('');
    $('#entry_window').text(result);

    this.resetState();
  },
};

$(document).ready($.proxy(App.init, App));

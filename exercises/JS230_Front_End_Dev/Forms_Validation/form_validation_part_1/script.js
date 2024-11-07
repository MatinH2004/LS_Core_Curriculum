/*

TODO:
- fix form size when form error pops up (padding at bottom)
- When sign up is clicked with all inputs empty, form submits.
  - The error messages must show up in red, along with form error at top.
*/

function fieldErrorMsg(name, longerPasswordNeeded = false) {
  name = name.split('_').map(str => str[0].toUpperCase() + str.slice(1)).join(' ');

  if (longerPasswordNeeded) {
    return `${name} must be at least 10 characters long.`;
  }

  if (name === 'Phone Number') {
    return `Please enter a valid ${name}.`;
  }

  return `${name} is a required field.`;
}

function requiredFieldError(event) {
  const inputElement = event.target;
  const ddElement = event.target.closest('dd');
  const errorSpan = ddElement.querySelector('.error_message');

  if (['first_name', 'last_name', 'email'].includes(inputElement.id)) {
    if (inputElement.value.trim().length === 0) {
      inputElement.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(inputElement.id);
    }
  }

  if ('password' === inputElement.id) {
    if (inputElement.value.length === 0) {
      inputElement.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(inputElement.id);
    } else if (inputElement.value.length < 10) {
      inputElement.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(inputElement.id, true);
    }
  }

  if ('phone_number' === inputElement.id) {
    if (!/^\d{3}\-\d{3}\-\d{4}$/.test(inputElement.value)) {
      inputElement.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(inputElement.id);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  // inputs
  const firstName = document.querySelector('#first_name');
  const lastName = document.querySelector('#last_name');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const phoneNumber = document.querySelector('#phone_number');

  // const passwordMinLength = 10;

  form.addEventListener('focusout', requiredFieldError);

  form.addEventListener('focus', event => {
    if (event.target.tagName === 'INPUT') {
      const inputElement = event.target;
      const ddElement = event.target.closest('dd');
      const errorSpan = ddElement.querySelector('.error_message');

      inputElement.classList.remove('invalid_field');
      errorSpan.textContent = '';
    }
  }, true);

  form.addEventListener('submit', event => {
    const invalidFields = document.querySelector('.invalid_field');

    if (invalidFields.length !== 0) {
      document.querySelector('.form_errors').textContent = 'Fix errors before submitting.';
      event.preventDefault();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input, idx) => {
    if (['first_name', 'last_name'].includes(input.name)) {
      input.addEventListener('keydown', blockNonAlpha);
    }
    if (['phone_number', 'credit_card'].includes(input.name)) {
      input.addEventListener('keydown', blockNonDigit);
    }
    if (['cd1', 'cd2', 'cd3'].includes(input.id)) {
      input.addEventListener('input', event => {
        if (event.target.value.length === 4) {
          inputs[idx + 1].focus();
        }
      });
    }
  });

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
    let formErrors = false;

    inputs.forEach(input => {
      requiredFieldError({ target: input });

      if (input.classList.contains('invalid_field')) {
        formErrors = true;
      }
    });

    if (formErrors) {
      event.preventDefault()
      document.querySelector('.form_errors')
              .textContent = 'Form cannot be submitted until errors are corrected.';
    };
  });
});

function fieldErrorMsg(name, { invalidPassword, invalidEmail, invalidCC} = {}) {
  if (invalidPassword) {
    return `${name} must be at least 10 characters long.`;
  }
  if (invalidEmail || invalidCC || name === 'Phone Number') {
    return `Please enter a valid ${name}.`;
  }
  return `${name} is a required field.`;
}

function requiredFieldError(event) {
  const input = event.target;
  const ddElement = event.target.closest('dd');
  const errorSpan = ddElement.querySelector('.error_message');
  const labelText = document.querySelector('label[for=' + input.name + ']').textContent;

  if (['first_name', 'last_name', 'email'].includes(input.name)) {
    if (input.validity.valueMissing) {
      input.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(labelText);
    }
  }

  if ('email' === input.name) {
    if (input.validity.patternMismatch) {
      input.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(labelText, { invalidEmail: true });
    }
  }

  if ('password' === input.name) {
    if (input.validity.valueMissing) {
      input.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(labelText);
    } else if (input.validity.patternMismatch) {
      input.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(labelText, { invalidPassword: true });
    }
  }

  if ('phone_number' === input.name) {
    if (input.validity.valueMissing) return;

    if (input.validity.patternMismatch) {
      input.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(labelText);
    }
  }

  if ('credit_card' === input.name) {
    if (input.validity.valueMissing) return;

    if (input.validity.patternMismatch) {
      input.classList.add('invalid_field');
      errorSpan.textContent = fieldErrorMsg(labelText, { invalidCC: true });
    }
  }
}

function blockNonAlpha(event) {
  if (!/[a-zA-Z'\s]/.test(event.key)) event.preventDefault();
}

function blockNonDigit(event) {
  const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

  if (!/[0-9]/.test(event.key) && !allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
}
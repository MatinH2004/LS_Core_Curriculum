document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input, idx) => {
    // character blocking for specific inputs
    if (['first_name', 'last_name'].includes(input.name)) {
      input.addEventListener('keydown', blockNonAlpha);
    } else if (['phone_number', 'credit_card'].includes(input.name)) {
      input.addEventListener('keydown', blockNonDigit);
    }

    // automatically focus the next credit card field
    if (['cd1', 'cd2', 'cd3'].includes(input.id)) {
      input.addEventListener('input', () => {
        if (input.value.length === 4) {
          inputs[idx + 1].focus();
        }
      });
    }
  });

  // display error message and styling on focus
  form.addEventListener('focusout', requiredFieldError);

  // clear error message and styling on focus
  form.addEventListener('focus', event => {
    if (event.target.tagName === 'INPUT') clearError(event.target);
  });

  // display errors if any fields are invalid
  // otherwise display serialized data
  form.addEventListener('submit', event => {
    event.preventDefault();

    let formErrors = false;

    inputs.forEach(input => {
      requiredFieldError({ target: input });
      if (input.classList.contains('invalid_field')) formErrors = true;
    });

    if (formErrors) {
      form.querySelector('.form_errors').textContent = 'Form cannot be submitted until errors are corrected.';
      return;
    }

    const serializedData = document.createElement('p');
    serializedData.textContent = serializeFormData(form);
    document.querySelector('.serialized').appendChild(serializedData);
  });
});

function fieldErrorMsg(name, options={}) {
  const { invalidPassword, invalidEmail, invalidCC } = options;

  if (invalidPassword) return `${name} must be at least 10 characters long.`;
  if (invalidEmail || invalidCC || name === 'Phone Number') return `Please enter a valid ${name}.`;
  return `${name} is a required field`;
}

function requiredFieldError(event) {
  const input = event.target;
  const ddElement = input.closest('dd');
  const errorSpan = ddElement.querySelector('.error_message');
  const labelText = document.querySelector(`label[for="${input.name}"]`).textContent;

  // Define custom error messages based on the validity state
  if (input.validity.valueMissing) {
    showError(input, errorSpan, `${labelText} is a required field.`);
  } else if (input.validity.patternMismatch) {
    // For pattern mismatch, show a specific message based on the input type
    const message = fieldErrorMsg(labelText, {
      invalidEmail: input.name === 'email',
      invalidPassword: input.name === 'password' && input.value.length < 10,
      invalidCC: input.name === 'credit_card'
    });
    showError(input, errorSpan, message);
  } else {
    clearError(input, errorSpan);
  }
}

function showError(input, errorSpan, message) {
  input.classList.add('invalid_field');
  errorSpan.textContent = message;
}

function clearError(input, errorSpan) {
  input.classList.remove('invalid_field');
  errorSpan.textContent = '';
}

function blockNonAlpha(event) {
  if (!/[a-zA-Z'\s]/.test(event.key)) event.preventDefault();
}

function blockNonDigit(event) {
  const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
  if (!/[0-9\-]/.test(event.key) && !allowedKeys.includes(event.key)) event.preventDefault();
}

function serializeFormData(form) {
  const inputs = form.querySelectorAll('input:not([name="credit_card"])');
  const ccInputs = form.querySelectorAll('input[name="credit_card"]');

  const keysAndValues = Array.from(inputs, input => {
    return `${encodeURIComponent(input.name)}=${encodeURIComponent(input.value)}`;
  });

  const ccKey = encodeURIComponent(ccInputs[0].name);
  const ccValue = Array.from(ccInputs, input => input.value).join('');
  keysAndValues.push(`${ccKey}=${encodeURIComponent(ccValue)}`);

  return keysAndValues.join('&');
}
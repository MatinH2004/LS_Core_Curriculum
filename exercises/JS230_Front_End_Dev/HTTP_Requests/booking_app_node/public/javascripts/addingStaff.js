const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  let data = new FormData(form);
  let request = new XMLHttpRequest();

  request.open(form.method, 'http://localhost:3000/api/staff_members');

  request.addEventListener('load', () => {
    if (request.status === 201) {
      let result = JSON.parse(request.response);
      alert(`Successfully created employee with id: ${result.id}`);
    } else {
      alert('Staff can not be created. Check your inputs');
    }
  });

  request.send(data);
  form.reset();
});
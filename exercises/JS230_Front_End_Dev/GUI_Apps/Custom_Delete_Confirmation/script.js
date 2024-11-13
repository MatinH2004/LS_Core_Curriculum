const todos = [
  {
    id: 1,
    todo: 'Homework',
  },

  {
    id: 2,
    todo: 'Shopping',
  },

  {
    id: 3,
    todo: 'Call Mom',
  },

  {
    id: 4,
    todo: 'Coffee with John',
  },
];

const App = {
  init() {
    this.renderTodos();
    this.bindEvents();
  },

  renderTodos() {
    const template = Handlebars.compile($('#todo_template').html());
  
    todos.forEach(todo => {
      let li = template(todo);
      $('#todos').append(li);
    });
  },

  bindEvents() {
    $('.remove').on('click', $.proxy(this.handleClickX, this));
    $('.confirm_no, .overlay').on('click', $.proxy(this.hidePrompt, this));
    $('.confirm_yes').on('click', $.proxy(this.handleDeleteTodo, this));
  },

  handleClickX(e) {
    this.showPrompt();
    const id = $(e.target.closest('li')).attr('data-id');
    $('.confirm_wrapper').removeAttr('data-id').attr('data-id', id);
  },

  handleDeleteTodo(e) {
    const id = $('.confirm_wrapper').attr('data-id');
    $(`li[data-id="${id}"]`).remove();
    this.hidePrompt();
  },

  showPrompt() {
    $('.overlay, .confirm_prompt').css('display', 'block');
  },

  hidePrompt() {
    $('.overlay, .confirm_prompt').css('display', 'none');
  },
}

$(document).ready($.proxy(App.init, App));
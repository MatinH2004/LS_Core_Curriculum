const todos = ['Homework', 'Shopping', 'Calling Mom', 'Coffee with John'];

const App = {
  currentId: null,

  init() {
    this.$confirmWrapper = $('.confirm_wrapper');
    this.$contextMenu = $('#context_menu');

    this.renderTodos();
    this.bindEvents();
  },

  renderTodos() {
    const template = Handlebars.compile($('#todo_template').html());
    todos.forEach((todo, index) => {
      const li = template({ todo, id: index });
      $('#todos').append(li);
    });
  },

  bindEvents() {
    $('#todos').on('contextmenu', 'li', $.proxy(this.handleContextMenu, this));
    $(document).on('click', $.proxy(this.handleCloseContextMenu, this));
    this.$contextMenu.on('click', 'span', $.proxy(this.handleContextMenuButton, this));

    $('.confirm_no, .overlay').on('click', $.proxy(this.hidePrompt, this));
    $('.confirm_yes').on('click', $.proxy(this.handleDeleteTodo, this));
  },

  handleDeleteTodo() {
    const id = this.$confirmWrapper.attr('data-id');
    $(`li[data-id="${id}"]`).remove();
    this.hidePrompt();
  },

  handleContextMenu(e) {
    e.preventDefault();
    this.currentId = $(e.target).closest('li').attr('data-id');
    this.$contextMenu.css({ top: `${e.clientY}px`, left: `${e.clientX}px` }).removeClass('disabled');
  },

  handleContextMenuButton(e) {
    if ($(e.target).text() === 'Delete') {
      this.$confirmWrapper.attr('data-id', this.currentId);
      this.showPrompt();
    }
  },

  handleCloseContextMenu() {
    this.$contextMenu.addClass('disabled');
  },

  showPrompt() {
    $('.overlay, .confirm_prompt').css('display', 'block');
  },

  hidePrompt() {
    $('.overlay, .confirm_prompt').css('display', 'none');
  },
}

$(document).ready($.proxy(App.init, App));

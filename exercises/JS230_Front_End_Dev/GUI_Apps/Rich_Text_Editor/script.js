// $(function () {
//   function applyTextFormatting(command) {
//     const textDiv = document.getElementById('text');
//     const selection = window.getSelection();
//     let savedRange = null;

//     // Save the current selection range
//     if (selection.rangeCount > 0) {
//       savedRange = selection.getRangeAt(0);
//     }

//     // Ensure the #text div is focusable and focused
//     textDiv.focus();

//     // Restore the saved range (if any) before executing the command
//     if (savedRange) {
//       selection.removeAllRanges();
//       selection.addRange(savedRange);
//     }

//     // Execute the formatting command
//     document.execCommand(command, false, null);

//     // Reapply the saved range after the command is executed
//     if (savedRange) {
//       selection.removeAllRanges();
//       selection.addRange(savedRange);
//     }
//   }

//   $('#bold').on('click', function () {
//     $(this).toggleClass('active');
//     applyTextFormatting('bold');
//   });

//   $('#italic').on('click', function () {
//     $(this).toggleClass('active');
//     applyTextFormatting('italic');
//   });
// });

// const App = {
//   toggleBold(e) {
//     document.execCommand('bold');
//     this.toggleButton(e);
//   },

//   toggleItalic(e) {
//     document.execCommand('italic');
//     this.toggleButton(e);
//   },

//   toggleUnderline(e) {
//     document.execCommand('underline');
//     this.toggleButton(e);
//   },

//   toggleLink(e) {
//     const selection = document.getSelection().toString();
//     if (!selection) return;

//     let url = prompt('Enter URL to link to: ');
//     this.createLink(url, e);
//   },

//   createLink(url, e) {
//     if (!url) return;
//     document.execCommand('createLink', false, url);
//     this.toggleButton(e);
//   },

//   toggleStrikeThrough(e) {
//     document.execCommand('strikethrough');
//     this.toggleButton(e);
//   },

//   insertUL(e) {
//     document.execCommand('insertUnorderedList');
//     this.toggleButton(e);
//   },

//   insertOL(e) {
//     document.execCommand('insertOrderedList');
//     this.toggleButton(e);
//   },

//   alignLeft(e) {
//     document.execCommand('justifyLeft');
//     this.toggleButton(e);
//     this.toggleButtons();
//   },

//   alignRight(e) {
//     document.execCommand('justifyRight');
//     this.toggleButton(e);
//     this.toggleButtons();
//   },

//   alignJustify(e) {
//     document.execCommand('justifyFull');
//     this.toggleButton(e);
//     this.toggleButtons();
//   },

//   alignCenter(e) {
//     document.execCommand('justifyCenter');
//     this.toggleButton(e);
//     this.toggleButtons();
//   },

//   toggleButton(e) {
//     const $btn = $(e.target);
//     $btn.toggleClass('active');
//   },

//   toggleButtons() {
//     const
//     isBold = document.queryCommandState('bold'),
//     isItalic = document.queryCommandState('italic'),
//     isUnderlined = document.queryCommandState('underline'),
//     isStrokeThrough = document.queryCommandState('strikeThrough'),
//     isALink = document.queryCommandState('createLink'),
//     isAnOL = document.queryCommandState('insertOrderedList'),
//     isAUL = document.queryCommandState('insertUnorderedList'),
//     isAlignLeft = document.queryCommandState('justifyLeft'),
//     isAlignRight = document.queryCommandState('justifyRight'),
//     isAlignCenter = document.queryCommandState('justifyCenter'),
//     isAlignJust = document.queryCommandState('justifyFull');

//     $('#bold').toggleClass('active', isBold);
//     $('#italic').toggleClass('active', isItalic);
//     $('#underline').toggleClass('active', isUnderlined);
//     $('#strikethrough').toggleClass('active', isStrokeThrough);
//     $('#link').toggleClass('active', isALink);
//     $('#ul').toggleClass('active', isAUL);
//     $('#ol').toggleClass('active', isAnOL);
//     $('#al_left').toggleClass('active', isAlignLeft);
//     $('#al_right').toggleClass('active', isAlignRight);
//     $('#al_center').toggleClass('active', isAlignCenter);
//     $('#al_justify').toggleClass('active', isAlignJust);
//   },

//   init() {
//     $('li#bold').on('click', this.toggleBold.bind(this));
//     $('li#italic').on('click', this.toggleItalic.bind(this));
//     $('li#underline').on('click', this.toggleUnderline.bind(this));
//     $('li#link').on('click', this.toggleLink.bind(this));
//     $('li#strikethrough').on('click', this.toggleStrikeThrough.bind(this));
//     $('li#ul').on('click', this.insertUL.bind(this));
//     $('li#ol').on('click', this.insertOL.bind(this));
//     $('li#al_left').on('click', this.alignLeft.bind(this));
//     $('li#al_right').on('click', this.alignRight.bind(this));
//     $('li#al_center').on('click', this.alignCenter.bind(this));
//     $('li#al_justify').on('click', this.alignJustify.bind(this));
//     document.addEventListener('selectionchange', this.toggleButtons.bind(this));
//   }
// };

// $(document).ready(App.init().bind(App));

const App = {
  toggleBold(e) {
    this.execCommandWithFocus('bold', e);
  },

  toggleItalic(e) {
    this.execCommandWithFocus('italic', e);
  },

  toggleUnderline(e) {
    this.execCommandWithFocus('underline', e);
  },

  toggleStrikeThrough(e) {
    this.execCommandWithFocus('strikethrough', e);
  },

  insertUL(e) {
    this.execCommandWithFocus('insertUnorderedList', e);
  },

  insertOL(e) {
    this.execCommandWithFocus('insertOrderedList', e);
  },

  alignLeft(e) {
    this.execCommandWithFocus('justifyLeft', e);
  },

  alignRight(e) {
    this.execCommandWithFocus('justifyRight', e);
  },

  alignCenter(e) {
    this.execCommandWithFocus('justifyCenter', e);
  },

  alignJustify(e) {
    this.execCommandWithFocus('justifyFull', e);
  },

  execCommandWithFocus(command, e) {
    const $text = $('#text');
    $text.focus(); // Ensure #text has focus
    document.execCommand(command, false, null);
    this.toggleButtons(); // Update all button states
  },

  toggleButtons() {
    const isBold = document.queryCommandState('bold');
    const isItalic = document.queryCommandState('italic');
    const isUnderlined = document.queryCommandState('underline');
    const isStrikethrough = document.queryCommandState('strikeThrough');
    const isUnorderedList = document.queryCommandState('insertUnorderedList');
    const isOrderedList = document.queryCommandState('insertOrderedList');
    const isAlignLeft = document.queryCommandState('justifyLeft');
    const isAlignRight = document.queryCommandState('justifyRight');
    const isAlignCenter = document.queryCommandState('justifyCenter');
    const isAlignJustify = document.queryCommandState('justifyFull');

    $('#bold').toggleClass('active', isBold);
    $('#italic').toggleClass('active', isItalic);
    $('#underline').toggleClass('active', isUnderlined);
    $('#strikethrough').toggleClass('active', isStrikethrough);
    $('#ul').toggleClass('active', isUnorderedList);
    $('#ol').toggleClass('active', isOrderedList);
    $('#al_left').toggleClass('active', isAlignLeft);
    $('#al_right').toggleClass('active', isAlignRight);
    $('#al_center').toggleClass('active', isAlignCenter);
    $('#al_justify').toggleClass('active', isAlignJustify);
  },

  init() {
    $('li#bold').on('click', this.toggleBold.bind(this));
    $('li#italic').on('click', this.toggleItalic.bind(this));
    $('li#underline').on('click', this.toggleUnderline.bind(this));
    $('li#strikethrough').on('click', this.toggleStrikeThrough.bind(this));
    $('li#ul').on('click', this.insertUL.bind(this));
    $('li#ol').on('click', this.insertOL.bind(this));
    $('li#al_left').on('click', this.alignLeft.bind(this));
    $('li#al_right').on('click', this.alignRight.bind(this));
    $('li#al_center').on('click', this.alignCenter.bind(this));
    $('li#al_justify').on('click', this.alignJustify.bind(this));
    document.addEventListener('selectionchange', this.toggleButtons.bind(this));
  }
};

$(document).ready(App.init.bind(App));

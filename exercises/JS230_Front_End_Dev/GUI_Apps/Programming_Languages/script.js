const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  {
    name: 'Python',
    description: 'Python is newer langauge, thanks to it\'s all purpose design, it is very popular',
  }
];

$(function() {
  (function() {
    languages.forEach(lang => {
      const $langDiv = $('<div class=lang></div>');
  
      $langDiv.attr('data-lang', lang.name);
      $langDiv.append($('<h2>').text(lang.name));

      if (lang.description.length > 120) {
        $langDiv.append($('<p>').text(lang.description.slice(0, 120) + ' ...'));
        $langDiv.append($('<button class=more></button>').text('Show More'));
      } else {
        $langDiv.append($('<p>').text(lang.description));
      }
  
      $('#languages').append($langDiv);
    });
  })();

  $('.more').on('click', function(e) {
    const $btn = $(e.target);
    const $langDiv = $btn.closest('.lang');
    const langName = $langDiv.attr('data-lang');
    const langObj = languages.find(lang => lang.name === langName);

    if ($btn.text() === 'Show More') {
      $langDiv.find('p').text(langObj.description);
      $btn.text('Show Less');
    } else {
      $langDiv.find('p').text(langObj.description.slice(0, 120) + ' ...');
      $btn.text('Show More');
    }
  });
});
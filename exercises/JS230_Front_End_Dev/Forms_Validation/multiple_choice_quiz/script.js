const App = {
  init() {
    this.quizQuestions.render();

    this.resultMessages = document.querySelectorAll('p.result');
    this.resetBtn = document.querySelector('.reset_form');
    this.submitBtn = document.querySelector('.submit');
    this.answerKey = this.quizQuestions.answerKey;

    this.bindEvents();
  },

  bindEvents() {
    this.submitBtn.addEventListener('click', this.handleFormSubmit.bind(this));
    this.resetBtn.addEventListener('click', this.handleFormReset.bind(this));
  },

  toggleFormButtons() {
    this.submitBtn.classList.toggle('disabled');
    this.resetBtn.classList.toggle('disabled');
  },

  handleFormSubmit(e) {
    if (e.target.classList.contains('disabled')) return;

    const answers = this.getUserAnswers();

    this.displayResults(answers);
    this.toggleFormButtons();
  },

  handleFormReset(e) {
    if (e.target.classList.contains('disabled')) return;
  
    this.clearResultMessages();
    this.uncheckSelectedInputs();
    this.toggleFormButtons();
  },

  clearResultMessages() {
    for (let paragraph of this.resultMessages) {
      paragraph.textContent = '';
      paragraph.classList.remove('correct', 'wrong');
    }
  },
  
  uncheckSelectedInputs() {
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
      radio.checked = false;
    });
  },

  getUserAnswers() {
    const inputs = document.querySelectorAll('input[type="radio"]:checked');
    const userAnswers = {};
  
    inputs.forEach(input => {
      userAnswers[input.name] = input.value;
    });
  
    return userAnswers;
  },

  displayResults(userAnswers) {
    let key = 1;
  
    for (let paragraph of this.resultMessages) {
      const userAnswer = userAnswers[key];
      const correctAnswer = this.answerKey[key];
  
      if (!userAnswer) {
        this.setNoAnswerMessage(paragraph, correctAnswer);
      } else if (userAnswer !== correctAnswer) {
        this.setWrongAnswerMessage(paragraph, correctAnswer);
      } else {
        this.setCorrectAnswerMessage(paragraph);
      }
  
      key++;
    }
  },
  
  setNoAnswerMessage(paragraph, correctAnswer) {
    paragraph.textContent = `You didn't not answer this question. The correct answer is: "${correctAnswer}".`;
    paragraph.classList.add('wrong');
  },
  
  setWrongAnswerMessage(paragraph, correctAnswer) {
    paragraph.textContent = `Wrong Answer. The correct answer is: "${correctAnswer}".`;
    paragraph.classList.add('wrong');
  },
  
  setCorrectAnswerMessage(paragraph) {
    paragraph.textContent = 'Correct Answer.';
    paragraph.classList.add('correct');
  },
}

App.quizQuestions = (function() {
  const questions = [
    {
      id: 1,
      description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
      options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    },
    {
      id: 2,
      description: 'Which of the following numbers is the answer to Life, the \
                    Universe and Everything?',
      options: ['66', '13', '111', '42'],
    },
    {
      id: 3,
      description: 'What is Pan Galactic Gargle Blaster?',
      options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    },
    {
      id: 4,
      description: 'Which star system does Ford Prefect belong to?',
      options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    },
  ];

  return {
    answerKey: { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' },
    render() {
      const template = Handlebars.compile(document.querySelector('#question_template').innerHTML);
  
      questions.forEach(question => {
        let div = template(question);
        document.querySelector('fieldset').insertAdjacentHTML('beforeend', div);
      });
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => App.init());
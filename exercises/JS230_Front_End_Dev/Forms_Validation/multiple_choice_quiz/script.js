const init = (function() {
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
    renderQuestions() {
      const template = Handlebars.compile(document.querySelector('#question_template').innerHTML);
  
      questions.forEach(question => {
        let div = template(question);
        document.querySelector('fieldset').insertAdjacentHTML('beforeend', div);
      });
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const { answerKey, renderQuestions } = init;

  renderQuestions();

  const resultMessages = document.querySelectorAll('p.result');
  const resetBtn = document.querySelector('.reset_form');
  const submitBtn = document.querySelector('.submit');

  function toggleFormButtons() {
    submitBtn.classList.toggle('disabled');
    resetBtn.classList.toggle('disabled');
  }

  function handleFormSubmit(e) {
    if (e.target.classList.contains('disabled')) return;

    const answers = getUserAnswers();

    displayResults(answers, answerKey, resultMessages);
    toggleFormButtons();
  }

  function handleFormReset(e) {
    if (e.target.classList.contains('disabled')) return;
  
    clearResultMessages();
    uncheckSelectedInputs();
    toggleFormButtons();
  }
  
  function clearResultMessages() {
    for (let paragraph of resultMessages) {
      paragraph.textContent = '';
      paragraph.classList.remove('correct', 'wrong');
    }
  }
  
  function uncheckSelectedInputs() {
    const checkedInputs = document.querySelectorAll('input[type="radio"]:checked');
    for (let radio of checkedInputs) {
      radio.checked = false;
    }
  }

  submitBtn.addEventListener('click', handleFormSubmit);
  resetBtn.addEventListener('click', handleFormReset);
});

function getUserAnswers() {
  const inputs = document.querySelectorAll('input[type="radio"]:checked');
  const userAnswers = {};

  inputs.forEach(input => {
    userAnswers[input.name] = input.value;
  });

  return userAnswers;
}

function displayResults(userAnswers, answerKey, resultMessages) {
  let key = 1;

  for (let paragraph of resultMessages) {
    const userAnswer = userAnswers[key];
    const correctAnswer = answerKey[key];

    if (!userAnswer) {
      setNoAnswerMessage(paragraph, correctAnswer);
    } else if (userAnswer !== correctAnswer) {
      setWrongAnswerMessage(paragraph, correctAnswer);
    } else {
      setCorrectAnswerMessage(paragraph);
    }

    key++;
  }
}

function setNoAnswerMessage(paragraph, correctAnswer) {
  paragraph.textContent = `You didn't not answer this question. The correct answer is: "${correctAnswer}".`;
  paragraph.classList.add('wrong');
}

function setWrongAnswerMessage(paragraph, correctAnswer) {
  paragraph.textContent = `Wrong Answer. The correct answer is: "${correctAnswer}".`;
  paragraph.classList.add('wrong');
}

function setCorrectAnswerMessage(paragraph) {
  paragraph.textContent = 'Correct Answer.';
  paragraph.classList.add('correct');
}

// const App = {
//   init() {
//     this.renderQuestions();
//     this.bindEvents();

//   }
// }
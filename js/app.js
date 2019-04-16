const content = document.getElementById('question');

const questions = {
  1: {
    question: "What is the first name of Harry Potter's father?",
    answerOptions: {
      a: "James",
      b: "Lucios",
      c: "Sirius"
    },
    correctAnswer: "a: James"
  },
  2: {
    question: "What is the first name of Harry Potter's mother?",
    answerOptions: {
      a: "Minerva",
      b: "Lilian",
      c: "Sibila"
    },
    correctAnswer: "b: Lilian"
  },
  3: {
    question: "Harry Potter is from which Hogwarts' house?",
    answerOptions: {
      a: "Slytherin",
      b: "Gryffindor",
      c: "Ravenclaw"
    },
    correctAnswer: "b: Gryffindor"
  },
  4: {
    question: "Who are Harry's best friends?",
    answerOptions: {
      a: "Draco and Rowena",
      b: "Neville and Gina",
      c: "Rony and Hermione"
    },
    correctAnswer: "c: Rony and Hermione"
  },
  5: {
    question: "Which spell causes an object to fly to the caster?",
    answerOptions: {
      a: "Aguamenti",
      b: "Alohomora",
      c: "Accio"
    },
    correctAnswer: "c: Accio"
  },
  6: {
    question: "Which is not one of the Unforgivable Curses?",
    answerOptions: {
      a: "Avada Kedavra",
      b: "Appare Vestigium",
      c: "Cruciatus"
    },
    correctAnswer: "b: Appare Vestigium"
  },
  7: {
    question: "Where is the entrance to the Diagon Alley?",
    answerOptions: {
      a: "behind the Leaky Cauldron",
      b: "in Hogsmeade Village",
      c: "Privet Drive street"
    },
    correctAnswer: "a: behind the Leaky Cauldron"
  },
  8: {
    question: "What is the middle name of Lord Voldemort?",
    answerOptions: {
      a: "Marvolo",
      b: "Salazar",
      c: "Lucius"
    },
    correctAnswer: "a: Marvolo"
  },
  9: {
    question: "Which creature has the body of a horse and head, wings, and forelegs of an eagle ?",
    answerOptions: {
      a: "Goblins",
      b: "Hippogriffs",
      c: "Centaurs"
    },
    correctAnswer: "b: Hippogriffs"
  },
  10: {
    question: "Which is Harry's wand?",
    answerOptions: {
      a: "Holly and phoenix feather",
      b: "The Elder Wand",
      c: "Vine and dragon heartstring"
    },
    correctAnswer: "a: Holly and phoenix feather"
  },
}

const correctAnswers = [];
const keys = Object.keys(questions);

for (let j = 1; j < keys.length + 1; j++) {
  correctAnswers.push(questions[j]['correctAnswer']);
}

let i = 0;

(function startQuizz() {
  content.innerHTML = `<button onclick="showQuestion()">Start quizz</button>`;
})();

function showQuestion() {
  i++;
  content.innerHTML = `
  <h2>${questions[i]['question']}</h2>
  <div 
  id="answer" 
  onclick="getAnswer()">
    <button>a: ${questions[i]['answerOptions']['a']}</button>
    <button>b: ${questions[i]['answerOptions']['b']}</button>
    <button>c: ${questions[i]['answerOptions']['c']}</button>
  </div>
`;
}


const input = require("readline-sync");

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = " ";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let correctCount = 0;
  for (let i = 0; i < questions.length; i++) {
    console.log("Your Answer: ", candidateAnswers[i].toLowerCase());
    console.log("Correct Answers:", correctAnswers[i].toLowerCase());
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correctCount++;
      console.log("correct!\n");
    } else {
      console.log("Incorrect!\n");
    }
  }

  let grade;
  if (correctCount === 0) {
    grade = 0;
  } else if (correctCount === 1) {
    grade = 20;
  } else if (correctCount === 2) {
    grade = 40;
  } else if (correctCount === 3) {
    grade = 60;
  } else if (correctCount === 4) {
    grade = 80;
  } else {
    grade = 100;
  }
  console.log("Your grade is: ", grade, "%");
  
  // grade = (correctCount / questions.length) * 100

  if (grade >= 80) {
    console.log("Congratulations, you passed!");
  } else {
    console.log("You did not pass.");
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};

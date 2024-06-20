const data = {
  users: [],
  questions: []
};

function addUser({ name, email, password }) {
  data.users.push({ name, email, password });
}

function getUser(email) {
  const user = data.users.find((u) => u.email == email);
  return user;
}

function getQuestions() {
  return data.questions;
}

function addQuestion({ text, answers, correctAnswer }) {
  data.questions.push({ text, answers, correctAnswer });
}

module.exports = {
  addUser,
  getUser,
  getQuestions,
  addQuestion
};
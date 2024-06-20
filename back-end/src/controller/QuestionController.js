const QuestionService = require('../service/QuestionService');

const QuestionController = {

  getQuestions: async (req, res) => {
    const questions = await QuestionService.getQuestions();
    return res.status(200).json(questions);
  },

  createQuestion: async (req, res) => {
    const { text, answers, correctAnswer } = req.body;
    const newQuestion = await QuestionService.createQuestion({ text, answers, correctAnswer });
    return res.status(201).json(newQuestion);
  },
};

module.exports = QuestionController;

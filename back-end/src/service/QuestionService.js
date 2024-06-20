const db = require('../database/db.js');

const QuestionService = {

    getQuestions: async () => {
        return await db.getQuestions();
    },

    createQuestion: async ({ text, answers, correctAnswer }) => {
        db.addQuestion({ text, answers, correctAnswer });
        return { text, answers, correctAnswer };
    },
};

module.exports = QuestionService;
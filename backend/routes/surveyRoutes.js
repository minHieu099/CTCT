import express from 'express';
import { getQuestions, submitAnswers } from '../controllers/surveyController.js';

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit', submitAnswers);

export default router;
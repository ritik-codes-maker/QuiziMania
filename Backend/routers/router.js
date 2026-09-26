import { Router } from "express";
import * as controller from '../controllers/controller.js';

const router = Router();

router.route('/')

router.route('/questions')
        .get(controller.getQuestions)
        .post(controller.insertAllQuestions)
        .delete(controller.dropAllQuestions);

router.route('/result')
        .get(controller.getResult)
        .post(controller.createResult)
        .delete(controller.deletAllResults);

export default router;
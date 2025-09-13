import { Router } from 'express';
import FeedbackController from '../controllers/feedbackController';

const router = Router();
const feedbackController = new FeedbackController();

export function setFeedbackRoutes(app: Router) {
    app.post('/feedback', feedbackController.createFeedback.bind(feedbackController));
    app.get('/feedback', feedbackController.getFeedback.bind(feedbackController));
    app.delete('/feedback/:id', feedbackController.deleteFeedback.bind(feedbackController));
}
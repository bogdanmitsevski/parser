import Router from 'koa-router';
import technologyController from '../controllers/technologyController';
import authMiddleware from '../middleware/authMiddleware';
const router = new Router();

router.post('/technology', authMiddleware, technologyController.parseTechnologies);

export default router;
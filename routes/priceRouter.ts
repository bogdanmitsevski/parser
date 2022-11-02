import Router from 'koa-router';
import authMiddleware from '../middleware/authMiddleware';
import priceController from '../controllers/priceController';

const router = new Router();

router.post('/addPrice', authMiddleware, priceController.addPrice);

export default router;
import Router from 'koa-router';
import priceController from '../controllers/priceController';

const router = new Router();

router.post('/addPrice', priceController.addPrice);

export default router;
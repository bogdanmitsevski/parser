import Router from 'koa-router';
import customerController from '../controllers/customerController';
const router = new Router();
import authMiddleware from '../middleware/authMiddleware';

router.post('/getCustomers', customerController.getCustomer);
router.post('/addCustomers', authMiddleware, customerController.addCustomers);

export default router;
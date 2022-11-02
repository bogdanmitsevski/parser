import Router from 'koa-router';
import customerController from '../controllers/customerController';
const router = new Router();

router.post('/getCustomers', customerController.getCustomer);
router.post('/addCustomers', customerController.addCustomers);

export default router;
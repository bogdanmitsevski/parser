import Router from 'koa-router';
import customerController from '../controllers/customerController';
const router = new Router();

router.get('/getCustomers', customerController.getCustomer);
router.post('/addCustomer', customerController.addCustomers);

export default router;
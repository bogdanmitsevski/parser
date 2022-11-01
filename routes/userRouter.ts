import userController from '../controllers/userController';
import Router from 'koa-router';

const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);

export default router;
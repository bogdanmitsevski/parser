import Router from 'koa-router';
import technologyController from '../controllers/technologyController';
const router = new Router();

router.post('/technology', technologyController.parseTechnologies);

export default router;
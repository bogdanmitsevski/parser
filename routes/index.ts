import Router from 'koa-router';
import priceRouter from './priceRouter';
import technologyRouter from './technologyRouter';
import customerRouter from './customerRouter';
import userRouter from './userRouter';

const router = new Router();

router.use(priceRouter.routes());
router.use(technologyRouter.routes());
router.use(customerRouter.routes());
router.use(userRouter.routes());

export default router;
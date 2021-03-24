import * as express from 'express';
import blogroutes from './blogroutes';
import userroutes from './userroutes';
import tagroutes from './tagroutes';
import btRoutes from './btroutes'

const router = express.Router();

router.use('/blog', blogroutes);
router.use('/user', userroutes)
router.use('/tags', tagroutes)
router.use('/blogtags', btRoutes)

export default (router)
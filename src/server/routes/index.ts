import * as express from 'express';
import blogroutes from './blogroutes';
import userroutes from './userroutes';
import tagroutes from './tagroutes';

const router = express.Router();

router.use('/blog', blogroutes);
router.use('/user', userroutes)
router.use('/tags', tagroutes)

export default (router)
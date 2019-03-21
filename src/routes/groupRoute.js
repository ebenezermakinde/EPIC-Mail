import express from 'express';
import { startGroup } from '../controllers/groupControllers';
import { verifyToken } from '../helpers/helper';

const groupRouter = express.Router();

groupRouter.post('/groups', verifyToken, startGroup);

export default groupRouter;

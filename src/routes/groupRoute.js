import express from 'express';
import { startGroup, addAUserToGroup } from '../controllers/groupControllers';
import { verifyToken } from '../helpers/helper';
import GroupControls from '../middleware/groups';

const { findSpecificGroup } = GroupControls;

const groupRouter = express.Router();

groupRouter.post('/groups', verifyToken, startGroup);
groupRouter.post('/groups/:groupId/users', verifyToken, findSpecificGroup, addAUserToGroup);

export default groupRouter;

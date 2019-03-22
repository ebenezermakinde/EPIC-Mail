import express from 'express';
import {
  startGroup, addAUserToGroup, deleteUserFromGroup, getAllGroupsByUser,
} from '../controllers/groupControllers';
import { verifyToken } from '../helpers/helper';
import GroupControls from '../middleware/groups';

const { findSpecificGroup } = GroupControls;

const groupRouter = express.Router();

groupRouter.post('/groups', verifyToken, startGroup);
groupRouter.post('/groups/:groupId/users', verifyToken, findSpecificGroup, addAUserToGroup);
groupRouter.delete('/groups/:groupId/users/:userId', verifyToken, findSpecificGroup, deleteUserFromGroup);
groupRouter.get('/groups', verifyToken, getAllGroupsByUser);

export default groupRouter;

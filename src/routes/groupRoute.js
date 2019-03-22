import express from 'express';
import {
  startGroup,
  addAUserToGroup,
  deleteUserFromGroup,
  getAllGroupsByUser, editGroupByName, deleteSpecificGroup,
} from '../controllers/groupControllers';
import { verifyToken } from '../helpers/helper';
import GroupControls from '../middleware/groupsFinder';

const { findSpecificGroup } = GroupControls;

const groupRouter = express.Router();

groupRouter.post('/groups', verifyToken, startGroup);
groupRouter.post('/groups/:groupId/users', verifyToken, findSpecificGroup, addAUserToGroup);
groupRouter.delete('/groups/:groupId/users/:userId', verifyToken, findSpecificGroup, deleteUserFromGroup);
groupRouter.delete('/groups/:groupId', verifyToken, findSpecificGroup, deleteSpecificGroup);
groupRouter.get('/groups', verifyToken, getAllGroupsByUser);
groupRouter.patch('/groups/:groupId/name', verifyToken, findSpecificGroup, editGroupByName);

export default groupRouter;

import express from 'express';
import UserController from '../controllers/userController';
import UserValidator from '../middleware/userValidator';

const { signUp } = UserController;
const { signUpValidator } = UserValidator;

const userRouter = express.Router();

userRouter.post('/auth/signup', signUpValidator, signUp);

export default userRouter;

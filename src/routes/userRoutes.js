import express from 'express';
import UserController from '../controllers/userController';
import UserValidator from '../middleware/userValidator';

const { signUp, login } = UserController;
const { signUpValidator, loginValidator } = UserValidator;

const userRouter = express.Router();

userRouter.post('/auth/signup', signUpValidator, signUp);
userRouter.post('/auth/login', loginValidator, login);

export default userRouter;

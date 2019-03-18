import '@babel/polyfill';
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes';
import messageRouter from './routes/messageRoutes';
import defaultRouter from './routes/defaultRoute';

// Set up the express app.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use our routes.
app.use('/api/v1/', userRouter);
app.use('/api/v1/messages', messageRouter);
app.use('/', defaultRouter);

// Define our port number.
const port = process.env.PORT || 3000;

// Set up listening.
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;

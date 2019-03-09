import express from 'express';

const defaultRouter = express.Router();

// Entry message for visitors
defaultRouter.get('/', (req, res) => res.status(200).json({
  message: 'Welcome to EPIC-Mail, Great to have you',
}));

// Handles other routes not defined in the app
defaultRouter.all('*', (req, res) => res.status(404).json({
  message: 'Oops, Sorry page not found!',
}));

export default defaultRouter;

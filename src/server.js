import express from 'express';

// Set up the express app.
const app = express();

// Define our port number.
const port = process.env.PORT || 3000;

// Set up listening.
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

import express from 'express';
import { SERVER_PORT } from './constants/app.constant.js';
import { apiRouter } from './router/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(SERVER_PORT, () => {
  console.log(`app listening on port ${SERVER_PORT}`);
});

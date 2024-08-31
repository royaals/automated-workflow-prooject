import express from 'express';
import { json } from 'body-parser';
const app = express();
app.use(json());
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('HOME PAGE');
});
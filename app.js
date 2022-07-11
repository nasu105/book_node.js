import express from 'express';
import { bookRouter } from "./routes/book.route.js";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({
    uri: '/',
    message: 'Hello Node.js!',
  });
});

app.use('/book', (req, res) => bookRouter(req, res));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
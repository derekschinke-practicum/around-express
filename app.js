const express = require('express');
const path = require('path');

const userRouter = require('./routers/userRouter');
const cardRouter = require('./routers/cardRouter');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRouter);
app.use('/', cardRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at port ${PORT}`);
});

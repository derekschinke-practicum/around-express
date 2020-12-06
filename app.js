const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userRouter = require('./routers/userRouter');
const cardRouter = require('./routers/cardRouter');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/arounddb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRouter);
app.use('/', cardRouter);

app.use('*', (req, res) =>
  res.status(404).send({ message: 'Requested resource not found' })
);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at port ${PORT}`);
});

const express = require('express');
const userRouter = require('./controller/userController');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req, res) => res.send('Hello World!'));

app.use('/users', userRouter);

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
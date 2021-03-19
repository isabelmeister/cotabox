const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use((err, _req, res, _next) => {
  res.status(404).json({ message: err.message });
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
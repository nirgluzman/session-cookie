import express from 'express';
import 'colors';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`.red);
});

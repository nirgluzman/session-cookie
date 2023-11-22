import express from 'express';
import 'colors';

import authRoutes from './routes/auth.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`.red);
});

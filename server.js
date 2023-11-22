import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import 'colors';

import authRoutes from './routes/auth.js';

const PORT = process.env.PORT || 3000;

const app = express();

// middleware to parse incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

// middleware to parse cookies.
app.use(cookieParser());

// middleware to parse sessions.
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    name: 'session-id', // the name of the session id cookie.
    secret: 'my secret', // a secret string used to sign the session ID cookie.
    resave: false, // don't save session if unmodified.
    saveUninitialized: false, // don't create session until something stored.
    cookie: {
      secure: false, // This will only work if you have https enabled!
      maxAge: oneDay, // cookie expiry time.
    },
  })
);

app.use(authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`.red);
});

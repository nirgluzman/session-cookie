import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

// import for MongoDB session store
import { default as connectMongoDBSession } from 'connect-mongodb-session';
const MongoDBStore = connectMongoDBSession(session);

import 'colors';

import authRoutes from './routes/auth.js';

const PORT = process.env.PORT || 3000;

const app = express();

// MongoDB session store
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: 'sessions',
  expires: 1000 * 60 * 1, // expiration in milliseconds.
});

// add listner to 'error' event.
store.on('error', (error) => console.error('MongoDB connection error:', error));

// add listner to 'connected' event.
store.on('connected', () => console.log('Connected to MongoDB'));

// middleware to parse incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

// middleware to parse cookies.
app.use(cookieParser());

// middleware to parse sessions.
app.use(
  session({
    name: 'session-id', // the name of the session id cookie.
    secret: 'my secret', // a secret string used to sign the session ID cookie.
    resave: false, // don't save session if unmodified, https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false, // don't create session until something stored, https://www.npmjs.com/package/express-session#saveuninitialized
    store, // session store.
    cookie: {
      secure: false, // This will only work if you have https enabled!
      // sameSite: true, // the request is made to the same origin (website) that set the cookie (help to protect against XSS attacks).
      maxAge: 1000 * 60 * 1, // cookie expiry time (in msec).
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

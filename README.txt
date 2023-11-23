GitHub repo:
git@github.com:nirgluzman/session-cookie.git


*** Cookies ***
A cookie is a key-value pair that is stored in the browser.
The browser attaches cookies to every HTTP request that is sent to the server.
To use cookies with Express, we need the cookie-parser middleware.
https://expressjs.com/en/resources/middleware/cookie-parser.html


*** How to Harden your HTTP cookies ***
https://www.freecodecamp.org/news/web-security-hardening-http-cookies-be8d8d8016e1/


*** Session ***
Session data is stored on the server-side, i.e., a database or a session store.
Express-session is used to create and manage a session middleware.
https://expressjs.com/en/resources/middleware/session.html


*** Compatible Session Stores ***
By default, the sessions are stored in MemoryStore.
This is not recommended for production use. Instead, it's advisable to use alternative session stores for production. 
https://www.npmjs.com/package/express-session#compatible-session-stores
https://github.com/expressjs/session


*** Storing sessions with in MongoDB ***
https://www.npmjs.com/package/connect-mongodb-session
https://stackoverflow.com/questions/76256585/how-to-store-an-express-session-in-a-mongodb-database-using-a-controller


*** Additional resources ***
Sessions: https://www.quora.com/What-is-a-session-in-a-Web-Application
Cookies: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
Express-session Official Docs: https://github.com/expressjs/session
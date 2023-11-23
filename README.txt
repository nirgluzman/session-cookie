GitHub repo:
git@github.com:nirgluzman/session-cookie.git


*** Debug in VSCode with nodemon ***
https://stackoverflow.com/questions/53352303/how-to-debug-a-nodemon-project-in-vscode
https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12087614#questions/20864814


*** Dotenv ***
https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12087614#questions/20880268
When we use Docker, we can pass environment variables directly to the container at runtime without the need for a separate .env file. 
This is typically done using the -e or --env option when running the docker run command. 
For example: docker run -e KEY1=value1 -e KEY2=value2 my-node-app
In this way, we can set environment variables directly in the Docker run command or through a configuration system, 
and these values will be available to our Node.js application without the need for a package like dotenv.

The reason for this is that the environment inside the Docker container is a separate environment from the host system, 
and Docker provides a mechanism to pass environment variables from the host to the container.

In contrast, when we run our Node.js application locally without Docker, we might use a .env file to manage environment variables conveniently. 
The dotenv package helps load these variables into process.env when running the application locally.


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


--------------------------------------------


*** Express Validator ***
https://express-validator.github.io/docs/


*** Asynchronous data validation ***
https://medium.com/developer-rants/asynchronous-data-validation-in-express-285967457467
https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12087614?%24deeplink_path=udemy%3A%2F%2Fdiscover%3Fredirect%3Ddiscussions%26courseId%3D1879018%26discussionId%3D5857278&~channel=email&~stage=published&utm_campaign=email&utm_medium=email&utm_source=sendgrid.com&_branch_match_id=1256351992097136193&_branch_referrer=H4sIAAAAAAAAA02P3UrEMBCFnya9a%2Bu2rq1CEEEXvBF8gpJNZpu4%2BSOTWHx7J7uiQmAy35lkztE5R3zo%2B6LAfXUixs4af%2B7fYHsvgNkE%2F8iGWwUQK1%2BiyJpfZtn4xIYDHWVQhk9IbDwkUCaBzGx8rrQg0ntkw50MJSG8KhJ283R%2Fs5sJ%2Fo1chP28n4Zpbtj0IrXwHiwHJ4ytALNYgcdytAY1qIYsnYS1RyHPS0mW65ri19G2bd01jwyO%2But2uvig4APbrKElJVrI0K7FqKpZEMlTbUp2ixQuCrP6HwcVOcpW3D%2BA9KsEjuDVmoyqu74Bja%2FJHk0BAAA%3D#questions/5857278/

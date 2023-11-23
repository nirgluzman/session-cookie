// User login
const loginUser = (req, res, next) => {
  // retrieve the email and password from the body
  const { email, password } = req.body;

  // if the email and password are not valid, return an error
  if (!email || !password) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  console.log('Login successful');

  // if the email and password are valid, set the isLogin attribute in session to true.
  req.session.isLogin = true;

  // set the newProduct cookie to true.
  res.cookie('newProduct', true, { maxAge: 1000 * 60, httpOnly: true });

  res.send({ message: 'Login successful' });
};

// User logout
const logoutUser = (req, res, next) => {
  // destroy the session by unset the req.session property. once complete, the callback will be invoked.
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Session is destroyed');
    }
  });

  // clear the newProduct cookie.
  res.clearCookie('newProduct');

  console.log('Logout successful');

  res.send({ message: 'Logout successful' });
};

export { loginUser, logoutUser };

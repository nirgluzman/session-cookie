const loginUser = (req, res, next) => {
  // retrieve the email and password from the body
 const { email, password } = req.body;

 req.session.isLogin = true;
  res.send({ message: 'Login successful' });
};

export { loginUser };

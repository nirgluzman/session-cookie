const loginUser = (req, res, next) => {
  // retrieve the email and password from the body
  // const { email, password } = req.body;

  res.send({ message: 'Login successful' });
};

export { loginUser };

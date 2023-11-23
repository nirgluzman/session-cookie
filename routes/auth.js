import express from 'express';

import * as authController from '../controllers/authController.js';

import validator from 'express-validator';
const { check, body } = validator;

const router = express.Router();

router.post(
  '/login',
  [
    check('email')
      .isEmail()
      .withMessage('Email is not valid')
      .custom((value, { req }) => {
        if (value === 'test@test.com') {
          throw new Error('This email address is forbidden.');
        }
        return true;
      }),
    body('password', 'Password is invalid').isLength({ min: 6 }).isAlphanumeric(),
  ],
  authController.loginUser
);

router.post('/logout', authController.logoutUser);

export default router;

import express from 'express';

import * as authController from '../controllers/authController.js';

import validator from 'express-validator';
const { check, body } = validator;

const router = express.Router();

router.post(
  '/login',
  [
    check('email', 'Email is not valid')
      .isEmail()
      .custom((value, { req }) => {
        if (value === 'test@test.com') {
          throw new Error('This email address is forbidden.');
        }
        return true;
      })
      .normalizeEmail({ all_lowercase: true }),
    body('password', 'Password is invalid').isLength({ min: 6 }).isAlphanumeric().trim(),
  ],
  authController.loginUser
);

router.post('/logout', authController.logoutUser);

export default router;

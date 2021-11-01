const { body, validationResult } = require('express-validator');


exports.validateUser = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4 })
    .withMessage('Password must be more than 4 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
      
    }
    else {
      next();
    }
  },

];
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   GET api/users
// @desc    Test route
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    [
      check(
        'password',
        'Please enter a password with 6 or more characters and include at least one special character.'
      ).isLength({ min: 6 }),
      check(
        'password',
        'Please include at least one special character.'
      ).matches(/[*@!#%&()^~{}]+/),
      check('password', 'Please include at least one number.').matches(/[0-9]+/)
    ]
  ],

  (req, res) => {
    const errors = validationResult(req);
    // const passwordErrors = [];
    // if (!errors.isEmpty())
    //   errors.array().map(result => {
    //     if (result.param === 'password') {
    //       passwordErrors.push(result.msg);
    //     }
    //   });
    // console.log(passwordErrors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('User route');
  }
);

module.exports = router;

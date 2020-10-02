const { check } = require('express-validator');


exports.registerValidator = [
    check('username').isString().withMessage('Must include a valid username.'),
    check('email').isEmail().withMessage('Must use a valid email address.'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
]

exports.signinValidator = [
    check('email').isEmail().withMessage('Must use a valid email address.'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
]
const express = require('express');
const router = express.Router();

/**
 * MIDDLEWARE
 */
const Protect = require('../middleware/protect_middleware');
const { registerValidator, signinValidator } = require('../validators/auth_validator');
const runValidation = require('../validators/index');


/**
 * CONTROLLER
 */
const { verifyAuth, registerUser, signinUser, signoutUser } = require('../controllers/auth_controller');

// @desc    Verifies Authentication
// @route   GET /api/v1/auth
// @access  Private
router.route('/').get(Protect, verifyAuth);

// @desc    Sign In
// @route   POST /api/v1/auth/signin
// @access  Public
// @valid   email, password
router.route('/signin').post(signinValidator, runValidation, signinUser);

// @desc    Sign Out
// @route   GET /api/v1/auth/signout
// @access  Protect
router.route('/signout').post(Protect, signoutUser);

// @desc    Register New User
// @route   POST /api/v1/auth/register
// @access  Public
// @valid   username, email, password
router.route('/register').post(registerValidator, runValidation, registerUser);


module.exports = router;
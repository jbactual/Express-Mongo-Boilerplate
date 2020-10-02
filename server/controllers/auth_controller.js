
// @desc    Verifies Authentication
// @route   GET /api/v1/auth
// @access  Private
exports.verifyAuth = (req, res) => {
    try {
        console.log('verifyAuth');

    } catch (error) {
        console.log(error);
    }
}

// @desc    Sign In
// @route   POST /api/v1/auth/signin
// @access  Public
exports.signinUser = (req, res) => {
    try {
        console.log('signinUser');

    } catch (error) {
        console.log(error);
    }
}

// @desc    Sign Out
// @route   GET /api/v1/auth/signout
// @access  Protect
exports.signoutUser = (req, res) => {
    try {
        console.log('signoutUser');

    } catch (error) {
        console.log(error);
    }
}

// @desc    Register New User
// @route   POST /api/v1/auth/register
// @access  Public
exports.registerUser = (req, res) => {
    try {
        console.log('registerUser');

    } catch (error) {
        console.log(error);
    }
}
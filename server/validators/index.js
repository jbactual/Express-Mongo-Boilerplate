const { validationResult } = require('express-validator');

function runValidation(req, res, next) {
    const errors = validationResult(req);
    if (errors) {
        return res.status(200).json({ ok: false, error: errors.array()[0].msg });
    } else {
        next();
    }
}

module.exports = runValidation;
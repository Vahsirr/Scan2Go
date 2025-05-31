const { check } = require('express-validator');

exports.CustomerValidation = [
    check('email', 'Enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('mobile', 'Mobile Number Contains 10 digits only').isLength({
        min: 12,
        max: 12
    })
];
exports.CustomerLoginValidation=check('mobile', 'Mobile Number Contains 10 digits only').isLength({
    min: 12,
    max: 12
})
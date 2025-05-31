const express = require('express');
const router = express.Router();
const {CustomerValidation,CustomerLoginValidation}=require('../../validation/validation')
const CustomerController=require('../controller/Customer.controller')
router.post('/registercustomer',CustomerController.registerCustomer);
router.post('/logincustomer',CustomerLoginValidation,CustomerController.loginAndFetchCustomer);
router.get('/verify',CustomerController.verifyEmail);
module.exports = router
const express = require('express');
const router = express.Router();
//const {CustomerValidation,CustomerLoginValidation}=require('../../validation/validation')
const {CustomerLoginAuthentication}=require('../../middleware/authentication')
const CustomerProductController=require('../controller/CustomerProduct.controller')
router.post('/savecutomerproduct/:pid',CustomerLoginAuthentication,CustomerProductController.saveCustomerProduct)
router.get('/getcustomerpurchasedetail',CustomerLoginAuthentication,CustomerProductController.getCustomerProducts);
router.delete('/deletecustomerpurchase',CustomerLoginAuthentication,CustomerProductController.deleteCustomerProductsAfterPayment);
module.exports = router
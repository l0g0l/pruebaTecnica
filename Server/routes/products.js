const express = require('express');
const router = express.Router();


const { getProducts, getProductsDetails} = require('../model/mySQL')


router.get('/', getProducts)
router.get ('/details/:id', getProductsDetails)




module.exports = router
const express = require('express');
const router = express.Router();


const { getProducts, getProductsDetails, getProductsByType, getManufcByType} = require('../model/mySQL')


router.get('/', getProducts)
router.get('/type', getProductsByType, getManufcByType)
router.get ('/details/:id', getProductsDetails)




module.exports = router
const express = require('express');
const Product = require('../models/productModel');
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/inventoryControlers');
const router = express.Router();

// Get all products
router.get('/', getProducts);

// Get a single inventory
router.get('/:_id', getProduct);

// Post a new product
router.post('/', createProduct);

// Delete a product
router.delete('/:_id', deleteProduct);

// Update a new product
router.patch('/:_id', updateProduct);

module.exports = router;

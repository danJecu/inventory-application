const Product = require('../models/productModel');
const mongoose = require('mongoose');

// get all products
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  res.status(200).json(products);
};
// get a single product
const getProduct = async (req, res) => {
  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: 'No such id' });
  }

  const product = await Product.findById(_id);
  if (!product) {
    return res.status(404).json({ error: 'No such product' });
  }
  res.status(200).json(product);
};

// create a new product
const createProduct = async (req, res) => {
  const { sku, title, quantity } = req.body;

  // add product to db
  try {
    const product = await Product.create({ sku, title, quantity });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: 'No such id' });
  }

  const product = await Product.findOneAndDelete({ _id });

  if (!product) {
    return res.status(404).json({ error: 'No such product' });
  }

  res.status(200).json(product);
};

// update a product
const updateProduct = async (req, res) => {
  const { _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: 'No such id' });
  }

  const product = await Product.findOneAndUpdate(
    { _id },
    {
      ...req.body,
    }
  );
  if (!product) {
    return res.status(404).json({ error: 'No such product' });
  }
  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};

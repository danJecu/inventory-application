const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    sku: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);

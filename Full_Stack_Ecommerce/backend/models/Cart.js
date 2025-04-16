const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  title: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1
  }
}, {timestamps: true});

module.exports = mongoose.model('Cart', cartSchema);
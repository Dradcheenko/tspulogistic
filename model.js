// models.js
const mongoose = require('mongoose');

// Определение схемы для продуктов
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

// Создание модели для продуктов на основе схемы
const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product
};

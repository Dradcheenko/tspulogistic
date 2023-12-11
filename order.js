// order.js
const mongoose = require('mongoose');

// Определение схемы для заказов
const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  customer: {
    type: String,
    maxlength: 255 // Ограничение на количество символов в строке
  },
  phone: {
    type: String,
    maxlength: 255
  },
  created_at: {
    type: Date,
    default: Date.now // Установка текущей даты при создании
  },
  completed_at: {
    type: Date
  },
  user_id: {
    type: Number, // Предполагается внешний ключ на таблицу пользователей
    required: true
  },
  type: {
    type: String,
    enum: ['online', 'offline'] // Определение возможных значений поля
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'canceled']
  }
});

// Создание модели для заказов на основе схемы
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

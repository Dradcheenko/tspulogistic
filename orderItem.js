// orderItem.js
const mongoose = require('mongoose');

// Определение схемы для позиций заказов
const orderItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  order_id: {
    type: Number, // Предполагается внешний ключ на таблицу заказов
    required: true
  },
  product_id: {
    type: Number, // Предполагается внешний ключ на таблицу продуктов
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  cost: {
    type: Number,
    required: true
  }
});

// Создание модели для позиций заказов на основе схемы
const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;

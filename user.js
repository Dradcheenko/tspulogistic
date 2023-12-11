// user.js
const mongoose = require('mongoose');

// Определение схемы для пользователей
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Создание модели для пользователей на основе схемы
const User = mongoose.model('User', userSchema);

module.exports = User;

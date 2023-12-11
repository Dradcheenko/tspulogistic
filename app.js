// app.js (или другой основной файл)
const mongoose = require('mongoose');
const connectDB = require('./db'); // Подключение к базе данных
const { Product } = require('./model');
const User = require('./user'); 
const Order = require('./order'); 
const OrderItem = require('./orderItem');


// Подключение к базе данных MongoDB
connectDB()
  .then(async () => {


    // Создание нового продукта
    const newProduct = new Product({
      name: 'Название продукта',
      price: 19.99,
      stock: 100
    });
// Создание нового пользоваетля
 const newUser = new User({
      name: 'Имя пользователя'
    });

    const newOrder = new Order({
        id: 6, //ОБЯЗАТЕЛЬНОО МЕНЯЕМ
        customer: 'Имя клиента',
        phone: 'Телефон клиента',
        user_id: 124, // Пример внешнего ключа на пользователя
        type: 'online',
        status: 'active'
        // Другие поля ...
      });

      const newOrderItem = new OrderItem({
        id: 2,//ОБЯЗАТЕЛЬНО МЕНЯЕМ
        order_id: 123, // Пример внешнего ключа на заказ
        product_id: 456, // Пример внешнего ключа на продукт
        count: 2,
        cost: 50.0
        // Другие поля ...
      });

    // Сохранение нового продукта в базе данных
    const savedProduct = await newProduct.save();
    console.log('Создан новый продукт:', savedProduct);

    const savedUser = await newUser.save();
    console.log('Создан новый пользователь:', savedUser);

    const savedOrder = await newOrder.save();
    console.log('Создан новый заказ:', savedOrder);

    const savedOrderItem = await newOrderItem.save();
    console.log('Создана новая позиция заказа:', savedOrderItem);
  })



  .catch((err) => {
    console.error('Ошибка подключения к базе данных:', err);
  });
 
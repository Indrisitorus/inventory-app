const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Inisialisasi koneksi Sequelize menggunakan data dari file .env
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: '127.0.0.1', // Alamat localhost Laragon
    dialect: 'mysql'    // Driver database yang digunakan
  }
);

// Import model Item dan masukkan instance sequelize serta DataTypes
const Item = require('./item')(sequelize, DataTypes);

// Ekspor agar bisa digunakan di file app.js atau controller
module.exports = { sequelize, Item };
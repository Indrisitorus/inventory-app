require('dotenv').config(); // Load konfigurasi dari .env
const express = require('express');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models'); // Mengambil koneksi database
const itemRoutes = require('./routes/itemRoutes'); // Mengambil rute barang

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi View Engine (EJS)
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: true })); // Untuk membaca data dari form
app.use(express.json()); 
app.use(cookieParser()); // Untuk membaca cookie (JWT)

// Route Utama
// Mengarahkan request ke file routes/itemRoutes.js
app.use('/', itemRoutes); 

// Cek Koneksi Database & Jalankan Server
// sequelize.sync() akan memastikan tabel terbuat otomatis jika belum ada
sequelize.sync().then(() => {
    console.log('Database terhubung (inventory_db)');
    app.listen(PORT, () => {
        console.log(`Server jalan di http://localhost:${PORT}/dashboard`);
    });
}).catch(err => {
    console.error('Gagal koneksi database:', err);
});
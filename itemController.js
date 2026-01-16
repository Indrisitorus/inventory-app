const { Item } = require('../models');

exports.getDashboard = async (req, res) => {
  try {
    // Sesuai soal: Hanya ambil barang yang is_active = 1
    const items = await Item.findAll({ where: { is_active: 1 } });
    res.render('dashboard', { items });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
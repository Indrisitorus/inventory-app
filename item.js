// Pastikan "m" pada module.exports adalah huruf kecil!
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    item_name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock_qty: DataTypes.INTEGER,
    min_stock: DataTypes.INTEGER,
    storage_location: DataTypes.STRING,
    is_active: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: true // 1 = Aktif, sesuai soal
    },
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, { 
    underscored: true,
    timestamps: true // Menangani created_at & updated_at otomatis
  });
  return Item;
};
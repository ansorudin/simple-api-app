"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class krs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { mahasiswa, mata_kuliah } = models;
      krs.belongsTo(mahasiswa, { foreignKey: "mahasiswaId" });
      krs.belongsTo(mata_kuliah, { foreignKey: "mataKuliahId" });
    }
  }
  krs.init(
    {
      mahasiswaId: DataTypes.INTEGER,
      mataKuliahId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "krs",
    }
  );
  return krs;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mata_kuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { mahasiswa } = models;
      mata_kuliah.belongsToMany(mahasiswa, {
        through: "krs",
        foreignKey: "mataKuliahId",
        as: "mahasiswa",
      });
    }
  }
  mata_kuliah.init(
    {
      name: DataTypes.STRING,
      sks: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "mata_kuliah",
    }
  );
  return mata_kuliah;
};

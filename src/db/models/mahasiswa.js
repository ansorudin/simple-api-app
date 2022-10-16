"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { mata_kuliah } = models;
      mahasiswa.belongsToMany(mata_kuliah, {
        through: "krs",
        foreignKey: "mahasiswaId",
        as: "mata_kuliah",
      });
    }
  }
  mahasiswa.init(
    {
      name: DataTypes.STRING,
      npm: DataTypes.STRING,
      fakultas: DataTypes.STRING,
      jurusan: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "mahasiswa",
    }
  );
  return mahasiswa;
};

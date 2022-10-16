"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("krs", [
      {
        mahasiswaId: 2,
        mataKuliahId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mahasiswaId: 2,
        mataKuliahId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("krs", null, {});
  },
};

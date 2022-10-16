"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("mata_kuliahs", [
      {
        name: "Sastra Jepang",
        sks: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sastra Sunda",
        sks: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mata_kuliahs", null, {});
  },
};

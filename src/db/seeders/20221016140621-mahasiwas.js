"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("mahasiswas", [
      {
        name: "Ahmad Ansorudin",
        npm: "100",
        fakultas: "Economics",
        jurusan: "Akuntansi",
        address: "Bandung",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Budi Sudarsono",
        npm: "200",
        fakultas: "Hukum",
        jurusan: "Hukum Perdata",
        address: "Surabaya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Caca Handika",
        npm: "300",
        fakultas: "Teknik",
        jurusan: "Teknik Nuklir",
        address: "Semarang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dodo Handoko",
        npm: "400",
        fakultas: "Sastra",
        jurusan: "Sastra Jawa",
        address: "Solo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mahasiswas", null, {});
  },
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      create sequence long_url_sequence start 1;
    `)
  },

  async down (queryInterface, Sequelize) {}
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      create table long_url (
        id char(7) primary key,
        long_url text not null
      );
    `);
  },

  async down(queryInterface, Sequelize) {}
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', 
    [{
      title: 'Como fazer amigos e influenciar pessoas',
      author: 'Dale Carnegie',
      pageQuantity: 255,
      createdAt: Sequelize.literal('NOW()'),
    },
    {
      title: 'Codigo daVinci',
      author: 'Dan Brown',
      pageQuantity: 483,
      createdAt: Sequelize.literal('NOW()'),
    },
    {
      title: 'Inferno',
      author: 'Dan Brown',
      pageQuantity: 652,
      createdAt: Sequelize.literal('NOW()'),
    }]
  );
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};

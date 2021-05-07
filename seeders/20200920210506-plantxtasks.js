'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('PlantTask', [{
      "zone":"1a", "rangeLow":"-60.0", "rangeHigh": "-55.0", "createdAt":"2021-04-04", "updatedAt":"2021-04-04"},
      {"zone":"1b", "rangeLow":"-55.0", "rangeHigh":"-50.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"2a","rangeLow":"-50.0", "rangeHigh":"-45.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"2b","rangeLow":"-45.0", "rangeHigh":"-40.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"3a","rangeLow":"-40.0", "rangeHigh":"-35.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"3b","rangeLow":"-35.0", "rangeHigh":"-30.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"4a","rangeLow":"-30.0", "rangeHigh":"-25.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"4b","rangeLow":"-25.0", "rangeHigh":"-20.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"5a","rangeLow":"-20.0", "rangeHigh":"-15.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"5b","rangeLow":"-15.0", "rangeHigh":"-10.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"6a","rangeLow":"-10.0", "rangeHigh":"-5.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"6b","rangeLow":"-5.0", "rangeHigh":"0.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"7a","rangeLow":"0.0", "rangeHigh":"5.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"7b","rangeLow":"5.0", "rangeHigh":"10.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"8a","rangeLow":"10.0", "rangeHigh":"15.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"8b","rangeLow":"15.0", "rangeHigh":"20.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"9a","rangeLow":"20.0", "rangeHigh":"25.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"9b","rangeLow":"25.0", "rangeHigh":"30.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"10a","rangeLow":"30.0", "rangeHigh":"35.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"10b","rangeLow":"35.0", "rangeHigh":"40.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"11a","rangeLow":"40.0", "rangeHigh":"45.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"11b","rangeLow":"45.0", "rangeHigh":"50.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"12a","rangeLow":"50.0", "rangeHigh":"55.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"12b","rangeLow":"55.0", "rangeHigh":"60.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"13a","rangeLow":"60.0", "rangeHigh":"65.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"},
      {"zone":"13b","rangeLow":"65.0", "rangeHigh":"70.0","createdAt":"2021-04-04","updatedAt":"2021-04-04"
    }

  ]);
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

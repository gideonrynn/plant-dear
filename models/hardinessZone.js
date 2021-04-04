const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const HardinessZone = sequelize.define('HardinessZone', {
        zone: {
            type: DataTypes.STRING
        },
        rangeLow: {
            type: DataTypes.DECIMAL
        },
        rangeHigh: {
            type: DataTypes.DECIMAL
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true,  
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        }
    })
        return HardinessZone;

   
}
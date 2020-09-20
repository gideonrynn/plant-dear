const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const Plan = sequelize.define('Plan', {
        name: {
            type: DataTypes.TEXT,
        },
        current: {
            type: DataTypes.TEXT
        },
        upcoming: {
            type: DataTypes.TEXT
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
        return Plan;
}
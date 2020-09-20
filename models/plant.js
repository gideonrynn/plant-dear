const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const Plant = sequelize.define('Plant', {
        name: {
            type: DataTypes.TEXT,
        },
        botanicalName: {
            type: DataTypes.TEXT,
        },
        location: {
            type: DataTypes.TEXT
        },
        water: {
            type: DataTypes.TEXT
        },
        sunlight: {
            type: DataTypes.TEXT
        },
        plantType: {
            type: DataTypes.TEXT
        },
        humidity: {
            type: DataTypes.TEXT
        },
        tempLow: {
            type: DataTypes.TEXT
        },
        tempHigh: {
            type: DataTypes.TEXT
        },
        hardiness: {
            type: DataTypes.TEXT
        },
        tolerance: {
            type: DataTypes.TEXT
        },
        pH: {
            type: DataTypes.TEXT
        },
        soilContent: {
            type: DataTypes.TEXT
        },
        cycle: {
            type: DataTypes.TEXT
        },
        plantHardinessZone: {
            type: DataTypes.TEXT
        },
        lastPotted: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        links: {
            type: DataTypes.TEXT
        },
        notes: {
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
        return Plant;
}
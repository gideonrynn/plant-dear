const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const PlantTask = sequelize.define('PlantTask', {
        plantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Plant',
              key: 'id'
            }
        },
        taskId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Task',
              key: 'id'
            }
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
        return PlantTask;
}
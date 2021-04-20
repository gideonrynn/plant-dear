const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const Task = sequelize.define('Task', {
        taskName: {
            type: DataTypes.TEXT,
        },
        taskDetail: {
            type: DataTypes.TEXT,
        },
        taskNotes: {
            type: DataTypes.TEXT
        },
        dateDue: {
            type: DataTypes.DATEONLY,
        },
        taskStatus: {
            type: DataTypes.STRING
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
        return Task;
}
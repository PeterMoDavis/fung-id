const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Upload extends Model { }

Upload.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'upload'
    }
);

module.exports = Upload;


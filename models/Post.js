const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        mushroom_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },

        latitude: {
            type: DataTypes.DECIMAL(10, 6),
            allowNull: false,
            validate: {
                isDecimal: true,
            },
        },

        longitude: {
            type: DataTypes.DECIMAL(10, 6),
            allowNull: false,
            validate: {
                isDecimal: true,
            },
        },

        weather: {
            type: DataTypes.JSON,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
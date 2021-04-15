const Sequelize = require("sequelize");
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret
});

module.exports = sequelize;
module.exports = cloudinary;
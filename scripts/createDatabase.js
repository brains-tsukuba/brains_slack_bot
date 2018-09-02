require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  operatorsAliases: false,
  dialect: 'postgres'
});

sequelize
  .query(`CREATE DATABASE ${process.env.DATABASE_NAME};`)
  .then(() => {
    console.log(`SUCCESS: CREATE DATABASE ${process.env.DATABASE_NAME}.`);
  })
  .catch(error => {
    if (error.original.code === '42P04') console.error(`ERROR! database ${process.env.DATABASE_NAME} already exists.`);
    else if (error.original.code === '42501') console.error(`ERROR! permission denied to create database.`);
    else console.error(error);
  })
  .finally(() => {
    sequelize.close();
  });
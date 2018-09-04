require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_URL_LOCAL,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    seederStrage: 'json',
    timezone: 'Asia/Tokyo'
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_URL,
    dialect: 'postgres',
    seederStrage: 'json',
    timezone: 'Asia/Tokyo'
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_URL,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    seederStrage: 'json',
    timezone: 'Asia/Tokyo'
  }
};

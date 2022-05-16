const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize = sql;

if (process.env.JAWSDB_URL) {
    sql = new Sequelize(process.env.JAWSDB_URL);
} else {
    sql = new Sequelize(
        process.env.DB_USER, process.env.DB_NAME, process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            PORT: 3306
        }
    );
}

module.exports = sql;
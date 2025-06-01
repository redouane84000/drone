require('dotenv').config();

const mysql = require('mysql2');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});


module.exports = { db, stripe };

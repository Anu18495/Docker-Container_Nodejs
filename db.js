// db.js
const { Pool } = require('pg');

// Create a pool of connections to PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER || 'myuser',               // Your DB user
    host: process.env.DB_HOST || '58b724e9b3e4',         // Your AWS RDS PostgreSQL DB endpoint
    database: process.env.DB_NAME || 'mydatabase',       // Your DB name
    password: process.env.DB_PASSWORD || 'mypassword',   // Your DB password
    port: process.env.DB_PORT || 5432,                   // Default port for PostgreSQL
});

// Export the pool object for querying the database
module.exports = pool;

// Check the pool connection when the app starts
pool.connect()
    .then(() => console.log('Connected to the database successfully'))
    .catch((err) => console.error('Error connecting to the database:', err));

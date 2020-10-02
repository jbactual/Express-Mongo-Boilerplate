const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/database');
/**
 * LOAD PROCESS.ENV.VARS
 */
dotenv.config({
    path: './config.env'
});

/**
 * CONNTECT TO DATABASE
 */
connectToDatabase();
/**
 * CREATE APPLICATION
 */
const app = express();

/**
 * MIDDLEWARE
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

/**
 * ROUTES
 */


/**
 * FIRE UP SERVER
 */
const PORT = process.env.PORT || 4600;
app.listen(PORT, () => {
    console.log(`----------------\n Server Running On ${PORT}\n----------------\n`);
})
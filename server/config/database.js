const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: '../config.env'
});


const connectToDatabase = () => {
    const MONGO_URI = process.env.MONGO_URI || '';
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }

    mongoose.connect(MONGO_URI, options, (err) => {
        if (err) {
            console.log('Could not connect to mongo database...\n', err);
            return;
        }
        console.log(`----------------\n MONGO CONNECTED \n----------------\n`);
    });
}

module.exports = connectToDatabase;
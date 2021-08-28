require('dotenv').config();
const Mongoose = require('mongoose');

// const url = "mongodb://localhost:27017/motorservice";

const url = process.env.URl;

module.exports = async () => {
  try {
    // Connection to database
    await Mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => console.log('DataBase Connected!..'))
      .catch((err) => console.log(err.message));
    // CHecking for Database connection
    Mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to Database');
    });

    // Catching errors
    Mongoose.connection.on('error', (error) => {
      console.log(error.message);
    });

    // Checking database disconnection
    Mongoose.connection.on('disconnected', (error) => {
      console.log('Mongoose connection is disconnected');
    });
  } catch (error) {
    console.error('message:' + error);
  }
};

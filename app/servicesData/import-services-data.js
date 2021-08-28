const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Services = require('../models/servicesModel');
const url = process.env.URL;
// const url = "mongodb://localhost:27017/motorservice";
dotenv.config();

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful'));

const services = fs.readFileSync(`${__dirname}/motorServices.json`, 'utf8');

// Import data into the database
const importData = async () => {
  try {
    await Services.create(JSON.parse(services));
    console.log('Data successfully imported');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// delete all data in the database
const deleteData = async () => {
  try {
    await Services.deleteMany();
    console.log('Deleted data successfully');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};
const command = process.argv[2];

if (command === 'import') importData();
if (command === 'delete') deleteData();

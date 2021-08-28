const express = require("express");
const app = express();
const Port = process.env.port || 3001;
const databaseConnection = require("./app/db");
const ourApp = require("./app");
const cors = require("cors");


// Database Connection
databaseConnection();

app.use(express.json());
app.use(cors());

app.use("/", ourApp.router);

app.use((req, res, next) => {
  console.log(req.headers);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('front_end/build'))

}
app.listen(Port, () => {
  console.log(`Server up, running on Port: ${Port}...`);
});

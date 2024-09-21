// import { Sequelize } from "sequelize";
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "bgdrnik9p7p0nh6okmjs",
  "ueieynmanpcaepvu",
  "4BDlNktTrmt2trMXkmHJ",
  {
    host: "bgdrnik9p7p0nh6okmjs-mysql.services.clever-cloud.com",
    dialect: "mysql",
    logging: false,
    timezone: "+07:00",
  }
);

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (e) {
    console.log("Unable to connect to the database: ", e);
  }
};

// export default connectDB;
module.exports = connectDB;

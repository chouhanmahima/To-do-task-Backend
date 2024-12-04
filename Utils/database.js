const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

const databaseConnection = () => {
   mongoose.connect(process.env.DB_URL)
   .then( () => {
    console.log("DB Connection Successful");
   })
   .catch( (error) => {
    console.log("DB Connection ERROR: ", error);
   })
}

module.exports = databaseConnection
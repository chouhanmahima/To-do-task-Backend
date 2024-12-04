const express = require("express");
const dotenv = require("dotenv");
const router = require("./Routes/Task");
const databaseConnection = require("./Utils/database");
const ScheduleTask = require("./Utils/scheduler");


const app = express();

dotenv.config();

// Middleware
app.use(express.json());

// Main Routes
app.use("/api/v1", router)

// DB connection
databaseConnection();

// Schedule Task call (corn)
ScheduleTask()

const PORT = process.env.PORT || 3030;

app.listen(PORT, ()=> {
   console.log(`Server is running at ${PORT}`);
})

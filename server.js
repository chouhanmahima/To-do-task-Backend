const express = require("express");
const dotenv = require("dotenv");
const router = require("./Routes/Task");
const databaseConnection = require("./Utils/database");
const ScheduleTask = require("./Utils/scheduler");
const cors = require("cors");

const app = express();

dotenv.config();

// Enable CORS for all routes
app.use(cors({
   origin: process.env.FRONTEND_URL, // Allow all origins, or specify a list of allowed origins  http://127.0.0.1:5500
   methods: ['GET', 'POST'], // Allowed methods
   credentials: true, // Allowed headers
}));

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

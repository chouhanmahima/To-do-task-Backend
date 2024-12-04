# Backend: To-Do Task Scheduler API

This is the backend of the Task Scheduler application, built with Node.js and Express. It provides API endpoints to manage tasks, including scheduling reminders, sending emails using Nodemailer, and logging task executions in a MongoDB database.

## Features

- **Task Management**: Create and fetch tasks.
- **Scheduled Tasks**: Uses `node-cron` to run scheduled tasks.
- **Email Notifications**: Send reminder emails using Nodemailer.
- **Logging**: Logs of task execution are stored in MongoDB.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB instance (local or cloud-based) for storing tasks and logs.

### Installation

1. **Clone the repository**:
   ```bash
   https://github.com/chouhanmahima/task-backend
   ```

2. **Install dependencies**:
    ```bash 
    npm install
     ```
3. **Environment Variables**: Create a .env file in the root directory with the following variables:
    ```bash   
     PORT=10000
     MONGO_URI=your_mongodb_connection_string
     EMAIL_USER=your_email@example.com
     EMAIL_PASS=your_email_password
    ```

###    Running the Project
 1. **Start the Server**:
    ```bash  
     npm start
    ```
 2. **Access the API**:

The backend API is available at https://to-do-task-backend-2kua.onrender.com.

**API Endpoints**
- Get All Tasks: GET /api/v1/get-all-task
- Add Task: POST /api/v1/add-task  

### Logs 
Task execution logs are stored in the database and can be fetched through appropriate endpoints.

### CORS
CORS is enabled to allow the frontend application to interact with the backend. Update CORS settings in server.js as needed for production.

### Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any changes.

## License
This project is licensed under the MIT License.

## Troubleshooting
- Database Connection: Ensure your MongoDB connection string is correct.
- Email Configuration: Verify your email credentials if reminders are not sent.
- CORS Issues: Ensure the frontend and backend URLs match CORS settings.
 
## Acknowledgments

Built with Node.js, Express, and MongoDB.
Uses node-cron for task scheduling and Nodemailer for email notifications.



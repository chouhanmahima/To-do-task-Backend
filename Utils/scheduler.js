const cron = require("node-cron");
const dotenv = require("dotenv");

const TaskModel = require("../Models/Task");
const sendEmail = require("./sendEmail");


dotenv.config();

const ScheduleTask = () => {
    // Schedule to run at 8pm (22)

    cron.schedule("* 20 * * *", async () => {
        console.log("Running Scheduled Task...");
        
        try {
             // Fetch all tasks that are incomplete
             const tasks = await TaskModel.find({ isCompleted: false });
            console.log("Tasks fetched:", tasks.length);  // Log number of tasks fetched

            tasks.forEach(async (task) => {
                const currentDate = new Date().toISOString().split("T")[0];
                console.log("Task Date:", task.taskDate, "Current Date:", currentDate);  // Log task date

                if (task.taskDate === currentDate) {
                    console.log(`Sending email for task: ${task.taskName}`);  // Log email intent

                        await sendEmail(
                            process.env.MAIL_RECEIVE,
                            `Reminder: ${task.taskName}`,
                            `Task: ${task.taskDescription}`
                        );
                        console.log(`Email sent successfully for task: ${task.taskName}`);   
                }
            }); 
        } catch (error) {
            console.error("Error fetching tasks or sending emails:", error.message);
        }
    });
}

module.exports = ScheduleTask;
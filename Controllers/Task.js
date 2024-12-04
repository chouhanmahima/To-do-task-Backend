
const TaskModel = require("../Models/Task")

// Add New Task
const addTask = async(req, res) => {
    try {

         // Extract task data from the request body
        const {taskName, taskDescription, taskDate} = req.body;
        console.log(taskName, taskDescription, taskDate);
        
        const newTask = new TaskModel({
            taskName,
            taskDescription,
            taskDate
        });

        // Save the new task to the database
        const saveTask = await newTask.save();

        res.status(201).json({
            success: true,
            message: "Task Created Successfully !",
            task: saveTask
        });

    } catch (error) {
       res.status(500).json({
        success: false,
        message: "Something went wrong !",
        error: error.message,
       }); 
    }
}

// Get All Task
const getAllTask = async(req, res)=> {
    try {
        const taskData = await TaskModel.find();

        res.status(200).json({
            success: true,
            message: "Fetch Task List Successfully !",
            data: taskData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !",
            error: error.message
        });
    }
}

const taskContainer = {
    addTask,
    getAllTask
}

module.exports = taskContainer;
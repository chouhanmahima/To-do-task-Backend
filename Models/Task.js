const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        require: true,
    },
    taskDescription: {
        type: String,
        require: true,
    },
    taskDate: {
        type: String,
        require: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const TaskModel = mongoose.model("taskLogs", taskSchema);

module.exports = TaskModel;
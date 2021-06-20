const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {
        type: String,
    },
    taskDetail: {
        type: String,
    },
    taskNotes: {
        type: String
    },
    dateDue: {
        type: Date,
    },
    taskStatus: {
        type: String
    }
},
    {
        timestamps: true
    })

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
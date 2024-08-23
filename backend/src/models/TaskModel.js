import  mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  status: {
    type: String,
    enum: ["open", "in_progress", "completed"],
    default: "open",
  },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const TaskModel = mongoose.model("Task", taskSchema);



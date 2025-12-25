import Task from "../models/Task.js";
import Member from "../models/Member.js";

// Assign a task (Admin only)
export const assignTask = async (req, res, next) => {
  try {
    const { title, description, assignedTo, dueDate } = req.body;
    
    const member = await Member.findById(assignedTo);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    const task = new Task({
      title,
      description,
      assignedTo,
      assignedBy: req.member._id,
      dueDate
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// Get tasks (Admin sees all, Member sees theirs)
export const getTasks = async (req, res, next) => {
  try {
    let query = {};
    if (req.member.role !== "Admin") {
      query.assignedTo = req.member._id;
    }

    const tasks = await Task.find(query)
      .populate("assignedTo", "name")
      .populate("assignedBy", "name")
      .sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// Update task status (Member can mark complete)
export const updateTaskStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Only assigned user or admin can update
    if (task.assignedTo.toString() !== req.member._id.toString() && req.member.role !== "Admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    task.status = status;
    if (status === "Completed") {
      task.completedAt = new Date();
      
      // Update member performance
      await Member.findByIdAndUpdate(task.assignedTo, {
        $inc: { "performance.tasksCompleted": 1 }
      });
    }

    await task.save();
    res.json(task);
  } catch (err) {
    next(err);
  }
};

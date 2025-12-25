import Report from "../models/Report.js";

// Create a new report (Staff only)
export const createReport = async (req, res, next) => {
  try {
    const { title, content, type } = req.body;
    const report = new Report({
      title,
      content,
      type,
      author: req.member._id
    });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    next(err);
  }
};

// Get all reports (Admin and Staff)
export const getAllReports = async (req, res, next) => {
  try {
    const reports = await Report.find()
      .populate("author", "name email role")
      .sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    next(err);
  }
};

// Get public reports (Members) - Maybe filter by type or status?
// For now, let's say members can see "Activity" and "General" reports
export const getPublicReports = async (req, res, next) => {
  try {
    const reports = await Report.find({ type: { $in: ["Activity", "General"] } })
      .populate("author", "name role")
      .sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    next(err);
  }
};

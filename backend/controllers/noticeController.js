import Notice from "../models/Notice.js";

// Create a new notice (Admin only)
export const createNotice = async (req, res, next) => {
  try {
    const { title, content, targetAudience } = req.body;
    const notice = new Notice({
      title,
      content,
      targetAudience,
      author: req.member._id
    });
    await notice.save();
    res.status(201).json(notice);
  } catch (err) {
    next(err);
  }
};

// Get all notices
export const getNotices = async (req, res, next) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 }).populate("author", "name");
    res.json(notices);
  } catch (err) {
    next(err);
  }
};

// Delete a notice (Admin only)
export const deleteNotice = async (req, res, next) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    res.json({ message: "Notice deleted successfully" });
  } catch (err) {
    next(err);
  }
};

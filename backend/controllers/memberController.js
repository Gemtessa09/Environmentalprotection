import Member from "../models/Member.js";

export const getMembers = async (_req, res, next) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    next(err);
  }
};

export const createMember = async (req, res, next) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    next(err);
  }
};

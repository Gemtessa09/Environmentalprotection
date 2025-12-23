import Club from "../models/Club.js";

export const getClubs = async (_req, res, next) => {
  try {
    const clubs = await Club.find().sort({ createdAt: -1 });
    res.json(clubs);
  } catch (err) {
    next(err);
  }
};

export const getFeaturedClubs = async (_req, res, next) => {
  try {
    const clubs = await Club.find({ featured: true }).limit(6);
    res.json(clubs);
  } catch (err) {
    next(err);
  }
};

export const getClub = async (req, res, next) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json(club);
  } catch (err) {
    next(err);
  }
};

export const createClub = async (req, res, next) => {
  try {
    const club = new Club(req.body);
    await club.save();
    res.status(201).json(club);
  } catch (err) {
    next(err);
  }
};

export const updateClub = async (req, res, next) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json(club);
  } catch (err) {
    next(err);
  }
};

export const deleteClub = async (req, res, next) => {
  try {
    const club = await Club.findByIdAndDelete(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json({ message: "Club deleted" });
  } catch (err) {
    next(err);
  }
};

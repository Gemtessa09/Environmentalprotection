import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { clubService } from "../services/clubService";

const ClubContext = createContext(null);

const fallbackFeatured = [
  {
    _id: "local-1",
    name: "Green Campus Initiative",
    description: "Tree planting, campus greening, and biodiversity-friendly spaces.",
    focusAreas: ["Reforestation", "Campus greening"],
    tags: ["Campus"],
    featured: true,
    events: [{ title: "Weekend Tree Planting" }],
  },
  {
    _id: "local-2",
    name: "Waste & Recycling Team",
    description: "Sorting, recycling drives, and reducing plastic use on campus.",
    focusAreas: ["Waste management", "Recycling"],
    tags: ["Waste"],
    featured: true,
    events: [{ title: "Plastic-Free Week" }],
  },
  {
    _id: "local-3",
    name: "Water Stewardship",
    description: "Conservation practices, water quality awareness, and clean-up activities.",
    focusAreas: ["Water conservation", "Awareness"],
    tags: ["Water"],
    featured: true,
    events: [{ title: "Water Saving Campaign" }],
  },
];

export const ClubProvider = ({ children }) => {
  const [featured, setFeatured] = useState([]);
  const [allClubs, setAllClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refreshFeatured = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await clubService.featured();
      setFeatured(Array.isArray(data) && data.length ? data : fallbackFeatured);
    } catch (e) {
      setFeatured(fallbackFeatured);
      setError("Could not load featured clubs. Showing sample data.");
    } finally {
      setLoading(false);
    }
  };

  const refreshAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await clubService.list();
      setAllClubs(Array.isArray(data) ? data : []);
    } catch (e) {
      setAllClubs([]);
      setError("Could not load clubs from the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshFeatured();
  }, []);

  const value = useMemo(
    () => ({
      featured,
      allClubs,
      loading,
      error,
      refreshFeatured,
      refreshAll,
      setError,
    }),
    [featured, allClubs, loading, error]
  );

  return <ClubContext.Provider value={value}>{children}</ClubContext.Provider>;
};

export const useClubs = () => {
  const ctx = useContext(ClubContext);
  if (!ctx) throw new Error("useClubs must be used within ClubProvider");
  return ctx;
};

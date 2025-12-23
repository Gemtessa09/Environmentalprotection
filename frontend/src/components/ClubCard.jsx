import React from "react";

const ClubCard = ({ club }) => {
  return (
    <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
      <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
        {club.tags?.[0] || "Initiative"}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-emerald-950">{club.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{club.description}</p>
      {club.focusAreas?.length ? (
        <p className="mt-3 text-sm text-slate-700">
          <span className="font-semibold text-emerald-900">Focus:</span> {club.focusAreas.join(", ")}
        </p>
      ) : null}
      {club.events?.length ? (
        <p className="mt-2 text-sm text-slate-700">
          <span className="font-semibold text-emerald-900">Upcoming:</span> {club.events[0].title}
        </p>
      ) : null}
    </div>
  );
};

export default ClubCard;

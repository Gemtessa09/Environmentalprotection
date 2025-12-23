import React from "react";

const Policies = () => {
  return (
    <div className="space-y-8">
      <header className="mt-6 rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          Policies
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl">
          Campus environmental policies
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          These are club-friendly policy ideas you can adapt with university leadership.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Policy
          title="Waste segregation"
          body="Clear bins, simple signage, and periodic waste audits to measure improvement."
        />
        <Policy
          title="Plastic reduction"
          body="Encourage refill stations, reusable bottles, and reduced single-use plastics at events."
        />
        <Policy
          title="Green events"
          body="Event guidelines: minimize waste, avoid disposable materials, and plan clean-up.
          "
        />
        <Policy
          title="Tree protection"
          body="Protect existing trees and plan planting with native species and long-term care.
          "
        />
      </section>
    </div>
  );
};

const Policy = ({ title, body }) => (
  <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
    <div className="text-base font-semibold text-emerald-950">{title}</div>
    <div className="mt-2 text-sm leading-relaxed text-slate-600">{body}</div>
  </div>
);

export default Policies;

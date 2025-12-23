import React from "react";

const Science = () => {
  return (
    <div className="space-y-8">
      <header className="mt-6 rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          Science
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl">
          Science for environmental protection
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          Our club promotes evidence-based decisions: from waste audits to biodiversity mapping and
          climate-aware campus practices.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card
          title="Biodiversity"
          body="Observe and document native species, protect habitats, and promote biodiversity-friendly spaces."
        />
        <Card
          title="Climate & Energy"
          body="Raise awareness on energy efficiency, clean energy, and climate resilience actions."
        />
        <Card
          title="Water & Soil"
          body="Support water conservation, soil health, and pollution prevention through practical initiatives."
        />
      </section>
    </div>
  );
};

const Card = ({ title, body }) => (
  <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
    <div className="text-base font-semibold text-emerald-950">{title}</div>
    <div className="mt-2 text-sm leading-relaxed text-slate-600">{body}</div>
  </div>
);

export default Science;

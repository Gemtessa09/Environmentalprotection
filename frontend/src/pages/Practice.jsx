import React from "react";

const Practice = () => {
  const tips = [
    { title: "Bring a reusable bottle", body: "Reduce plastic waste every day." },
    { title: "Sort your waste", body: "Make recycling easier and cleaner." },
    { title: "Walk or share rides", body: "Lower emissions and support healthy habits." },
    { title: "Save energy", body: "Turn off lights and devices when not needed." },
    { title: "Protect green spaces", body: "Respect campus trees and planted areas." },
    { title: "Volunteer monthly", body: "Join cleanups, planting days, and awareness campaigns." },
  ];

  return (
    <div className="space-y-8">
      <header className="mt-6 rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          Practice
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl">
          Everyday actions
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          Small habits add up. Practice these actions in dorms, classrooms, and campus life.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {tips.map((t) => (
          <div key={t.title} className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
            <div className="text-base font-semibold text-emerald-950">{t.title}</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">{t.body}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Practice;

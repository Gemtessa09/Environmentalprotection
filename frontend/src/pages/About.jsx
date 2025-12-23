import React from "react";

const About = ({ language }) => {
  const title = language === "am" ? "ስለ ክለቡ" : "About the Club";

  const purposes = [
    "Create awareness of environmental protection, conservation, preservation, and restoration.",
    "Provide students opportunities to learn, volunteer, and lead environmental activities.",
    "Promote environmental responsibility and develop social and life skills.",
    "Empower students to make measurable change on campus and in the community.",
    "Build a strong environmental ethic through consistent practice and teamwork.",
  ];

  return (
    <div className="space-y-8">
      <header className="mt-6 rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          Haramaya University
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          The Haramaya University Environmental Protection Club is a student-led community focused on
          protecting nature, improving campus sustainability, and supporting environmental education
          through practical action.
        </p>
      </header>

      <section className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm md:p-10">
        <h2 className="text-xl font-bold text-emerald-950">Mission</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          To raise awareness, mobilize volunteers, and implement initiatives that reduce environmental
          impact across the university and surrounding communities.
        </p>

        <h2 className="mt-8 text-xl font-bold text-emerald-950">Purpose</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {purposes.map((p) => (
            <li key={p} className="rounded-2xl border border-emerald-900/10 bg-emerald-50/40 p-4 text-sm text-slate-700">
              {p}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;

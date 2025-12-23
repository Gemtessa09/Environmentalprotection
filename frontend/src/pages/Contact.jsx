import React from "react";

const Contact = () => {
  return (
    <div className="space-y-8">
      <header className="mt-6 rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          Contact
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          Want to join, partner with us, or invite us for a workshop? Contact the club.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Card title="Email" body={<a className="font-semibold text-emerald-700 hover:text-emerald-800" href="mailto:environment@haramaya.edu">environment@haramaya.edu</a>} />
        <Card title="Location" body={<div>Main Campus, Student Center • Eco Hub Lab</div>} />
        <Card title="Office hours" body={<div>Mon–Fri • 9:00 AM – 5:00 PM</div>} />
        <Card title="Social" body={<div className="flex gap-4"><a className="text-emerald-700 hover:text-emerald-800" href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a><a className="text-emerald-700 hover:text-emerald-800" href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a></div>} />
      </section>
    </div>
  );
};

const Card = ({ title, body }) => (
  <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
    <div className="text-sm font-semibold text-emerald-950">{title}</div>
    <div className="mt-2 text-sm leading-relaxed text-slate-600">{body}</div>
  </div>
);

export default Contact;

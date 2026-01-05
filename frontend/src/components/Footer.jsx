import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-emerald-900/10 bg-emerald-950 text-emerald-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-3 place-items-center md:place-items-start">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/haramaya-logo.png"
              alt="Haramaya University logo"
              className="h-10 w-10 rounded-full border border-white/10 bg-white object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div>
              <div className="text-sm font-semibold text-emerald-200">Haramaya University</div>
              <div className="text-lg font-semibold">Environmental Law and Policy Center</div>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-emerald-100/90">
            Action, science, and policy for a resilient green campus.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-emerald-200">Connect</div>
          <div className="mt-3 grid gap-2 text-sm">
            <a className="hover:text-lime-300" href="mailto:environment@haramaya.edu">
              environment@haramaya.edu.et
            </a>
            <a className="hover:text-lime-300" href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="hover:text-lime-300" href="https://www.youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a className="hover:text-lime-300" href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-emerald-200">Visit</div>
          <div className="mt-3 grid gap-2 text-sm text-emerald-100/90">
            <div>Main Campus, Haramaya University</div>
            <div>Eco Hub Lab, Student Center</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-emerald-100/80 md:flex-row md:items-center md:justify-between items-center">
          <div>© {new Date().getFullYear()} Haramaya Environmental Law and Policy Center</div>
          <div>Developed by Gemtessa Deksisa || Software Engineer</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

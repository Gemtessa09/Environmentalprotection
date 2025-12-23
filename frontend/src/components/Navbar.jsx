import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const toggleMobileDropdown = (sectionKey) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const exploreItems = [
    { label: "Announcements", to: "/explore/announcements" },
    { label: "Biodiversity Sites", to: "/explore/biodiversity-sites" },
    { label: "Environmental Clubs", to: "/explore/environmental-clubs" },
    { label: "Wildlife Photographers", to: "/explore/wildlife-photographers" },
    { label: "Funding Opportunities", to: "/explore/funding-opportunities" },
    { label: "Latest News and Updates", to: "/explore/latest-news" },
  ];

  const practiceItems = [
    { label: "Stakeholders", to: "/practice/stakeholders" },
    { label: "Projects", to: "/practice/projects" },
  ];

  const policiesItems = [
    { label: "NBSAPs", to: "/policies/nbsaps" },
    { label: "Other Strategies", to: "/policies/other-strategies" },
    { label: "Biodiversity National Reports", to: "/policies/national-reports" },
    { label: "National Legislation", to: "/policies/national-legislation" },
    { label: "International Conventions", to: "/policies/international-conventions" },
  ];

  const scienceItems = [
    { label: "Biodiversity Overview", to: "/science/biodiversity-overview" },
    { label: "Biodiversity Conservation", to: "/science/biodiversity-conservation" },
    { label: "Ecosystems", to: "/science/ecosystems" },
    { label: "Publications", to: "/science/publications" },
  ];

  const aboutItems = [
    { label: "Haramaya University", to: "/about/haramaya-university" },
    { label: "Environment Quality Authority (EQA)", to: "/about/eqa" },
    { label: "National CHM", to: "/about/national-chm" },
  ];

  const memberItems = [
    { label: "Create Account", to: "/register" },
    { label: "Login", to: "/login" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-emerald-400/20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-green-600 backdrop-blur-lg shadow-2xl transform-gpu">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="group flex items-center gap-4 font-bold tracking-tight text-white transform transition-all duration-300 hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <div className="relative">
            <img
              src="/logo.jpg"
              alt="Haramaya University logo"
              className="h-12 w-12 rounded-full border-2 border-white/30 bg-white object-cover shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 blur transition-opacity duration-300 group-hover:opacity-30"></div>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-emerald-100 drop-shadow-sm">Haramaya University</div>
            <div className="text-lg bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent drop-shadow-sm">
              Environmental Protection Club
            </div>
          </div>
        </Link>

        <button
          className="inline-flex items-center rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:scale-105 md:hidden transform-gpu"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          type="button"
        >
          <span className="mr-2">Menu</span>
          <div className="flex flex-col w-4 h-4 justify-center items-center">
            <span className={`bg-white block transition-all duration-300 h-0.5 w-full rounded-sm ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block transition-all duration-300 h-0.5 w-full rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 h-0.5 w-full rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/">Home</NavLink>
          <DesktopDropdown label="About" to="/about" items={aboutItems} />
          <DesktopDropdown label="Explore" to="/explore" items={exploreItems} />
          <DesktopDropdown label="Practice" to="/practice" items={practiceItems} />
          <DesktopDropdown label="Policies" to="/policies" items={policiesItems} />
          <DesktopDropdown label="Science" to="/science" items={scienceItems} />
          <NavLink to="/contact">Contact</NavLink>
          <DesktopDropdown label="Become Member" to="/register" items={memberItems} />
        </nav>
      </div>

      {open ? (
        <div className="border-t border-white/20 bg-gradient-to-b from-emerald-50/95 to-white/95 backdrop-blur-md md:hidden shadow-inner">
          <div className="mx-auto grid max-w-6xl gap-2 px-4 py-4">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileSection label="About" to="/about" items={aboutItems} sectionKey="about" mobileDropdowns={mobileDropdowns} onToggle={toggleMobileDropdown} onNavigate={() => setOpen(false)} />
            <MobileSection label="Explore" to="/explore" items={exploreItems} sectionKey="explore" mobileDropdowns={mobileDropdowns} onToggle={toggleMobileDropdown} onNavigate={() => setOpen(false)} />
            <MobileSection label="Practice" to="/practice" items={practiceItems} sectionKey="practice" mobileDropdowns={mobileDropdowns} onToggle={toggleMobileDropdown} onNavigate={() => setOpen(false)} />
            <MobileSection label="Policies" to="/policies" items={policiesItems} sectionKey="policies" mobileDropdowns={mobileDropdowns} onToggle={toggleMobileDropdown} onNavigate={() => setOpen(false)} />
            <MobileSection label="Science" to="/science" items={scienceItems} sectionKey="science" mobileDropdowns={mobileDropdowns} onToggle={toggleMobileDropdown} onNavigate={() => setOpen(false)} />

            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <MobileSection label="Become Member" to="/register" items={memberItems} sectionKey="member" mobileDropdowns={mobileDropdowns} onToggle={toggleMobileDropdown} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </header>
  );
};

const NavLink = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`group relative rounded-2xl px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu overflow-hidden ${className}`}
  >
    <span className="relative z-10 drop-shadow-sm">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 transition-all duration-300 group-hover:from-emerald-500/20 group-hover:to-green-500/20 rounded-2xl"></div>
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-green-300 transition-all duration-300 group-hover:w-full"></div>
  </Link>
);

const DesktopDropdown = ({ label, to, items }) => (
  <div className="group relative">
    <Link
      to={to}
      className="group relative rounded-2xl px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu overflow-hidden"
    >
      <span className="relative z-10 drop-shadow-sm flex items-center gap-2">
        {label}
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 transition-all duration-300 group-hover:from-emerald-500/20 group-hover:to-green-500/20 rounded-2xl"></div>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-green-300 transition-all duration-300 group-hover:w-full"></div>
    </Link>

    <div className="invisible absolute left-1/2 top-full z-30 mt-3 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-3xl border-2 border-emerald-200/50 bg-white/95 backdrop-blur-xl p-3 opacity-0 shadow-2xl transform translate-y-2 scale-95 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100">
      <div className="absolute -top-2 left-1/2 w-4 h-4 bg-white/95 backdrop-blur-xl border-l-2 border-t-2 border-emerald-200/50 transform -translate-x-1/2 rotate-45"></div>
      <div className="grid gap-2">
        {items.map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className="group/item relative rounded-2xl px-4 py-3 text-sm font-semibold text-emerald-900 hover:text-white transition-all duration-300 hover:scale-105 transform-gpu overflow-hidden"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="relative z-10">{item.label}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 rounded-2xl"></div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const MobileLink = ({ to, children, onClick, className = "" }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`group relative rounded-2xl px-4 py-3 text-sm font-bold text-emerald-900 transition-all duration-300 hover:scale-105 transform-gpu overflow-hidden ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"></div>
  </Link>
);

const MobileSection = ({ label, to, items, sectionKey, mobileDropdowns, onToggle, onNavigate }) => {
  const isOpen = mobileDropdowns[sectionKey] || false;

  return (
    <div className="relative">
      <button
        onClick={() => onToggle(sectionKey)}
        className="w-full group relative rounded-2xl px-4 py-3 text-emerald-800 font-bold text-base transition-all duration-300 hover:scale-105 transform-gpu overflow-hidden flex items-center justify-between"
      >
        <span className="relative z-10">{label}</span>
        <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"></div>
      </button>

      {isOpen && (
        <div className="mt-2 rounded-3xl border-2 border-emerald-200/50 bg-white/95 backdrop-blur-xl p-3 shadow-2xl transform transition-all duration-300 animate-in slide-in-from-top-2">
          <div className="grid gap-2">
            <Link
              to={to}
              onClick={onNavigate}
              className="group/item relative rounded-2xl px-4 py-3 text-sm font-semibold text-emerald-900 hover:text-white transition-all duration-300 hover:scale-105 transform-gpu overflow-hidden"
            >
              <span className="relative z-10">Overview</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 rounded-2xl"></div>
            </Link>
            {items.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onNavigate}
                className="group/item relative rounded-2xl px-4 py-3 text-sm font-semibold text-emerald-900 hover:text-white transition-all duration-300 hover:scale-105 transform-gpu overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 rounded-2xl"></div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

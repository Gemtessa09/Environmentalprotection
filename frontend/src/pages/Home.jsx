import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThreeScene from "../components/ThreeScene";
import ClubCard from "../components/ClubCard";
import { useClubs } from "../context/ClubContext";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  const { featured, loading, error } = useClubs();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simple search routing based on keywords
      const query = searchQuery.toLowerCase();
      if (query.includes("biodiversity") || query.includes("species") || query.includes("conservation")) {
        navigate("/science/biodiversity-overview");
      } else if (query.includes("project") || query.includes("initiative")) {
        navigate("/practice/projects");
      } else if (query.includes("policy") || query.includes("law") || query.includes("legislation")) {
        navigate("/policies/national-legislation");
      } else if (query.includes("club") || query.includes("join") || query.includes("member")) {
        navigate("/explore/environmental-clubs");
      } else if (query.includes("news") || query.includes("announcement")) {
        navigate("/explore/latest-news");
      } else if (query.includes("funding") || query.includes("grant")) {
        navigate("/explore/funding-opportunities");
      } else {
        // Default to explore page
        navigate("/explore");
      }
    }
  };

  return (
    <div className="space-y-12">
      {/* Beautiful Search Bar */}
      <section className="mt-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 p-8 shadow-2xl md:p-12">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
              🌿 {t('protectNature')}
            </h1>
            <p className="mt-4 text-lg text-emerald-100 md:text-xl">
              {t('homeSubtitle')}
            </p>

            {/* Enhanced Search Form */}
            <form onSubmit={handleSearch} className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  className="w-full rounded-2xl border-0 bg-white/95 backdrop-blur-sm px-6 py-4 pr-20 text-lg shadow-lg placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 rounded-xl bg-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 transition-colors duration-200"
                >
                  🔍 {t('searchButton')}
                </button>
              </div>
            </form>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <QuickLink to="/explore" icon="🌍" text={t('explore')} />
              <QuickLink to="/science" icon="🔬" text={t('science')} />
              <QuickLink to="/practice" icon="🌱" text={t('practice')} />
              <QuickLink to="/policies" icon="📋" text={t('policies')} />
              <QuickLink to="/about" icon="ℹ️" text={t('about')} />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-r from-white to-emerald-50/30 shadow-xl">
        <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              <img
                src="/haramaya-logo.png"
                alt="Haramaya University logo"
                className="h-5 w-5 rounded-full border border-emerald-900/10 bg-white object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              Haramaya University • Environmental Club
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 md:text-4xl lg:text-5xl">
              {t('protectNature')}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
              {t('homeSubtitle')}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/explore"
                className="group inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('exploreInitiatives')}
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-emerald-600 bg-white px-8 py-4 text-base font-semibold text-emerald-600 shadow-lg hover:bg-emerald-50 hover:shadow-xl transition-all duration-300"
              >
                {t('joinClub')}
              </Link>
            </div>

            {error && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                {error}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="relative">
              <ThreeScene />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-xl">
                <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Live 3D Scene</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Stat label="Trees Planted" value="1,200+" icon="🌳" />
              <Stat label="Cleanups" value="45+" icon="🧹" />
              <Stat label="Active Members" value="250+" icon="👥" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-emerald-950 md:text-3xl">{t('featuredInitiatives')}</h2>
            <p className="mt-2 text-slate-600">{t('discoverLatest')}</p>
          </div>
          <Link
            className="group inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
            to="/explore"
          >
            View all
            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {loading && !featured.length ? (
          <div className="mt-4 rounded-2xl border border-emerald-900/10 bg-white p-8 text-center">
            <div className="animate-pulse">
              <div className="h-4 bg-emerald-200 rounded w-1/4 mx-auto mb-4"></div>
              <div className="h-4 bg-emerald-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((club) => (
              <div key={club._id} className="transform hover:scale-105 transition-transform duration-300">
                <ClubCard club={club} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* What We Do */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-emerald-950 md:text-3xl">{t('whatWeDo')}</h2>
          <p className="mt-2 text-slate-600">Our core activities for environmental protection and education</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Feature
            icon="🌳"
            title="Campus Greening"
            body="Tree planting, native plants, and biodiversity-friendly spaces around the campus."
            color="from-green-500 to-emerald-600"
          />
          <Feature
            icon="♻️"
            title="Waste Reduction"
            body="Awareness, sorting systems, clean-up events, and better recycling habits."
            color="from-blue-500 to-cyan-600"
          />
          <Feature
            icon="📚"
            title="Environmental Education"
            body="Workshops, research talks, and student-led campaigns that turn knowledge into action."
            color="from-purple-500 to-indigo-600"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-center text-white shadow-2xl md:p-12">
        <h2 className="text-2xl font-bold md:text-3xl">Ready to Make a Difference?</h2>
        <p className="mt-4 text-lg text-emerald-100">
          Join our community of environmental champions at Haramaya University
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-emerald-700 shadow-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
          >
            Join the Club Today
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-white/10 transition-all duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

const QuickLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-2 rounded-xl bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-white/30 transition-all duration-200 hover:scale-105"
  >
    <span>{icon}</span>
    {text}
  </Link>
);

const Stat = ({ label, value, icon }) => (
  <div className="rounded-2xl border border-emerald-900/10 bg-white p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-2xl mb-1">{icon}</div>
    <div className="text-xl font-extrabold text-emerald-950">{value}</div>
    <div className="mt-1 text-xs font-semibold text-slate-600">{label}</div>
  </div>
);

const Feature = ({ icon, title, body, color }) => (
  <div className="group rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${color} text-2xl text-white shadow-lg`}>
      {icon}
    </div>
    <div className="mt-4 text-lg font-semibold text-emerald-950">{title}</div>
    <div className="mt-2 text-sm leading-relaxed text-slate-600">{body}</div>
  </div>
);

export default Home;

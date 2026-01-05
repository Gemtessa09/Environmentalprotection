import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThreeScene from "../components/ThreeScene";
import ClubCard from "../components/ClubCard";
import TiltCard from "../components/TiltCard";
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
      {/* Beautiful Search Bar with Hero Image */}
      <section className="mt-6">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl md:p-20 p-8 group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/haramayauniversityphoto2.jpg" 
              alt="Haramaya University" 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1501854140884-074bf6b24363?auto=format&fit=crop&w=1600&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-emerald-900/80"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="mb-6 flex justify-center">
               <img 
                 src="/hulcsalogo.jpg" 
                 alt="Logo" 
                 className="h-24 w-24 rounded-full border-4 border-white/30 shadow-2xl object-cover"
                 onError={(e) => e.target.style.display = 'none'}
               />
            </div>
            <h1 className="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
              🌿 {t('protectNature')}
            </h1>
            <p className="mt-4 text-lg text-emerald-100 md:text-xl drop-shadow-lg font-medium">
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
      <section className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-white via-emerald-50 to-cyan-50 shadow-xl">
        <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <img
                src="/hulcsalogo.jpg"
                alt="EPC Logo"
                className="h-16 w-16 rounded-full border-2 border-emerald-100 shadow-md object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                HU • Environmental Law and Policy Center
              </div>
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
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-emerald-600 bg-emerald-50 px-8 py-4 text-base font-semibold text-emerald-700 shadow-lg hover:bg-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                Login
              </Link>
            </div>

            {error && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                {error}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img 
                src="/haramayauniversityphoto3.jpg" 
                alt="Haramaya University Campus" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-semibold text-white/90 uppercase tracking-wide bg-black/30 backdrop-blur-sm inline-block px-3 py-1 rounded-full border border-white/20">
                  {t('live3dScene')}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Stat label={t('treesPlanted')} value="1,200+" icon="🌳" />
              <Stat label={t('cleanups')} value="45+" icon="🧹" />
              <Stat label={t('activeMembers')} value="250+" icon="👥" />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Awareness Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8 text-white shadow-2xl md:p-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  🌍 {t('environmentalAwarenessTitle')}
                </h2>
                <p className="mt-4 text-lg text-green-100 md:text-xl">
                  {t('environmentalAwarenessSubtitle')}
                </p>
              </div>
              <p className="text-base leading-relaxed text-green-50 md:text-lg">
                {t('environmentalAwarenessDesc')}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-lg hover:bg-green-50 transition-all duration-300 hover:scale-105"
                >
                  {t('learnAboutProtection')}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-white/10 transition-all duration-300"
                >
                  {t('contactUs')}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src="/haramayauniversityphoto2.jpg" 
                    alt="Haramaya University Environment" 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -top-4 -right-4 rounded-full bg-yellow-400 p-3 shadow-lg">
                  <span className="text-2xl">☀️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-full bg-blue-400 p-3 shadow-lg">
                  <span className="text-2xl">💧</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Photo Gallery */}
      <section className="space-y-8">
        <div className="text-center bg-gradient-to-r from-sky-600 to-indigo-600 p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl drop-shadow-md">
            📸 Environmental Protection in Action
          </h2>
          <p className="mt-4 text-lg text-white md:text-xl drop-shadow-md">
            Witness the beauty of nature and our commitment to protecting it across Ethiopia and the world.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Tree Planting */}
          <TiltCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-emerald-200 p-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" 
              alt="Tree Planting" 
              className="aspect-square w-full object-cover rounded-xl mb-4 shadow-md" 
            />
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">{t('treePlanting')}</h3>
            <p className="text-sm text-emerald-700">{t('treePlantingDesc')}</p>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </TiltCard>

          {/* Wildlife Conservation */}
          <TiltCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-200 p-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80" 
              alt="Wildlife Conservation" 
              className="aspect-square w-full object-cover rounded-xl mb-4 shadow-md" 
            />
            <h3 className="text-xl font-semibold text-cyan-900 mb-2">{t('wildlifeConservation')}</h3>
            <p className="text-sm text-cyan-700">{t('wildlifeConservationDesc')}</p>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </TiltCard>

          {/* Clean Water */}
          <TiltCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 p-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=800&q=80" 
              alt="Clean Water" 
              className="aspect-square w-full object-cover rounded-xl mb-4 shadow-md" 
            />
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">{t('cleanWater')}</h3>
            <p className="text-sm text-indigo-700">{t('cleanWaterDesc')}</p>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </TiltCard>

          {/* Sustainable Farming */}
          <TiltCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-200 p-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" 
              alt="Sustainable Farming" 
              className="aspect-square w-full object-cover rounded-xl mb-4 shadow-md" 
            />
            <h3 className="text-xl font-semibold text-orange-900 mb-2">{t('sustainableFarming')}</h3>
            <p className="text-sm text-orange-700">{t('sustainableFarmingDesc')}</p>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </TiltCard>

          {/* Waste Management */}
          <TiltCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-slate-200 p-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80" 
              alt="Waste Management" 
              className="aspect-square w-full object-cover rounded-xl mb-4 shadow-md" 
            />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('wasteManagement')}</h3>
            <p className="text-sm text-slate-700">{t('wasteManagementDesc')}</p>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </TiltCard>

          {/* Climate Action */}
          <TiltCard className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-100 to-pink-200 p-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" 
              alt="Climate Action" 
              className="aspect-square w-full object-cover rounded-xl mb-4 shadow-md" 
            />
            <h3 className="text-xl font-semibold text-pink-900 mb-2">{t('climateAction')}</h3>
            <p className="text-sm text-pink-700">{t('climateActionDesc')}</p>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </TiltCard>
        </div>

        <div className="text-center">
          <Link
            to="/explore"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
          >
            {t('exploreInitiatives')}
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="space-y-6">
        <div className="text-center bg-gradient-to-r from-sky-600 to-indigo-600 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl drop-shadow-md">Featured Initiatives</h2>
          <p className="mt-2 text-white drop-shadow-md">Discover our latest environmental initiatives and projects</p>
          <div className="mt-4">
            <Link
              className="group inline-flex items-center text-sm font-semibold text-white hover:text-emerald-100 transition-colors"
              to="/explore"
            >
              {t('viewAll')}
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
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
        <div className="text-center bg-gradient-to-r from-sky-600 to-indigo-600 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl drop-shadow-md">{t('whatWeDo')}</h2>
          <p className="mt-2 text-white drop-shadow-md">Our core activities for environmental protection and education</p>
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
      <section className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 text-center text-white shadow-2xl md:p-12">
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

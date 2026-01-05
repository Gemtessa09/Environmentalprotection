import React from "react";
import { Link } from "react-router-dom";

const ExploreIndex = () => {
  const items = [
    {
      title: "Announcements",
      to: "/explore/announcements",
      body: "Official notices, calls for volunteers, and upcoming activities.",
      icon: "📢",
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200/50"
    },
    {
      title: "Biodiversity Sites",
      to: "/explore/biodiversity-sites",
      body: "Key habitats and sites of ecological importance in and around Haramaya.",
      icon: "🌿",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200/50"
    },
    {
      title: "Environmental Clubs",
      to: "/explore/environmental-clubs",
      body: "What environmental clubs are and how students can participate.",
      icon: "🌱",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200/50"
    },
    {
      title: "Wildlife Photographers",
      to: "/explore/wildlife-photographers",
      body: "Student and community photography that documents biodiversity.",
      icon: "📸",
      color: "from-fuchsia-600 to-pink-600",
      bgColor: "from-fuchsia-50 to-pink-50",
      borderColor: "border-fuchsia-200/50"
    },
    {
      title: "Funding Opportunities",
      to: "/explore/funding-opportunities",
      body: "Grants, scholarships, and small funds for environmental initiatives.",
      icon: "💰",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200/50"
    },
    {
      title: "Latest News and Updates",
      to: "/explore/latest-news",
      body: "Recent updates, highlights, and success stories.",
      icon: "📰",
      color: "from-rose-600 to-red-600",
      bgColor: "from-rose-50 to-red-50",
      borderColor: "border-rose-200/50"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-16 shadow-2xl transform-gpu">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 text-sm font-bold text-white shadow-lg mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
              Explore Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Explore
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Biodiversity & Action
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Browse announcements, biodiversity sites, environmental clubs, and more. Discover opportunities
              to engage with Ethiopia's environmental community and conservation efforts.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.05] hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-emerald-950 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors duration-300">
                  {item.body}
                </p>

                {/* CTA Button */}
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r ${item.bgColor} border ${item.borderColor} group-hover:shadow-lg transition-all duration-300`}>
                  <span className="font-bold text-emerald-950">Explore</span>
                  <svg className="w-4 h-4 text-emerald-950 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
            </Link>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-white drop-shadow-lg">Discover & Engage</h2>
            </div>

            <p className="text-lg md:text-xl text-emerald-100 drop-shadow-lg max-w-4xl mx-auto leading-relaxed">
              Explore the rich biodiversity of Haramaya University and surrounding areas. Connect with environmental
              clubs, discover funding opportunities, and stay updated with the latest conservation news and initiatives.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Biodiversity Focus</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Community Action</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Student Engagement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-black text-emerald-950 mb-4">Start Exploring</h3>
            <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
              Dive into Haramaya's environmental landscape and discover how you can contribute to conservation efforts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Browse All Topics
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Join a Club
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreIndex;

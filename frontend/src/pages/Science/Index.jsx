import React from "react";
import { Link } from "react-router-dom";

const ScienceIndex = () => {
  const scienceTopics = [
    {
      title: "Biodiversity Overview",
      to: "/science/biodiversity-overview",
      body: "What biodiversity is and why it matters.",
      icon: "🦋",
      color: "from-purple-500 to-indigo-500",
      description: "Explore the incredible variety of life on Earth and understand its fundamental importance for human survival and well-being."
    },
    {
      title: "Biodiversity Conservation",
      to: "/science/biodiversity-conservation",
      body: "How conservation works in practice.",
      icon: "🛡️",
      color: "from-green-500 to-emerald-500",
      description: "Learn about practical approaches to protecting and restoring biodiversity through science-based conservation strategies."
    },
    {
      title: "Ecosystems",
      to: "/science/ecosystems",
      body: "Understanding ecosystems and services they provide.",
      icon: "🌍",
      color: "from-blue-500 to-cyan-500",
      description: "Discover how ecosystems function and the vital services they provide to humanity and the planet."
    },
    {
      title: "Publications",
      to: "/science/publications",
      body: "Reports and learning resources.",
      icon: "📚",
      color: "from-amber-500 to-orange-500",
      description: "Access scientific reports, research papers, and educational resources on biodiversity and conservation."
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
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Science Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Scientific
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Knowledge Base
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Background information to support learning and evidence-based action.
              Explore the science behind biodiversity conservation and ecosystem management.
            </p>
          </div>
        </div>

        {/* Science Topics Grid */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Explore Scientific Topics</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Dive deep into the science of biodiversity and conservation with our comprehensive learning resources.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {scienceTopics.map((topic, index) => (
              <Link
                key={topic.to}
                to={topic.to}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${topic.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{topic.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                      {topic.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {topic.description}
                  </p>

                  {/* Call to Action */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors duration-300">
                      Explore Topic →
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Learning Journey Section */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Start Your Learning Journey</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Begin with the Biodiversity Overview to build your foundation, then explore conservation practices and ecosystem services.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/science/biodiversity-overview"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start with Overview
              </Link>
              <Link
                to="/science/publications"
                className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Browse Publications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceIndex;

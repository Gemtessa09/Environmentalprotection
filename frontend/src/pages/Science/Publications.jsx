import React from "react";

const Publications = () => {
  const publicationTypes = [
    {
      title: "Scientific Literature",
      icon: "📚",
      color: "from-blue-500 to-indigo-500",
      description: "Peer-reviewed research papers and articles on biodiversity topics",
      items: [
        "Ecology and conservation biology papers",
        "Environmental science research",
        "Evidence-based biodiversity insights",
        "Academic journal publications"
      ]
    },
    {
      title: "Policy Documents",
      icon: "📋",
      color: "from-purple-500 to-pink-500",
      description: "Official documents and strategies for biodiversity conservation",
      items: [
        "National Biodiversity Strategy and Action Plans",
        "Environmental Impact Assessment guidelines",
        "Protected areas management plans",
        "Climate change adaptation strategies"
      ]
    },
    {
      title: "Educational Materials",
      icon: "🎓",
      color: "from-green-500 to-emerald-500",
      description: "Learning resources for environmental education and awareness",
      items: [
        "Curriculum guides for environmental education",
        "Training manuals for conservation practitioners",
        "Public awareness campaign materials",
        "Interactive learning tools and apps"
      ]
    }
  ];

  const keyResources = [
    {
      title: "Manuals and Guides",
      icon: "📖",
      color: "from-amber-500 to-orange-500",
      description: "Practical guides for school and university environmental clubs and activities",
      features: ["Step-by-step activity guides", "Club management templates", "Environmental monitoring protocols", "Community engagement strategies"]
    },
    {
      title: "Reports",
      icon: "📊",
      color: "from-red-500 to-pink-500",
      description: "Institutional reports, biodiversity assessments, and monitoring summaries",
      features: ["Biodiversity status reports", "Environmental impact assessments", "Conservation monitoring data", "Policy implementation reviews"]
    },
    {
      title: "Learning Resources",
      icon: "🎯",
      color: "from-cyan-500 to-blue-500",
      description: "Reading lists, short explainers, and presentations for awareness sessions",
      features: ["Curated reading lists", "Infographic explainers", "Presentation templates", "Video learning modules"]
    }
  ];

  const featuredPublications = [
    {
      title: "IPBES Global Assessment Report",
      type: "Global Report",
      year: "2019",
      description: "Comprehensive assessment of biodiversity and ecosystem services",
      icon: "🌍"
    },
    {
      title: "Living Planet Report",
      type: "Annual Report",
      year: "2022",
      description: "WWF's flagship publication on the state of the planet's biodiversity",
      icon: "🪐"
    },
    {
      title: "Convention on Biological Diversity",
      type: "International Agreement",
      year: "1992",
      description: "Global framework for biodiversity conservation and sustainable use",
      icon: "🤝"
    }
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Science Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Scientific
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Publications
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Access scientific literature, reports, and educational materials on biodiversity and conservation.
              Discover evidence-based insights and practical resources for environmental research and learning.
            </p>
          </div>
        </div>

        {/* Featured Publications */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Featured Publications</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Key global reports and agreements shaping biodiversity conservation worldwide.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredPublications.map((pub, index) => (
              <div
                key={pub.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{pub.icon}</span>
                  </div>

                  <h3 className="text-lg font-black text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {pub.title}
                  </h3>

                  <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 mb-3">
                    {pub.type} • {pub.year}
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm group-hover:text-slate-800 transition-colors duration-300">
                    {pub.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Types */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Publication Categories</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Explore different types of publications and resources available for biodiversity research and education.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {publicationTypes.map((type, index) => (
              <div
                key={type.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${type.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{type.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                      {type.title}
                    </h3>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors duration-300">
                    {type.description}
                  </p>

                  <div>
                    <div className="text-sm font-bold text-emerald-900 mb-3">Includes:</div>
                    <ul className="space-y-2">
                      {type.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Resources */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Key Resources</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-3xl mx-auto">
                Access important biodiversity-related publications from international organizations, national institutions, and research centers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {keyResources.map((resource, index) => (
                <div
                  key={resource.title}
                  className="group/item text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${resource.color} shadow-lg mb-4 group-hover/item:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{resource.icon}</span>
                  </div>
                  <div className="text-lg font-bold text-white drop-shadow-lg mb-3">{resource.title}</div>
                  <div className="text-emerald-100 drop-shadow text-sm mb-4">{resource.description}</div>
                  <ul className="space-y-1 text-left">
                    {resource.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-emerald-100 drop-shadow">
                        <span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-emerald-300"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Access Resources</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Download publications, reports, and educational materials to support your biodiversity research and conservation efforts.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Browse Publications
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Request Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;

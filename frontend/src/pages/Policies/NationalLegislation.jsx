import React from "react";

const NationalLegislation = () => {
  const legislation = [
    {
      title: "Environmental Policy of Ethiopia (1997)",
      description: "Foundational policy framework for environmental management and sustainable development.",
      keyProvisions: ["Sustainable development principles", "Environmental impact assessment", "Pollution control", "Natural resource conservation"],
      relevance: "Sets overall direction for environmental protection",
      icon: "📋",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "Conservation Strategy of Ethiopia (1997)",
      description: "Comprehensive strategy for biodiversity conservation and sustainable use of natural resources.",
      keyProvisions: ["Protected area management", "Biodiversity conservation", "Sustainable resource use", "Community participation"],
      relevance: "Provides framework for biodiversity protection",
      icon: "🛡️",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      title: "Environmental Impact Assessment Proclamation (2002)",
      description: "Requires environmental assessment for development projects that may impact the environment.",
      keyProvisions: ["EIA requirements", "Environmental management plans", "Public consultation", "Monitoring and compliance"],
      relevance: "Ensures development considers environmental impacts",
      icon: "📊",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      title: "Forest Development, Conservation and Utilization Proclamation (2007)",
      description: "Regulates forest management, conservation, and sustainable utilization.",
      keyProvisions: ["Forest protection", "Sustainable harvesting", "Community forestry", "Forest crime prevention"],
      relevance: "Protects forest ecosystems and biodiversity",
      icon: "🌲",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      title: "Wildlife Development and Conservation Authority Establishment Proclamation (2008)",
      description: "Establishes EWCA and regulates wildlife conservation and management.",
      keyProvisions: ["Protected species", "Hunting regulations", "Anti-poaching measures", "Wildlife tourism"],
      relevance: "Directly protects wildlife and habitats",
      icon: "🦁",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      title: "Climate Resilient Green Economy Strategy (2011)",
      description: "National strategy for green economic growth and climate resilience.",
      keyProvisions: ["Renewable energy", "Climate-smart agriculture", "Reforestation", "Green industrial development"],
      relevance: "Integrates climate action with biodiversity conservation",
      icon: "🌱",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50"
    },
  ];

  const recentLaws = [
    {
      title: "Environmental Pollution Control Proclamation (2020)",
      focus: "Strengthens pollution control and environmental quality standards",
      icon: "🏭",
      color: "from-slate-500 to-gray-500"
    },
    {
      title: "Solid Waste Management Proclamation (2021)",
      focus: "Comprehensive waste management and circular economy principles",
      icon: "♻️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Wetlands Management Proclamation (2021)",
      focus: "Protection and sustainable management of wetland ecosystems",
      icon: "🏞️",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const institutions = [
    {
      title: "Ministry of Environment, Forest & Climate Change",
      responsibilities: [
        "Overall environmental policy coordination",
        "Climate change and forestry management",
        "Environmental impact assessment oversight",
        "International environmental agreements"
      ],
      icon: "🏛️",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Ethiopian Wildlife Conservation Authority (EWCA)",
      responsibilities: [
        "Wildlife conservation and management",
        "Protected area administration",
        "Biodiversity monitoring and research",
        "Anti-poaching and law enforcement"
      ],
      icon: "🦁",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const challenges = [
    {
      title: "Capacity Building",
      description: "Need for trained environmental professionals",
      icon: "👥",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Enforcement",
      description: "Strengthening law enforcement and compliance",
      icon: "⚖️",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Coordination",
      description: "Better inter-agency coordination",
      icon: "🤝",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const involvementAreas = [
    {
      title: "Legal Research",
      icon: "🔬",
      color: "from-blue-500 to-indigo-500",
      items: [
        "Analyze law effectiveness",
        "Identify implementation gaps",
        "Research comparative approaches",
        "Develop policy recommendations"
      ]
    },
    {
      title: "Community Education",
      icon: "📚",
      color: "from-emerald-500 to-green-500",
      items: [
        "Raise awareness of environmental laws",
        "Support community compliance",
        "Monitor environmental violations",
        "Advocate for stronger protections"
      ]
    }
  ];

  const accessResources = [
    { name: "Federal Negarit Gazette", description: "Official legal publications", icon: "📜" },
    { name: "Ministry of Environment Website", description: "Environmental policy resources", icon: "🌐" },
    { name: "EWCA Resources", description: "Wildlife conservation laws", icon: "🦁" },
    { name: "University Libraries", description: "Law libraries and environmental departments", icon: "📚" }
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
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Policies Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Ethiopia's
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Environmental Legislation
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Ethiopia has developed a comprehensive legal framework for environmental protection and sustainable development.
              These laws provide the foundation for biodiversity conservation and environmental management.
            </p>
          </div>
        </div>

        {/* Legislation Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {legislation.map((law, index) => (
            <div
              key={law.title}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${law.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

              <div className="relative z-10">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${law.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{law.icon}</span>
                  </div>
                  <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                    {law.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  {law.description}
                </p>

                {/* Key Provisions */}
                <div className="mb-4">
                  <div className="text-sm font-bold text-emerald-900 mb-2">Key Provisions:</div>
                  <ul className="space-y-1">
                    {law.keyProvisions.map((provision, idx) => (
                      <li key={idx} className={`flex items-start gap-2 rounded-lg bg-gradient-to-r ${law.bgColor} border border-emerald-200/30 px-3 py-2 text-xs text-slate-700`}>
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                        {provision}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Biodiversity Relevance */}
                <div>
                  <div className="text-sm font-bold text-emerald-900 mb-2">Biodiversity Relevance:</div>
                  <p className="text-sm text-slate-700 leading-relaxed">{law.relevance}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Recent Environmental Legislation */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Recent Environmental Legislation</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            New laws strengthening Ethiopia's environmental protection framework.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {recentLaws.map((law, index) => (
              <div
                key={law.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.05] hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${law.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${law.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{law.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-3">{law.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{law.focus}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Framework */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Institutional Framework</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-2xl mx-auto">
                Key institutions responsible for implementing environmental legislation in Ethiopia.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {institutions.map((institution, index) => (
                <div
                  key={institution.title}
                  className="group/item relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${institution.color} shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
                      <span className="text-xl">{institution.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{institution.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {institution.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-emerald-100 drop-shadow">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation Challenges */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Implementation Challenges</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Key challenges in effectively implementing environmental legislation.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.05] hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${challenge.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${challenge.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{challenge.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-3">{challenge.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{challenge.description}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Involvement Opportunities */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Student Involvement Opportunities</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            How students can contribute to environmental law implementation and improvement.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {involvementAreas.map((area, index) => (
              <div
                key={area.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${area.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{area.icon}</span>
                    </div>
                    <h3 className="text-2xl font-black text-emerald-950">{area.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Access to Legislation */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Access to Legislation</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Environmental laws and regulations are available through official and academic sources.
            </p>

            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              {accessResources.map((resource, index) => (
                <div
                  key={resource.name}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white to-slate-50 border border-slate-200/50 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">{resource.icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-emerald-950">{resource.name}</div>
                    <div className="text-sm text-slate-700">{resource.description}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View Full Legislation
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Legal Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalLegislation;

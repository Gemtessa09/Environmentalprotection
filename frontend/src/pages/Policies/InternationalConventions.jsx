import React from "react";

const InternationalConventions = () => {
  const conventions = [
    {
      title: "CBD",
      fullName: "Convention on Biological Diversity",
      year: "1992",
      body: "Global framework for biodiversity conservation, sustainable use, and fair sharing of benefits. Ethiopia ratified in 1994.",
      ethiopiaFocus: ["NBSAP development", "Protected area expansion", "Biodiversity mainstreaming", "Aichi Targets implementation"],
      keyTargets: ["Aichi Biodiversity Targets (2011-2020)", "Post-2020 Global Biodiversity Framework"],
      icon: "🌿",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "CITES",
      fullName: "Convention on International Trade in Endangered Species",
      year: "1973",
      body: "Regulates international trade in endangered species. Ethiopia acceded in 2003.",
      ethiopiaFocus: ["Wildlife trade regulation", "Anti-poaching measures", "CITES-listed species protection", "Border control enhancement"],
      keyTargets: ["Preventing over-exploitation", "Sustainable wildlife trade", "Species recovery"],
      icon: "🦁",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      title: "Ramsar",
      fullName: "Convention on Wetlands of International Importance",
      year: "1971",
      body: "Conservation and wise use of wetlands. Ethiopia joined in 2005.",
      ethiopiaFocus: ["Wetland designation", "Rift Valley lakes protection", "Wetland restoration", "WISE system participation"],
      keyTargets: ["Wetland conservation", "Wise use principles", "International cooperation"],
      icon: "🏞️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "UNFCCC",
      fullName: "United Nations Framework Convention on Climate Change",
      year: "1992",
      body: "Climate change mitigation and adaptation with strong links to ecosystems. Ethiopia ratified in 1994.",
      ethiopiaFocus: ["CRGE Strategy", "Nationally Determined Contributions", "Climate adaptation", "REDD+ participation"],
      keyTargets: ["Paris Agreement commitments", "Greenhouse gas reduction", "Climate resilience"],
      icon: "🌡️",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      title: "UNCCD",
      fullName: "United Nations Convention to Combat Desertification",
      year: "1994",
      body: "Combat desertification and land degradation. Ethiopia ratified in 1997.",
      ethiopiaFocus: ["Sustainable Land Management Program", "SLM technologies", "Community-based restoration", "Monitoring systems"],
      keyTargets: ["Land degradation neutrality", "Sustainable land management", "Drought resilience"],
      icon: "🏜️",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50"
    },
    {
      title: "CMS",
      fullName: "Convention on the Conservation of Migratory Species",
      year: "1979",
      body: "Conservation of migratory species. Ethiopia joined in 2009.",
      ethiopiaFocus: ["Migratory bird protection", "Flyway conservation", "Species action plans", "Regional cooperation"],
      keyTargets: ["Migratory species protection", "Habitat conservation", "International coordination"],
      icon: "🦅",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
  ];

  const achievements = [
    {
      number: "23",
      label: "National Parks (CBD target)",
      icon: "🏞️",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "350M+",
      label: "Trees planted (CRGE)",
      icon: "🌳",
      color: "from-emerald-500 to-teal-500"
    },
    {
      number: "8",
      label: "Ramsar sites designated",
      icon: "💧",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const conventionBodies = [
    {
      title: "Conference of the Parties (COP)",
      description: "Regular meetings where countries review progress and set new targets",
      icon: "🏛️",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Subsidiary Bodies",
      description: "Technical committees that provide scientific and technical advice",
      icon: "🔬",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Secretariats",
      description: "Administrative bodies that support implementation and coordination",
      icon: "📋",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const involvementAreas = [
    {
      title: "Research & Monitoring",
      icon: "🔬",
      color: "from-blue-500 to-indigo-500",
      items: [
        "Track convention implementation",
        "Monitor national reporting progress",
        "Assess policy integration",
        "Evaluate environmental outcomes"
      ]
    },
    {
      title: "Awareness & Advocacy",
      icon: "📢",
      color: "from-emerald-500 to-green-500",
      items: [
        "Educate about international commitments",
        "Advocate for stronger implementation",
        "Participate in global youth networks",
        "Support citizen monitoring"
      ]
    }
  ];

  const resources = [
    { name: "Convention on Biological Diversity", url: "cbd.int", icon: "🌿" },
    { name: "CITES", url: "cites.org", icon: "🦁" },
    { name: "Ramsar Convention", url: "ramsar.org", icon: "🏞️" },
    { name: "UNFCCC", url: "unfccc.int", icon: "🌡️" },
    { name: "UNCCD", url: "unccd.int", icon: "🏜️" },
    { name: "Ethiopian Ministry of Environment", url: "website", icon: "🏛️" }
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
              International
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Environmental Conventions
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Ethiopia is party to several international environmental conventions that guide national biodiversity policy and action.
              These agreements provide frameworks for global cooperation on environmental protection.
            </p>
          </div>
        </div>

        {/* International Conventions Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {conventions.map((conv, index) => (
            <div
              key={conv.title}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${conv.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

              <div className="relative z-10">
                {/* Header with Icon and Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${conv.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{conv.icon}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-emerald-950">{conv.title}</div>
                    <div className="text-xs text-emerald-600">{conv.year}</div>
                  </div>
                </div>

                {/* Full Name */}
                <h3 className="text-lg font-black text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {conv.fullName}
                </h3>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  {conv.body}
                </p>

                {/* Ethiopia's Focus */}
                <div className="mb-4">
                  <div className="text-sm font-bold text-emerald-900 mb-2">Ethiopia's Focus:</div>
                  <ul className="space-y-1">
                    {conv.ethiopiaFocus.slice(0, 3).map((focus, idx) => (
                      <li key={idx} className={`flex items-start gap-2 rounded-lg bg-gradient-to-r ${conv.bgColor} border border-emerald-200/30 px-3 py-2 text-xs text-slate-700`}>
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                        {focus}
                      </li>
                    ))}
                    {conv.ethiopiaFocus.length > 3 && (
                      <div className="text-xs text-slate-500 font-medium">+{conv.ethiopiaFocus.length - 3} more focuses</div>
                    )}
                  </ul>
                </div>

                {/* Key Targets */}
                <div>
                  <div className="text-sm font-bold text-emerald-900 mb-2">Key Targets:</div>
                  <div className="flex flex-wrap gap-2">
                    {conv.keyTargets.map((target, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-700">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Ethiopia's Convention Commitments */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Ethiopia's Convention Commitments</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-2xl mx-auto">
                Ethiopia actively participates in international environmental governance through these conventions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white drop-shadow-lg mb-4 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  National Implementation
                </h3>
                <ul className="space-y-3">
                  {[
                    "Regular national reporting to conventions",
                    "Integration into national policies and laws",
                    "Capacity building and technical support",
                    "Stakeholder engagement and participation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-emerald-100 drop-shadow">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white drop-shadow-lg mb-4 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  International Cooperation
                </h3>
                <ul className="space-y-3">
                  {[
                    "Regional biodiversity initiatives",
                    "Technical assistance programs",
                    "Financial mechanism participation",
                    "Knowledge sharing and best practices"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-emerald-100 drop-shadow">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Key Achievements</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Ethiopia's progress in implementing international environmental commitments.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.05] hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <div className="text-4xl font-black text-emerald-950 mb-2">{achievement.number}</div>
                  <div className="text-sm text-slate-700 leading-relaxed">{achievement.label}</div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Convention Bodies & Meetings */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Convention Bodies & Meetings</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            The organizational structure that supports international environmental cooperation.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {conventionBodies.map((body, index) => (
              <div
                key={body.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${body.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${body.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{body.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-3">{body.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{body.description}</p>
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
            How students and environmental clubs can contribute to international environmental governance.
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

        {/* Resources & Links */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Resources & Links</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              {resources.map((resource, index) => (
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
                    <div className="text-sm text-slate-700">{resource.url}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Convention Updates
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Join Global Networks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalConventions;

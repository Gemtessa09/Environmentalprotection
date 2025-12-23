import React from "react";

const NBSAPs = () => {
  const aichiTargets = [
    {
      target: "Target 1: Awareness",
      description: "Increase awareness of biodiversity values",
      icon: "📢",
      color: "from-blue-500 to-indigo-500"
    },
    {
      target: "Target 11: Protected Areas",
      description: "Expand protected area network to 17% of land",
      icon: "🏞️",
      color: "from-green-500 to-emerald-500"
    },
    {
      target: "Target 12: Extinction Prevention",
      description: "Prevent extinction of threatened species",
      icon: "🦋",
      color: "from-purple-500 to-pink-500"
    },
    {
      target: "Target 14: Ecosystem Services",
      description: "Restore ecosystems and their services",
      icon: "🌿",
      color: "from-teal-500 to-cyan-500"
    },
    {
      target: "Target 15: Habitat Loss",
      description: "Reduce habitat fragmentation and degradation",
      icon: "🌳",
      color: "from-amber-500 to-orange-500"
    },
    {
      target: "Target 19: Knowledge",
      description: "Improve biodiversity knowledge and research",
      icon: "🔬",
      color: "from-slate-500 to-gray-500"
    }
  ];

  const involvementAreas = [
    {
      title: "Research & Monitoring",
      icon: "🔬",
      color: "from-blue-500 to-indigo-500",
      items: [
        "Biodiversity surveys and citizen science",
        "Impact assessment studies",
        "Long-term monitoring programs",
        "Data collection and analysis"
      ]
    },
    {
      title: "Awareness & Education",
      icon: "📚",
      color: "from-emerald-500 to-green-500",
      items: [
        "Campus awareness campaigns",
        "Community education programs",
        "Social media advocacy",
        "Environmental journalism"
      ]
    },
    {
      title: "Restoration Activities",
      icon: "🌱",
      color: "from-amber-500 to-orange-500",
      items: [
        "Tree planting and reforestation",
        "Wetland restoration",
        "Habitat improvement projects",
        "Invasive species control"
      ]
    },
    {
      title: "Policy Advocacy",
      icon: "📋",
      color: "from-purple-500 to-pink-500",
      items: [
        "Policy review and feedback",
        "Stakeholder consultations",
        "Public hearings participation",
        "Policy implementation monitoring"
      ]
    }
  ];

  const resources = [
    {
      title: "Ethiopia's NBSAP Document",
      description: "Full text available from the Ministry of Environment, Forest & Climate Change",
      icon: "📄",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Convention on Biological Diversity",
      description: "International framework for biodiversity conservation",
      icon: "🌍",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Ethiopian Wildlife Conservation Authority",
      description: "Lead agency for biodiversity implementation in Ethiopia",
      icon: "🦁",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "UNDP Biodiversity Portfolio",
      description: "Support for NBSAP implementation and capacity building",
      icon: "🤝",
      color: "from-purple-500 to-pink-500"
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
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Policies Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              National Biodiversity
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Strategies & Action Plans
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              National Biodiversity Strategies and Action Plans (NBSAPs) are comprehensive frameworks that outline goals,
              targets, and actions to protect biodiversity. They serve as roadmaps for countries to implement the Convention on Biological Diversity (CBD).
            </p>
          </div>
        </div>

        {/* What is Included & Club Support */}
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">What Typically is Included</h3>
              </div>

              <ul className="space-y-3">
                {[
                  "National biodiversity priorities and targets",
                  "Action plans and responsible institutions",
                  "Monitoring indicators and reporting",
                  "Funding and capacity-building needs",
                  "Integration with other environmental policies",
                  "Stakeholder engagement strategies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">How Clubs Can Support</h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Awareness and education campaigns",
                  "Citizen science and biodiversity monitoring",
                  "Campus and community restoration activities",
                  "Documenting local challenges and solutions",
                  "Advocacy for policy implementation",
                  "Partnerships with government agencies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ethiopia's NBSAP */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Ethiopia's NBSAP</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-2xl mx-auto">
                Ethiopia's National Biodiversity Strategy and Action Plan (NBSAP) was developed in 2015 and revised in 2020.
                It addresses the country's unique biodiversity challenges and opportunities.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white drop-shadow-lg mb-4">Key Priorities</h3>
                <ul className="space-y-3">
                  {[
                    "Protection of endangered species and habitats",
                    "Sustainable use of biodiversity resources",
                    "Integration of biodiversity into development planning",
                    "Capacity building for biodiversity management",
                    "Climate change adaptation and mitigation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-emerald-100 drop-shadow">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white drop-shadow-lg mb-4">Major Challenges</h3>
                <ul className="space-y-3">
                  {[
                    "Habitat loss and fragmentation",
                    "Overexploitation of natural resources",
                    "Invasive alien species",
                    "Climate change impacts",
                    "Limited institutional capacity"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-emerald-100 drop-shadow">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Aichi Biodiversity Targets */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Aichi Biodiversity Targets</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Ethiopia's NBSAP aligns with the global Aichi Biodiversity Targets, which were adopted in 2010 to address biodiversity loss by 2020.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {aichiTargets.map((target, index) => (
              <div
                key={target.target}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.05] hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${target.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${target.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{target.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-2">{target.target}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{target.description}</p>
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
            Students and environmental clubs play a crucial role in implementing NBSAPs through various activities and initiatives.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Resources & Links</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {resources.map((resource, index) => (
                <div
                  key={resource.title}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-white to-slate-50 border border-slate-200/50 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl">{resource.icon}</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-emerald-950 mb-1">{resource.title}</h4>
                    <p className="text-sm text-slate-700">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Download NBSAP
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NBSAPs;

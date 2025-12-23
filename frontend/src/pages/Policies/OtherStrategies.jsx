import React from "react";

const OtherStrategies = () => {
  const strategies = [
    {
      title: "Climate Change Adaptation Strategy",
      description: "Ethiopia's Climate Resilient Green Economy (CRGE) strategy aims to build resilience to climate change while pursuing green economic growth.",
      keyElements: ["Climate-smart agriculture", "Renewable energy expansion", "Reforestation and land restoration", "Water resource management"],
      relevance: "Supports biodiversity by maintaining habitats and ecosystem services under changing climate conditions.",
      icon: "🌡️",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      title: "Forestry and Land Management Strategy",
      description: "Comprehensive approach to sustainable forest management, land restoration, and combating desertification.",
      keyElements: ["Sustainable forest management", "Land restoration programs", "Biodiversity conservation in forests", "Community forestry development"],
      relevance: "Directly protects forest biodiversity and provides sustainable livelihoods for forest-dependent communities.",
      icon: "🌲",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      title: "Water and Watershed Management",
      description: "Integrated water resource management focusing on sustainable use and protection of water ecosystems.",
      keyElements: ["Watershed protection", "Wetland conservation", "Groundwater management", "Water quality monitoring"],
      relevance: "Essential for aquatic biodiversity and freshwater ecosystem health.",
      icon: "💧",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Waste Management and Circular Economy",
      description: "Transitioning from linear to circular economy models with emphasis on waste reduction and resource recovery.",
      keyElements: ["Waste reduction strategies", "Recycling programs", "Circular economy principles", "Pollution prevention"],
      relevance: "Reduces pollution impacts on biodiversity and promotes sustainable resource use.",
      icon: "♻️",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50"
    },
    {
      title: "Education and Awareness Strategy",
      description: "Building environmental knowledge and awareness across all sectors of society.",
      keyElements: ["Environmental education in schools", "Public awareness campaigns", "Capacity building programs", "Research and knowledge sharing"],
      relevance: "Creates informed citizens who support biodiversity conservation and sustainable development.",
      icon: "📚",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      title: "Sustainable Agriculture Strategy",
      description: "Promoting climate-resilient and biodiversity-friendly agricultural practices.",
      keyElements: ["Agroforestry systems", "Conservation agriculture", "Biodiversity-friendly farming", "Sustainable livestock management"],
      relevance: "Maintains agricultural biodiversity and ecosystem services while ensuring food security.",
      icon: "🌾",
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50"
    },
  ];

  const frameworks = [
    {
      title: "Climate Resilient Green Economy (CRGE) Strategy",
      description: "Ethiopia's flagship climate strategy launched in 2011, aiming to reach middle-income status through green economic growth while building resilience to climate change.",
      icon: "🌱",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Green Legacy Initiative",
      description: "Massive tree planting campaign that has planted over 350 million trees since 2019, creating new forests and green spaces across the country.",
      icon: "🌳",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Sustainable Land Management Program",
      description: "Multi-year program addressing land degradation through community-based watershed management and sustainable land use practices.",
      icon: "🏔️",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const synergies = [
    {
      title: "Climate Action",
      description: "Biodiversity supports carbon sequestration and climate adaptation",
      icon: "🌡️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Water Security",
      description: "Healthy watersheds depend on biodiversity",
      icon: "💧",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Food Security",
      description: "Agricultural biodiversity ensures resilient food systems",
      icon: "🌾",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const opportunities = [
    {
      title: "Research & Analysis",
      icon: "🔬",
      color: "from-blue-500 to-indigo-500",
      items: [
        "Assess local implementation of strategies",
        "Monitor environmental indicators",
        "Evaluate policy effectiveness",
        "Conduct impact assessments"
      ]
    },
    {
      title: "Community Action",
      icon: "🤝",
      color: "from-emerald-500 to-green-500",
      items: [
        "Support local strategy implementation",
        "Organize awareness campaigns",
        "Partner with government agencies",
        "Develop demonstration projects"
      ]
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
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
              Policies Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Other Environmental
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Strategies
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Biodiversity conservation is interconnected with many other environmental and development strategies.
              These complementary approaches work together to create comprehensive environmental protection frameworks.
            </p>
          </div>
        </div>

        {/* Environmental Strategies Grid */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Environmental Strategies</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Complementary strategies that support and enhance biodiversity conservation efforts.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {strategies.map((strategy, index) => (
              <div
                key={strategy.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${strategy.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${strategy.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{strategy.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                      {strategy.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {strategy.description}
                  </p>

                  {/* Key Elements */}
                  <div className="mb-4">
                    <div className="text-sm font-bold text-emerald-900 mb-2">Key Elements:</div>
                    <ul className="space-y-1">
                      {strategy.keyElements.map((element, idx) => (
                        <li key={idx} className={`flex items-start gap-2 rounded-lg bg-gradient-to-r ${strategy.bgColor} border border-emerald-200/30 px-3 py-2 text-xs text-slate-700`}>
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                          {element}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Biodiversity Relevance */}
                  <div>
                    <div className="text-sm font-bold text-emerald-900 mb-2">Biodiversity Relevance:</div>
                    <p className="text-sm text-slate-700 leading-relaxed">{strategy.relevance}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethiopia's Key Environmental Frameworks */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Ethiopia's Key Environmental Frameworks</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Major environmental initiatives and programs driving sustainable development.
          </p>

          <div className="grid gap-6 md:grid-cols-1 max-w-4xl mx-auto">
            {frameworks.map((framework, index) => (
              <div
                key={framework.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${framework.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${framework.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{framework.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950">{framework.title}</h3>
                  </div>

                  <p className="text-slate-700 leading-relaxed">{framework.description}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration and Synergies */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Integration and Synergies</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-2xl mx-auto">
                These strategies are most effective when integrated and coordinated. Biodiversity conservation provides the foundation for many other environmental goals.
              </p>
            </div>

            {/* Synergies Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {synergies.map((synergy, index) => (
                <div
                  key={synergy.title}
                  className="group/item text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${synergy.color} shadow-lg mb-4 group-hover/item:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{synergy.icon}</span>
                  </div>
                  <div className="text-xl font-bold text-white drop-shadow-lg mb-2">{synergy.title}</div>
                  <div className="text-emerald-100 drop-shadow text-sm leading-relaxed">{synergy.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Club Opportunities */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Student Club Opportunities</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            How students can contribute to implementing and monitoring environmental strategies.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {opportunities.map((opportunity, index) => (
              <div
                key={opportunity.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${opportunity.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${opportunity.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{opportunity.icon}</span>
                    </div>
                    <h3 className="text-2xl font-black text-emerald-950">{opportunity.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {opportunity.items.map((item, idx) => (
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
      </div>
    </div>
  );
};

export default OtherStrategies;

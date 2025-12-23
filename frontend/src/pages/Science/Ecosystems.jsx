import React from "react";

const Ecosystems = () => {
  const ecosystemServices = [
    {
      title: "Provisioning Services",
      icon: "🌾",
      color: "from-amber-500 to-orange-500",
      description: "Direct products obtained from ecosystems",
      examples: ["Food", "Water", "Timber", "Medicinal plants", "Genetic resources"]
    },
    {
      title: "Regulating Services",
      icon: "🌡️",
      color: "from-blue-500 to-cyan-500",
      description: "Benefits from regulation of ecosystem processes",
      examples: ["Climate regulation", "Water purification", "Pollination", "Pest control", "Erosion control"]
    },
    {
      title: "Cultural Services",
      icon: "🎭",
      color: "from-purple-500 to-pink-500",
      description: "Non-material benefits from ecosystems",
      examples: ["Recreation", "Spiritual values", "Education", "Aesthetic enjoyment", "Cultural heritage"]
    },
    {
      title: "Supporting Services",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
      description: "Services necessary for production of other ecosystem services",
      examples: ["Soil formation", "Nutrient cycling", "Primary production", "Water cycling", "Habitat provision"]
    }
  ];

  const majorEcosystems = [
    {
      title: "Forests",
      icon: "🌲",
      color: "from-green-500 to-emerald-500",
      description: "Store carbon, protect soils, and provide habitat for many species.",
      facts: ["Cover 31% of Earth's land", "Home to 80% of terrestrial biodiversity", "Store 45% of terrestrial carbon"]
    },
    {
      title: "Wetlands",
      icon: "🏞️",
      color: "from-blue-500 to-cyan-500",
      description: "Support water purification, flood control, and unique biodiversity.",
      facts: ["Cover 6% of Earth's surface", "Act as natural water filters", "Support 40% of global fish species"]
    },
    {
      title: "Farmlands",
      icon: "🌾",
      color: "from-amber-500 to-yellow-500",
      description: "Agro-ecosystems depend on healthy soils and pollinators.",
      facts: ["Cover 38% of Earth's land", "Support 7.8 billion people", "Depend on ecosystem services"]
    },
    {
      title: "Freshwater",
      icon: "💧",
      color: "from-blue-500 to-indigo-500",
      description: "Rivers and lakes support biodiversity and human livelihoods.",
      facts: ["Cover 2.5% of Earth's surface", "Critical for drinking water", "Home to 10% of known species"]
    }
  ];

  const biodiversityHotspots = [
    {
      name: "Tropical Rainforests",
      icon: "🌴",
      threat: "Deforestation",
      species: "50% of global biodiversity"
    },
    {
      name: "Coral Reefs",
      icon: "🐠",
      threat: "Ocean warming",
      species: "25% of marine species"
    },
    {
      name: "Mediterranean Ecosystems",
      icon: "🌿",
      threat: "Urbanization",
      species: "High endemism rates"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Science Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Understanding
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Ecosystems
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Ecosystems are dynamic communities of plants, animals, and microorganisms interacting with their physical environment.
              They provide essential services that support life on Earth and human well-being.
            </p>
          </div>
        </div>

        {/* What are Ecosystems Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-emerald-950">What are Ecosystems?</h2>
            </div>

            <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
              An ecosystem consists of all the living organisms in an area (biotic components) and their physical environment (abiotic components)
              functioning together as a unit. Ecosystems range in size from a small pond to the entire biosphere and are characterized by energy flow and nutrient cycling.
            </p>
          </div>
        </div>

        {/* Ecosystem Services */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Ecosystem Services</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            The benefits that ecosystems provide to humanity, classified into four main categories.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {ecosystemServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div>
                    <div className="text-sm font-bold text-emerald-900 mb-2">Examples:</div>
                    <ul className="space-y-1">
                      {service.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                          {example}
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

        {/* Biodiversity Hotspots */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Biodiversity Hotspots</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-3xl mx-auto">
                Areas with exceptional biodiversity that are under threat and require urgent conservation attention.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {biodiversityHotspots.map((hotspot, index) => (
                <div
                  key={hotspot.name}
                  className="group/item text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg mb-4 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{hotspot.icon}</span>
                  </div>
                  <div className="text-lg font-bold text-white drop-shadow-lg mb-2">{hotspot.name}</div>
                  <div className="text-emerald-100 drop-shadow text-sm mb-2">{hotspot.species}</div>
                  <div className="text-red-200 drop-shadow text-xs">Threat: {hotspot.threat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Major Ecosystem Types */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Major Ecosystem Types</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Earth's ecosystems can be classified into terrestrial, freshwater, and marine types, each with unique characteristics and biodiversity.
            Understanding these systems helps us appreciate their interconnectedness and the impacts of human activities.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {majorEcosystems.map((ecosystem, index) => (
              <div
                key={ecosystem.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${ecosystem.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${ecosystem.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{ecosystem.icon}</span>
                    </div>
                    <h3 className="text-2xl font-black text-emerald-950">{ecosystem.title}</h3>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-4">{ecosystem.description}</p>

                  <div>
                    <div className="text-sm font-bold text-emerald-900 mb-2">Key Facts:</div>
                    <ul className="space-y-1">
                      {ecosystem.facts.map((fact, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                          {fact}
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

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Explore Ecosystem Conservation</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Learn how to protect and restore the ecosystems that sustain life on our planet.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Conservation Strategies
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Ecosystem Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystems;

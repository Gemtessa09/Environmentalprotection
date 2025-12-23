import React from "react";

const BiodiversityOverview = () => {
  const diversityTypes = [
    {
      title: "Genetic Diversity",
      icon: "🧬",
      color: "from-purple-500 to-indigo-500",
      description: "The variety of genes within a species. This diversity allows populations to adapt to changing environmental conditions and is crucial for agriculture and medicine.",
      examples: ["Crop varieties", "Disease resistance", "Adaptation to climate"]
    },
    {
      title: "Species Diversity",
      icon: "🦋",
      color: "from-green-500 to-emerald-500",
      description: "The number and variety of species in a given area. This includes plants, animals, fungi, and microorganisms, each playing unique roles in ecosystems.",
      examples: ["Bird species", "Plant species", "Microorganisms", "Marine life"]
    },
    {
      title: "Ecosystem Diversity",
      icon: "🌍",
      color: "from-blue-500 to-cyan-500",
      description: "The variety of habitats, communities, and ecological processes. This includes forests, grasslands, wetlands, and marine environments.",
      examples: ["Forests", "Grasslands", "Wetlands", "Coral reefs", "Deserts"]
    }
  ];

  const ecosystemServices = [
    {
      title: "Food Production",
      icon: "🌾",
      description: "Biodiversity provides the foundation for agriculture, fisheries, and wild food sources."
    },
    {
      title: "Water Purification",
      icon: "💧",
      description: "Wetlands and forests filter pollutants and regulate water flow."
    },
    {
      title: "Climate Regulation",
      icon: "🌡️",
      description: "Forests and oceans absorb CO2 and help regulate global temperatures."
    },
    {
      title: "Soil Fertility",
      icon: "🌱",
      description: "Microorganisms and plants maintain healthy, productive soils."
    },
    {
      title: "Pollination",
      icon: "🐝",
      description: "Insects and other animals pollinate crops and wild plants."
    },
    {
      title: "Natural Pest Control",
      icon: "🦗",
      description: "Predators and parasites naturally control pest populations."
    }
  ];

  const keyPoints = [
    "Biodiversity includes species, ecosystems, and genetic diversity.",
    "Healthy biodiversity supports food, water, and resilient livelihoods.",
    "Protecting habitats helps protect the species that depend on them.",
    "Monitoring helps us learn what is changing and why."
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
              Biodiversity
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Overview
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Biodiversity is the variety of life on Earth, encompassing all living organisms and the ecosystems they form.
              It is essential for human survival and well-being, providing ecosystem services that sustain life.
            </p>
          </div>
        </div>

        {/* What is Biodiversity Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-emerald-950">What is Biodiversity?</h2>
            </div>

            <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Biodiversity refers to the variety and variability of life on Earth. It includes diversity within species (genetic diversity),
              between species (species diversity), and of ecosystems (ecosystem diversity). This diversity is the result of billions
              of years of evolution and adaptation to different environments.
            </p>
          </div>
        </div>

        {/* Three Types of Diversity */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Three Types of Biodiversity</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Biodiversity manifests in three interconnected levels, each crucial for ecosystem health and resilience.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {diversityTypes.map((type, index) => (
              <div
                key={type.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${type.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{type.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                      {type.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {type.description}
                  </p>

                  {/* Examples */}
                  <div>
                    <div className="text-sm font-bold text-emerald-900 mb-2">Examples:</div>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Biodiversity Matters */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Why Biodiversity Matters</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-3xl mx-auto">
                Biodiversity provides essential ecosystem services that support human life and economic development.
                These services include food production, water purification, climate regulation, soil fertility, pollination, and natural pest control.
              </p>
            </div>

            {/* Ecosystem Services Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ecosystemServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group/item text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-400 shadow-lg mb-4 group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-lg">{service.icon}</span>
                  </div>
                  <div className="text-lg font-bold text-white drop-shadow-lg mb-2">{service.title}</div>
                  <div className="text-emerald-100 drop-shadow text-sm leading-relaxed">{service.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-emerald-100 drop-shadow-lg leading-relaxed max-w-4xl mx-auto">
                Healthy biodiversity contributes to resilient ecosystems that can better withstand environmental changes, including climate change.
                It supports human health through the provision of medicines and maintains the balance of natural processes that regulate the planet's climate and water cycles.
              </p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Key Takeaways</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-white to-slate-50 border border-slate-200/50 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-left">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Learn More About Conservation
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Explore Ecosystems
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodiversityOverview;

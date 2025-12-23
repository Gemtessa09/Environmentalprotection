import React from "react";

const BiodiversityConservation = () => {
  const conservationApproaches = [
    {
      title: "In-Situ Conservation",
      icon: "🏞️",
      color: "from-green-500 to-emerald-500",
      description: "Protecting biodiversity in its natural habitat through protected areas, national parks, and wildlife reserves. This approach maintains natural processes and allows species to evolve and adapt.",
      methods: [
        "Establishing protected areas",
        "Habitat restoration projects",
        "Community-based conservation"
      ]
    },
    {
      title: "Ex-Situ Conservation",
      icon: "🏛️",
      color: "from-blue-500 to-indigo-500",
      description: "Conserving species outside their natural habitats, such as in zoos, botanical gardens, and seed banks. This provides a safety net for critically endangered species.",
      methods: [
        "Zoos and aquariums",
        "Seed banks and gene banks",
        "Captive breeding programs"
      ]
    }
  ];

  const conservationActions = [
    {
      title: "Protect",
      icon: "🛡️",
      color: "from-red-500 to-pink-500",
      description: "Protect critical habitats and reduce direct pressures on wildlife.",
      details: "Establish protected areas, enforce regulations, and prevent habitat destruction."
    },
    {
      title: "Restore",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
      description: "Restore degraded areas with native species and long-term care.",
      details: "Replant forests, restore wetlands, and rehabilitate damaged ecosystems."
    },
    {
      title: "Use Sustainably",
      icon: "⚖️",
      color: "from-blue-500 to-cyan-500",
      description: "Promote practices that meet needs without harming future biodiversity.",
      details: "Implement sustainable fishing, forestry, and agriculture practices."
    },
    {
      title: "Educate",
      icon: "📚",
      color: "from-purple-500 to-indigo-500",
      description: "Awareness and learning help people adopt conservation-friendly habits.",
      details: "Environmental education, community outreach, and capacity building."
    }
  ];

  const threats = [
    { name: "Habitat Destruction", icon: "🏗️", percentage: "75%" },
    { name: "Overexploitation", icon: "🎣", percentage: "60%" },
    { name: "Pollution", icon: "🏭", percentage: "45%" },
    { name: "Invasive Species", icon: "🐾", percentage: "35%" },
    { name: "Climate Change", icon: "🌡️", percentage: "30%" }
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
                Conservation
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Biodiversity conservation involves protecting, restoring, and sustainably managing the variety of life on Earth.
              It requires integrated approaches that address the root causes of biodiversity loss while promoting sustainable development.
            </p>
          </div>
        </div>

        {/* The Biodiversity Crisis */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-emerald-950">The Biodiversity Crisis</h2>
            </div>

            <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Human activities have caused unprecedented rates of species extinction and habitat loss. The main threats include habitat destruction,
              overexploitation, pollution, invasive species, and climate change. Conservation efforts aim to reverse these trends and ensure that ecosystems remain functional and resilient.
            </p>

            {/* Threats Visualization */}
            <div className="grid gap-4 md:grid-cols-5 max-w-4xl mx-auto">
              {threats.map((threat, index) => (
                <div
                  key={threat.name}
                  className="group text-center p-4 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/50 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">{threat.icon}</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800 mb-1">{threat.name}</div>
                  <div className="text-xs text-slate-600">{threat.percentage} of species affected</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conservation Approaches */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Conservation Approaches</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Two complementary strategies work together to protect biodiversity and ensure species survival.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {conservationApproaches.map((approach, index) => (
              <div
                key={approach.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${approach.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${approach.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{approach.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                      {approach.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {approach.description}
                  </p>

                  {/* Methods */}
                  <div>
                    <div className="text-sm font-bold text-emerald-900 mb-2">Key Methods:</div>
                    <ul className="space-y-1">
                      {approach.methods.map((method, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                          {method}
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

        {/* Conservation Strategies */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Conservation Strategies</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-3xl mx-auto">
                Effective conservation requires a combination of approaches, including scientific research, policy development,
                community engagement, and sustainable resource management. International agreements like the Convention on Biological Diversity provide frameworks for global cooperation.
              </p>
            </div>
          </div>
        </div>

        {/* Four Conservation Actions */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Four Pillars of Conservation</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            The fundamental actions needed to protect and restore biodiversity worldwide.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {conservationActions.map((action, index) => (
              <div
                key={action.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${action.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${action.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{action.icon}</span>
                    </div>
                    <h3 className="text-2xl font-black text-emerald-950">{action.title}</h3>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-4">{action.description}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{action.details}</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Take Action Today</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Every individual can contribute to biodiversity conservation. Start with small actions that make a big difference.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Join Conservation Efforts
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Learn More About Threats
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodiversityConservation;

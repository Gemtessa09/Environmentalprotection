import React from "react";

const BiodiversitySites = () => {
  const sites = [
    {
      title: "Campus Green Spaces",
      location: "Throughout Haramaya University Campus",
      body: "Trees, gardens, and planted areas that support birds, insects, and native plants. Key species include Eucalyptus trees, flowering shrubs, and seasonal wildflowers. These areas serve as important corridors for wildlife movement and provide habitat for urban-adapted species.",
      species: ["Various bird species", "Butterflies", "Bees", "Small mammals"],
      status: "Protected",
      icon: "🌳",
      color: "from-green-500 to-emerald-500",
      statusColor: "bg-green-100 text-green-800 border-green-200"
    },
    {
      title: "Haramaya Wetlands",
      location: "Eastern edge of campus, near agricultural fields",
      body: "Seasonal wetlands that form during rainy seasons, supporting aquatic plants, amphibians, and migratory birds. These areas are crucial for water purification and flood control, but face threats from agricultural runoff and urban expansion.",
      species: ["Frogs", "Dragonflies", "Water birds", "Aquatic plants"],
      status: "Vulnerable",
      icon: "🏞️",
      color: "from-blue-500 to-cyan-500",
      statusColor: "bg-yellow-100 text-yellow-800 border-yellow-200"
    },
    {
      title: "Community Farmlands",
      location: "Surrounding Haramaya town and nearby villages",
      body: "Agro-ecosystems where sustainable practices protect soil health, pollinators, and watershed function. Traditional farming methods here maintain biodiversity through crop rotation and natural pest control.",
      species: ["Beneficial insects", "Soil microorganisms", "Wild pollinators", "Small reptiles"],
      status: "Managed",
      icon: "🌾",
      color: "from-amber-500 to-orange-500",
      statusColor: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      title: "Awash River Corridor",
      location: "Along Awash River, accessible from campus",
      body: "Riparian zone with diverse vegetation including acacia trees, riverine forests, and grasslands. Important for fish populations, bird migration, and groundwater recharge. Faces pressure from water extraction and pollution.",
      species: ["Fish species", "River birds", "Mammals", "Riverine plants"],
      status: "Critical",
      icon: "🌊",
      color: "from-cyan-500 to-blue-500",
      statusColor: "bg-red-100 text-red-800 border-red-200"
    },
    {
      title: "Dire Dawa Mountain Forests",
      location: "Day trip accessible, about 50km from campus",
      body: "Montane forests with unique highland species including endemic plants and birds. These forests are biodiversity hotspots but threatened by deforestation and climate change.",
      species: ["Endemic birds", "Wild coffee", "Forest mammals", "Orchid species"],
      status: "Endangered",
      icon: "🏔️",
      color: "from-red-500 to-pink-500",
      statusColor: "bg-red-200 text-red-900 border-red-300"
    },
    {
      title: "Agricultural Research Plots",
      location: "Haramaya University research farms",
      body: "Experimental fields testing sustainable agriculture methods. These plots demonstrate biodiversity-friendly farming practices and serve as living laboratories for students.",
      species: ["Beneficial insects", "Soil microbes", "Crop wild relatives", "Pollinators"],
      status: "Research",
      icon: "🔬",
      color: "from-purple-500 to-indigo-500",
      statusColor: "bg-gray-100 text-gray-800 border-gray-200"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Biodiversity
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Sites
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Places of ecological value around Haramaya University and the surrounding region. These sites represent
              important biodiversity hotspots that require protection and monitoring.
            </p>
          </div>
        </div>

        {/* Sites Grid */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Explore Our Biodiversity Sites</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Discover the rich biodiversity around our campus and learn about conservation efforts in our region.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((site, index) => (
              <div
                key={site.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${site.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${site.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{site.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                        {site.title}
                      </h3>
                      <div className="text-sm text-emerald-600 font-medium mt-1">{site.location}</div>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {site.body}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm font-bold text-emerald-900 mb-2">Key Species:</div>
                    <div className="flex flex-wrap gap-2">
                      {site.species.map((spec, idx) => (
                        <span key={idx} className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 border border-emerald-200">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Conservation Status:</span>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold border ${site.statusColor}`}>
                      {site.status}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Conservation Status Legend */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Conservation Status Guide</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-3xl mx-auto">
                Understanding the conservation status helps prioritize protection efforts and monitoring activities.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 text-center">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="inline-block w-4 h-4 rounded-full bg-green-400 mb-2"></div>
                <div className="text-white drop-shadow-lg font-bold text-sm mb-1">Protected</div>
                <div className="text-emerald-100 drop-shadow text-xs">Well conserved areas</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="inline-block w-4 h-4 rounded-full bg-yellow-400 mb-2"></div>
                <div className="text-white drop-shadow-lg font-bold text-sm mb-1">Vulnerable</div>
                <div className="text-emerald-100 drop-shadow text-xs">At risk of decline</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="inline-block w-4 h-4 rounded-full bg-blue-400 mb-2"></div>
                <div className="text-white drop-shadow-lg font-bold text-sm mb-1">Managed</div>
                <div className="text-emerald-100 drop-shadow text-xs">Actively managed</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="inline-block w-4 h-4 rounded-full bg-red-400 mb-2"></div>
                <div className="text-white drop-shadow-lg font-bold text-sm mb-1">Critical</div>
                <div className="text-emerald-100 drop-shadow text-xs">Urgent action needed</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="inline-block w-4 h-4 rounded-full bg-red-600 mb-2"></div>
                <div className="text-white drop-shadow-lg font-bold text-sm mb-1">Endangered</div>
                <div className="text-emerald-100 drop-shadow text-xs">Severely threatened</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="inline-block w-4 h-4 rounded-full bg-gray-400 mb-2"></div>
                <div className="text-white drop-shadow-lg font-bold text-sm mb-1">Research</div>
                <div className="text-emerald-100 drop-shadow text-xs">Study areas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Join Conservation Efforts</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Help protect and monitor these important biodiversity sites. Your involvement can make a real difference.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Volunteer for Monitoring
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Plan a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodiversitySites;

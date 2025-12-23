import React, { useMemo, useState } from "react";

const WildlifePhotographers = () => {
  const gallery = useMemo(
    () => [
      {
        title: "Birds",
        body: "Document campus and regional birdlife with ethical photography. Ethiopia hosts over 800 bird species, including endemics like the Blue-winged Goose and Wattled Ibis.",
        tips: ["Use binoculars first to identify species", "Photograph during early morning or late afternoon", "Learn bird calls for better observation"],
        icon: "🦅",
        species: "800+ species",
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: "Pollinators",
        body: "Bees and butterflies are key biodiversity indicators. Their presence indicates healthy ecosystems and agricultural productivity.",
        tips: ["Work quietly and avoid sudden movements", "Focus on flowers where pollinators feed", "Note seasonal patterns in species diversity"],
        icon: "🐝",
        species: "200+ species",
        color: "from-yellow-500 to-orange-500"
      },
      {
        title: "Native Plants",
        body: "Track plant diversity and seasonal changes. Ethiopia's flora includes unique species adapted to diverse climates from deserts to highlands.",
        tips: ["Learn basic plant identification", "Document flowering seasons", "Note human impacts on vegetation"],
        icon: "🌿",
        species: "6,000+ species",
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "Landscapes",
        body: "Ecosystems and habitats—tell a conservation story. Capture the beauty and changes in Ethiopian landscapes from Rift Valley to highlands.",
        tips: ["Include scale references in photos", "Document seasonal changes", "Show human-environment interactions"],
        icon: "🏔️",
        species: "Diverse ecosystems",
        color: "from-purple-500 to-indigo-500"
      },
      {
        title: "Night Life",
        body: "Responsible night photography to observe nocturnal species. Many mammals and insects are active only at night.",
        tips: ["Use red LED lights to avoid disturbing animals", "Be aware of personal safety", "Learn night photography techniques"],
        icon: "🌙",
        species: "Nocturnal species",
        color: "from-gray-700 to-gray-900"
      },
      {
        title: "Freshwater",
        body: "Water ecosystems and organisms supported by clean water. Rivers, lakes, and wetlands are biodiversity hotspots.",
        tips: ["Never disturb aquatic habitats", "Document water quality indicators", "Note invasive species if present"],
        icon: "💧",
        species: "Aquatic ecosystems",
        color: "from-blue-400 to-teal-500"
      },
    ],
    []
  );

  const [selected, setSelected] = useState(gallery[0]);

  const ethics = [
    "Maintain safe distance from wildlife",
    "Never bait or disturb animals",
    "Respect private property and protected areas",
    "Share knowledge, not just photos",
    "Minimize environmental impact"
  ];

  const equipment = {
    basic: "Smartphone or entry-level DSLR, telephoto lens (200-400mm), tripod, binoculars",
    skills: "Patience, field craft, species identification, composition, post-processing",
    resources: "Access to university camera equipment, workshops, and expert guidance"
  };

  const conservationStats = [
    { number: "800+", label: "Bird species in Ethiopia", icon: "🦅" },
    { number: "30+", label: "Endemic species documented", icon: "🌱" },
    { number: "50+", label: "Active photographers", icon: "📸" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/20">
              <span className="mr-2">📸</span>
              Wildlife Photography
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Capture
              <span className="block text-emerald-200">Nature's Beauty</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-emerald-100">
              Join our wildlife photographers in documenting Ethiopia's incredible biodiversity. Through ethical photography, we raise awareness and contribute to conservation efforts.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {conservationStats.map((stat, index) => (
              <div
                key={stat.label}
                className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                    {stat.icon}
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photography Ethics & Equipment */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="transform rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 mr-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Photography Ethics</h2>
            </div>
            <ul className="space-y-4">
              {ethics.map((ethic, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 mr-4 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-sm leading-relaxed">{ethic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="transform rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mr-4">
                <span className="text-2xl">📷</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Equipment & Skills</h2>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
                <div className="font-semibold text-amber-800 mb-2">📦 Basic Equipment</div>
                <div className="text-sm text-amber-700">{equipment.basic}</div>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
                <div className="font-semibold text-blue-800 mb-2">🎯 Essential Skills</div>
                <div className="text-sm text-blue-700">{equipment.skills}</div>
              </div>
              <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                <div className="font-semibold text-green-800 mb-2">🏫 Local Resources</div>
                <div className="text-sm text-green-700">{equipment.resources}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photography Categories */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Photography Categories</h2>
            <p className="mt-4 text-lg text-gray-600">Explore different aspects of wildlife photography and conservation</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Featured Category */}
            <div className="lg:col-span-2">
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${selected.color} p-8 text-white shadow-2xl`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                      <span className="text-3xl">{selected.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/80 mb-1">Featured Category</div>
                      <h3 className="text-3xl font-bold">{selected.title}</h3>
                      <div className="text-sm text-white/80 mt-1">{selected.species}</div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mb-6">{selected.body}</p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-sm font-semibold text-white mb-3">📝 Photography Tips:</div>
                    <ul className="space-y-2">
                      {selected.tips.map((tip, index) => (
                        <li key={index} className="flex items-start text-white/90">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 mr-3 mt-0.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                          </div>
                          <span className="text-sm leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 text-sm text-white/80 italic">
                    💡 Tip: Use respectful distance and do not disturb wildlife.
                  </div>
                </div>
              </div>
            </div>

            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {gallery.map((category, index) => (
                    <button
                      key={category.title}
                      type="button"
                      onClick={() => setSelected(category)}
                      className={`w-full transform rounded-2xl border p-4 text-left shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        selected.title === category.title
                          ? "border-emerald-500 bg-emerald-50 shadow-lg"
                          : "border-gray-200 bg-white hover:bg-gray-50"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-lg">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{category.title}</div>
                          <div className="text-xs text-gray-600">{category.species}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conservation Impact */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Conservation Impact</h2>
          <p className="mt-4 text-lg text-gray-600">
            Wildlife photography serves conservation by documenting biodiversity, raising public awareness, and supporting scientific research.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {conservationStats.map((stat, index) => (
            <div
              key={stat.label}
              className="transform rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 p-8 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Join Our Photography Community</h2>
            <p className="mt-4 text-xl text-emerald-100">
              Ready to capture Ethiopia's incredible wildlife? Join our photographers in making a difference through visual storytelling.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="transform rounded-xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-50">
                Join Photography Club
              </button>
              <button className="transform rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white hover:text-emerald-600">
                View Photo Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WildlifePhotographers;

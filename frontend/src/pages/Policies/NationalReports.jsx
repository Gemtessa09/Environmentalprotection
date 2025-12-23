import React from "react";

const NationalReports = () => {
  const sections = [
    {
      title: "Status of Biodiversity",
      body: "Comprehensive assessment of Ethiopia's biodiversity, including species diversity, ecosystem health, and genetic resources. Ethiopia hosts over 800 bird species, 274 mammal species, and thousands of plant species.",
      keyFindings: ["High species endemism (Ethiopian highlands)", "Threatened ecosystems (forests, wetlands)", "Rich genetic diversity in crops"],
      icon: "🦜",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      title: "Pressures and Threats",
      body: "Analysis of drivers impacting biodiversity including habitat loss, climate change, overexploitation, and invasive species. Ethiopia faces significant deforestation and land degradation challenges.",
      keyFindings: ["Forest loss rate: 0.8% annually", "Agricultural expansion major driver", "Climate change exacerbating threats"],
      icon: "⚠️",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      title: "Conservation Responses",
      body: "Overview of policies, protected areas, and conservation programs. Ethiopia has established 23 national parks and numerous conservation initiatives.",
      keyFindings: ["23 national parks covering 16.5% of land", "Community conservation programs", "International collaboration efforts"],
      icon: "🛡️",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "Gaps and Needs",
      body: "Identification of remaining challenges in funding, capacity, data collection, and enforcement. Reports highlight needs for improved monitoring and community engagement.",
      keyFindings: ["Limited biodiversity monitoring capacity", "Need for sustainable financing", "Gaps in law enforcement"],
      icon: "🔍",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
  ];

  const reports = [
    {
      title: "Fifth National Biodiversity Report (2020)",
      year: "2020",
      focus: "Progress towards Aichi Targets and post-2020 framework",
      keyPoints: ["Assessment of Aichi Target progress", "Updated NBSAP implementation", "COVID-19 impacts on biodiversity"],
      icon: "📊",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Fourth National Biodiversity Report (2018)",
      year: "2018",
      focus: "Mid-term review of NBSAP implementation",
      keyPoints: ["Protected area expansion", "Community-based conservation", "Biodiversity mainstreaming"],
      icon: "📈",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Third National Biodiversity Report (2015)",
      year: "2015",
      focus: "Baseline assessment and NBSAP development",
      keyPoints: ["Initial biodiversity status", "Threat analysis", "Strategy development"],
      icon: "📋",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const biodiversityStats = [
    { number: "800+", label: "Bird species", icon: "🦜", color: "from-green-500 to-emerald-500" },
    { number: "274", label: "Mammal species", icon: "🦁", color: "from-amber-500 to-orange-500" },
    { number: "6,000+", label: "Plant species", icon: "🌿", color: "from-teal-500 to-cyan-500" }
  ];

  const ecosystems = [
    { name: "Afro-alpine habitats", icon: "🏔️" },
    { name: "Rift Valley lakes and wetlands", icon: "🏞️" },
    { name: "Afromontane forests", icon: "🌲" },
    { name: "Desert and semi-desert ecosystems", icon: "🏜️" }
  ];

  const achievements = [
    { name: "23 national parks established", icon: "🏞️" },
    { name: "Green Legacy Initiative (350M+ trees)", icon: "🌳" },
    { name: "Community conservation programs", icon: "🤝" },
    { name: "International collaboration", icon: "🌍" }
  ];

  const engagementAreas = [
    {
      title: "Research & Analysis",
      icon: "🔬",
      color: "from-blue-500 to-indigo-500",
      items: [
        "Review and analyze report data",
        "Conduct local biodiversity assessments",
        "Monitor implementation progress",
        "Identify research gaps"
      ]
    },
    {
      title: "Awareness & Advocacy",
      icon: "📢",
      color: "from-emerald-500 to-green-500",
      items: [
        "Share report findings with community",
        "Advocate for policy improvements",
        "Develop educational materials",
        "Support citizen science initiatives"
      ]
    }
  ];

  const accessResources = [
    { name: "Ministry of Environment Website", description: "Official biodiversity reports", icon: "🏛️" },
    { name: "EWCA Resources", description: "Conservation authority reports", icon: "🦁" },
    { name: "CBD Clearing-house", description: "Convention on Biological Diversity", icon: "🌍" },
    { name: "University Libraries", description: "Academic and research access", icon: "📚" }
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
              Ethiopia's National
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Biodiversity Reports
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Comprehensive assessments submitted to the Convention on Biological Diversity.
              These reports track progress, identify challenges, and guide future conservation efforts.
            </p>
          </div>
        </div>

        {/* Report Structure and Content */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Report Structure and Content</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            National biodiversity reports follow a standardized structure covering key aspects of biodiversity conservation.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${section.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{section.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {section.body}
                  </p>

                  {/* Key Findings */}
                  <div>
                    <div className="text-sm font-bold text-emerald-900 mb-2">Key Findings:</div>
                    <ul className="space-y-1">
                      {section.keyFindings.map((finding, idx) => (
                        <li key={idx} className={`flex items-start gap-2 rounded-lg bg-gradient-to-r ${section.bgColor} border border-emerald-200/30 px-3 py-2 text-xs text-slate-700`}>
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                          {finding}
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

        {/* Recent National Reports */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Recent National Reports</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Ethiopia's latest biodiversity reports submitted to the Convention on Biological Diversity.
          </p>

          <div className="grid gap-6 md:grid-cols-1 max-w-4xl mx-auto">
            {reports.map((report, index) => (
              <div
                key={report.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${report.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${report.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{report.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-emerald-950">{report.title}</h3>
                        <p className="text-slate-700 mt-1">{report.focus}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${report.color} px-4 py-2 text-sm font-bold text-white shadow-lg`}>
                      {report.year}
                    </span>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-emerald-900 mb-3">Key Points:</div>
                    <ul className="space-y-2">
                      {report.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400"></span>
                          {point}
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

        {/* Ethiopia's Biodiversity Highlights */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Ethiopia's Biodiversity Highlights</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-2xl mx-auto">
                Ethiopia is home to extraordinary biodiversity, hosting unique species and ecosystems found nowhere else on Earth.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {biodiversityStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group/stat text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg mb-4 group-hover/stat:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-4xl font-black text-white drop-shadow-lg mb-2">{stat.number}</div>
                  <div className="text-emerald-100 drop-shadow">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Ecosystems and Achievements */}
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-white drop-shadow-lg mb-4">Unique Ecosystems</h3>
                <div className="space-y-3">
                  {ecosystems.map((eco, index) => (
                    <div key={eco.name} className="flex items-center gap-3 text-emerald-100 drop-shadow">
                      <span className="text-lg">{eco.icon}</span>
                      {eco.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white drop-shadow-lg mb-4">Conservation Achievements</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.name} className="flex items-center gap-3 text-emerald-100 drop-shadow">
                      <span className="text-lg">{achievement.icon}</span>
                      {achievement.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Engagement Opportunities */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Student Engagement Opportunities</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            How students can contribute to biodiversity reporting and conservation efforts.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {engagementAreas.map((area, index) => (
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

        {/* Accessing Reports */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Accessing Reports</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              National biodiversity reports are available through official and academic channels.
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
                Download Reports
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalReports;

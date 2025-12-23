import React from "react";

const Stakeholders = () => {
  const groups = [
    {
      title: "Haramaya University",
      body: "Campus administration, departments, student services, and research groups. Key partners include the Office of the President, Department of Environmental Science, and various research institutes.",
      engagement: ["Joint research projects", "Campus policy advocacy", "Resource sharing", "Event co-sponsorship"],
      examples: ["Environmental Science Department collaboration on biodiversity studies", "Student Affairs support for campus cleanups"],
      icon: "🎓",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "Students and Volunteers",
      body: "Club members, class groups, student associations, and eco-ambassadors. The backbone of grassroots environmental action and awareness campaigns.",
      engagement: ["Membership drives", "Training workshops", "Volunteer coordination", "Leadership development"],
      examples: ["Weekly club meetings", "Peer education programs", "Social media campaigns"],
      icon: "👥",
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      title: "Local Community",
      body: "Nearby schools, youth groups, farmers, and community organizations in Haramaya town and surrounding areas.",
      engagement: ["Community outreach", "Joint cleanups", "Educational programs", "Local resource sharing"],
      examples: ["Tree planting with local schools", "Farmers' workshops on sustainable agriculture", "Community awareness campaigns"],
      icon: "🏘️",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      title: "Government & Agencies",
      body: "Environmental and conservation offices that support policy and awareness. Includes Ethiopian Wildlife Conservation Authority, Ministry of Environment, and local environmental offices.",
      engagement: ["Policy advocacy", "Technical support", "Permits and approvals", "Joint monitoring programs"],
      examples: ["Biodiversity monitoring with EWCA", "Climate action partnerships", "Environmental education support"],
      icon: "🏛️",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      title: "NGOs & Partners",
      body: "Organizations supporting biodiversity, climate, waste management, and education. International and local NGOs working on environmental issues.",
      engagement: ["Project partnerships", "Funding opportunities", "Technical expertise", "Resource sharing"],
      examples: ["WWF Ethiopia conservation projects", "UNDP climate initiatives", "Local environmental NGOs"],
      icon: "🤝",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50"
    },
    {
      title: "Private Sector",
      body: "Businesses and corporations interested in corporate social responsibility, sustainable practices, and environmental partnerships.",
      engagement: ["CSR partnerships", "Employee volunteer programs", "Sustainable supply chain initiatives", "Environmental certifications"],
      examples: ["Corporate tree planting programs", "Eco-friendly product development", "Employee environmental training"],
      icon: "🏢",
      color: "from-slate-500 to-gray-500",
      bgColor: "from-slate-50 to-gray-50"
    },
  ];

  const frameworkItems = [
    {
      title: "Building Partnerships",
      items: [
        "Identify shared goals and mutual benefits",
        "Start with small, low-risk collaborations",
        "Maintain regular communication",
        "Recognize and celebrate contributions",
        "Develop formal partnership agreements when appropriate"
      ],
      icon: "🤝",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Communication Strategies",
      items: [
        "Use appropriate language for each stakeholder group",
        "Provide regular updates and progress reports",
        "Listen actively to concerns and feedback",
        "Use multiple communication channels",
        "Be transparent about challenges and successes"
      ],
      icon: "💬",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const successStories = [
    {
      title: "University-Community Tree Planting",
      description: "Partnership between Haramaya University Environmental Club and local community resulted in planting 200 trees and establishing a community nursery.",
      icon: "🌳",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "EWCA Research Collaboration",
      description: "Joint biodiversity monitoring project with Ethiopian Wildlife Conservation Authority led to publication of research papers and conservation recommendations.",
      icon: "🔬",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Corporate Sustainability Partnership",
      description: "Local business provided funding and volunteers for campus recycling program, expanding reach to 5,000 students.",
      icon: "♻️",
      color: "from-blue-500 to-cyan-500"
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
              Practice Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Our
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Stakeholders
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Stakeholders are the people and institutions that influence, support, or benefit from environmental action.
              Building strong partnerships with diverse stakeholders is essential for successful environmental initiatives.
            </p>
          </div>
        </div>

        {/* Stakeholders Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${group.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

              <div className="relative z-10">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${group.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{group.icon}</span>
                  </div>
                  <h3 className="text-xl font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                    {group.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  {group.body}
                </p>

                {/* Engagement Strategies */}
                <div className="mb-4">
                  <div className="text-sm font-bold text-emerald-900 mb-2">Engagement Strategies:</div>
                  <ul className="space-y-1">
                    {group.engagement.map((strategy, idx) => (
                      <li key={idx} className={`flex items-start gap-2 rounded-lg bg-gradient-to-r ${group.bgColor} border border-emerald-200/30 px-3 py-2 text-xs text-slate-700`}>
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div>
                  <div className="text-sm font-bold text-emerald-900 mb-2">Examples:</div>
                  <ul className="space-y-1">
                    {group.examples.map((example, idx) => (
                      <li key={idx} className={`flex items-start gap-2 rounded-lg bg-gradient-to-r ${group.bgColor} border border-emerald-200/30 px-3 py-2 text-xs text-slate-700`}>
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

        {/* Stakeholder Engagement Framework */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Stakeholder Engagement Framework</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-2xl mx-auto">
                Our systematic approach to building and maintaining strong partnerships with all stakeholders.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {frameworkItems.map((item, index) => (
                <div
                  key={item.title}
                  className="group/item relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.color} shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-emerald-100 drop-shadow">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300"></span>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Success Stories</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Real partnerships that have made a difference in environmental conservation and community engagement.
            </p>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {successStories.map((story, index) => (
                <div
                  key={story.title}
                  className="group/story relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 p-6 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${story.color} shadow-lg mb-4 group-hover/story:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{story.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold text-emerald-950 mb-3">{story.title}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Partner With Us
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contact Stakeholders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;

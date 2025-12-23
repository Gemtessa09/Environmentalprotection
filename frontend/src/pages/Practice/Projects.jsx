import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Campus Waste Management Initiative",
      status: "Active",
      goal: "Achieve 50% waste diversion from landfill through comprehensive waste reduction and recycling program.",
      actions: ["Deploy recycling stations across campus", "Conduct waste audit and education campaigns", "Partner with local recycling facilities", "Monitor and report progress monthly"],
      impact: "Reduced waste to landfill by 35% in first year, educated 2,000+ students",
      duration: "2 years",
      budget: "25,000 ETB",
      icon: "♻️",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Urban Reforestation Project",
      status: "Completed",
      goal: "Plant 500 native trees to improve campus microclimate, biodiversity, and carbon sequestration.",
      actions: ["Select appropriate native species", "Organize community planting events", "Establish tree care and monitoring program", "Create educational signage"],
      impact: "Planted 520 trees, sequestered 50 tons CO2 annually, created wildlife habitats",
      duration: "1 year",
      budget: "15,000 ETB",
      icon: "🌳",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      title: "Water Conservation Program",
      status: "Active",
      goal: "Reduce campus water consumption by 20% through behavioral change and infrastructure improvements.",
      actions: ["Install water-saving fixtures", "Launch awareness campaigns", "Implement leak detection program", "Monitor water usage patterns"],
      impact: "Saved 100,000 liters monthly, reduced water bills by 15%",
      duration: "Ongoing",
      budget: "30,000 ETB",
      icon: "💧",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Biodiversity Monitoring Network",
      status: "Planning",
      goal: "Establish long-term monitoring of campus biodiversity to track environmental health indicators.",
      actions: ["Train student monitors", "Set up monitoring stations", "Develop data collection protocols", "Create biodiversity database"],
      impact: "Track 200+ species, inform conservation decisions, support research",
      duration: "3 years",
      budget: "50,000 ETB",
      icon: "🦋",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      title: "Sustainable Agriculture Initiative",
      status: "Active",
      goal: "Promote sustainable farming practices in university agricultural plots and local community.",
      actions: ["Implement organic farming methods", "Train farmers in sustainable techniques", "Monitor soil health and productivity", "Share best practices regionally"],
      impact: "Increased crop yields by 25%, improved soil health, reduced chemical use by 40%",
      duration: "2 years",
      budget: "40,000 ETB",
      icon: "🌾",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      title: "Renewable Energy Pilot",
      status: "Planning",
      goal: "Install solar panels on key campus buildings to demonstrate renewable energy potential.",
      actions: ["Conduct energy audit", "Design solar installation", "Secure funding and permits", "Install and monitor system performance"],
      impact: "Generate 50kW clean energy, reduce carbon emissions by 80 tons annually",
      duration: "1 year",
      budget: "200,000 ETB",
      icon: "☀️",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50"
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Active: "bg-green-100 text-green-800 border-green-200",
      Completed: "bg-blue-100 text-blue-800 border-blue-200",
      Planning: "bg-yellow-100 text-yellow-800 border-yellow-200",
      "On Hold": "bg-gray-100 text-gray-800 border-gray-200",
    };
    return colors[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const processSteps = [
    {
      step: 1,
      title: "Problem Identification",
      description: "Identify environmental issues through research, surveys, and stakeholder consultation.",
      icon: "🔍"
    },
    {
      step: 2,
      title: "Planning & Design",
      description: "Develop detailed project plans, secure funding, and assemble project teams.",
      icon: "📋"
    },
    {
      step: 3,
      title: "Implementation",
      description: "Execute project activities, monitor progress, and adapt as needed.",
      icon: "⚡"
    },
    {
      step: 4,
      title: "Evaluation & Learning",
      description: "Measure impacts, document lessons learned, and plan for sustainability.",
      icon: "📊"
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
              Environmental
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Our environmental projects translate knowledge into action. These initiatives demonstrate
              practical solutions to environmental challenges while building student skills and community partnerships.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

              <div className="relative z-10">
                {/* Header with Icon and Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold border ${getStatusColor(project.status)} shadow-sm`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Goal */}
                <div className="mb-4">
                  <div className="text-sm font-bold text-emerald-900 mb-2">Goal:</div>
                  <p className="text-sm text-slate-700 leading-relaxed">{project.goal}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                    <div className="font-bold text-slate-600">Duration</div>
                    <div className="text-slate-800 font-semibold">{project.duration}</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                    <div className="font-bold text-slate-600">Budget</div>
                    <div className="text-slate-800 font-semibold">{project.budget}</div>
                  </div>
                </div>

                {/* Key Actions */}
                <div className="mb-4">
                  <div className="text-sm font-bold text-emerald-900 mb-2">Key Actions:</div>
                  <div className="space-y-1">
                    {project.actions.slice(0, 2).map((action, idx) => (
                      <div key={idx} className={`rounded-lg bg-gradient-to-r ${project.bgColor} border border-emerald-200/30 px-3 py-2 text-xs text-slate-700`}>
                        {action}
                      </div>
                    ))}
                    {project.actions.length > 2 && (
                      <div className="text-xs text-slate-500 font-medium">+{project.actions.length - 2} more actions</div>
                    )}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <div className="text-sm font-bold text-emerald-900 mb-2">Impact:</div>
                  <p className="text-sm text-slate-700 leading-relaxed">{project.impact}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Project Development Process */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Project Development Process</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-2xl mx-auto">
                Our systematic approach ensures projects are well-planned, effectively implemented, and sustainable.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="group/step relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4 group-hover/step:scale-110 transition-transform duration-300">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-emerald-950 text-sm font-black mb-3 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">{step.title}</h3>
                    <p className="text-sm text-emerald-100 leading-relaxed drop-shadow">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Get Involved</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Interested in joining or proposing a new project? We welcome students, faculty, and community partners
              to collaborate on environmental initiatives.
            </p>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">🤝</div>
                <div className="text-lg font-bold text-emerald-950 mb-2">Join Existing Projects</div>
                <div className="text-sm text-slate-700">Volunteer for ongoing initiatives and gain hands-on experience.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">💡</div>
                <div className="text-lg font-bold text-emerald-950 mb-2">Propose New Projects</div>
                <div className="text-sm text-slate-700">Have an idea? Submit a project proposal for consideration.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">🤝</div>
                <div className="text-lg font-bold text-emerald-950 mb-2">Partner With Us</div>
                <div className="text-sm text-slate-700">Organizations can collaborate on joint environmental projects.</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View All Projects
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";

const FundingOpportunities = () => {
  const items = [
    {
      title: "Student Mini-Grants",
      amount: "Up to 5,000 ETB",
      deadline: "Rolling applications",
      body: "Small funding for cleanups, recycling pilots, awareness campaigns, and campus greening. Perfect for student-led initiatives.",
      note: "Prepare a short proposal: problem, plan, timeline, and expected impact.",
      eligibility: "All registered students",
      icon: "💰",
      category: "Student Grants"
    },
    {
      title: "Research & Innovation Support",
      amount: "10,000 - 25,000 ETB",
      deadline: "March 15 & September 15",
      body: "Support for student research projects related to biodiversity, water conservation, waste management, and climate resilience.",
      note: "Include supervisor endorsement and basic budget breakdown.",
      eligibility: "Undergraduate and graduate students with faculty supervision",
      icon: "🔬",
      category: "Research"
    },
    {
      title: "Community Partnership Funds",
      amount: "15,000 - 50,000 ETB",
      deadline: "April 30 & October 31",
      body: "Joint projects with local stakeholders including schools, community groups, and other campus units.",
      note: "Define roles, responsibilities, and long-term sustainability plan.",
      eligibility: "Student groups with community partners",
      icon: "🤝",
      category: "Community"
    },
    {
      title: "Green Technology Grants",
      amount: "20,000 - 100,000 ETB",
      deadline: "June 1",
      body: "Funding for innovative environmental technologies, renewable energy projects, and sustainable solutions.",
      note: "Technical feasibility study and prototype demonstration required.",
      eligibility: "Students and faculty with technical expertise",
      icon: "⚡",
      category: "Technology"
    },
    {
      title: "Conservation Fieldwork Fund",
      amount: "8,000 - 15,000 ETB",
      deadline: "May 20 & November 20",
      body: "Support for biodiversity surveys, habitat assessments, and conservation monitoring activities.",
      note: "Include research permits and safety protocols.",
      eligibility: "Students conducting field research",
      icon: "🌿",
      category: "Conservation"
    },
    {
      title: "Environmental Education Awards",
      amount: "3,000 - 10,000 ETB",
      deadline: "Ongoing",
      body: "Funding for workshops, seminars, awareness campaigns, and educational materials development.",
      note: "Focus on measurable educational outcomes.",
      eligibility: "Student organizations and clubs",
      icon: "📚",
      category: "Education"
    },
  ];

  const externalSources = [
    {
      title: "Ethiopian Organizations",
      sources: [
        "Ethiopian Wildlife Conservation Authority grants",
        "Ministry of Environment, Forest & Climate Change",
        "Addis Ababa University research funds",
        "Local NGO partnerships"
      ]
    },
    {
      title: "International Opportunities",
      sources: [
        "Small Grants Programme (SGP/UNDP)",
        "Rufford Foundation for nature conservation",
        "Mohamed bin Zayed Species Conservation Fund",
        "Critical Ecosystem Partnership Fund"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Prepare Your Proposal",
      description: "Clearly define your project goals, methods, timeline, budget, and expected impact."
    },
    {
      step: 2,
      title: "Get Required Approvals",
      description: "Obtain faculty advisor endorsement and any necessary permits for field work."
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Submit complete application package before deadline. Include all required documents."
    },
    {
      step: 4,
      title: "Project Implementation",
      description: "Execute project according to approved plan and submit progress reports as required."
    }
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
              <span className="mr-2">💰</span>
              Explore Funding
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Funding
              <span className="block text-emerald-200">Opportunities</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-emerald-100">
              Unlock resources for your environmental initiatives. From student mini-grants to major research funding, discover opportunities to bring your sustainability projects to life.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects Funded</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">500K+</div>
                  <div className="text-sm text-gray-600">ETB Distributed</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Active Initiatives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funding Opportunities Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Funding Programs</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the funding opportunity that best fits your environmental project</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative transform rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
                <div className="mt-2 text-lg font-semibold text-emerald-600">{item.amount}</div>
                <div className="mt-1 text-sm text-gray-500">Deadline: {item.deadline}</div>

                <p className="mt-3 text-gray-600 leading-relaxed">{item.body}</p>

                <div className="mt-4 rounded-lg bg-amber-50 p-3 border border-amber-200">
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">💡</span>
                    <div className="text-sm text-amber-800">
                      <span className="font-medium">Tip:</span> {item.note}
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Eligibility:</span> {item.eligibility}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* External Funding Sources */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">External Funding Sources</h2>
            <p className="mt-4 text-lg text-gray-600">Explore additional funding opportunities beyond university programs</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {externalSources.map((category, index) => (
              <div
                key={category.title}
                className="transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.sources.map((source, sourceIndex) => (
                    <li key={sourceIndex} className="flex items-center text-gray-700">
                      <div className="flex h-2 w-2 rounded-full bg-emerald-500 mr-3"></div>
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Application Process</h2>
          <p className="mt-4 text-lg text-gray-600">Follow these steps to successfully apply for funding</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="flex items-start space-x-4 transform rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-lg">
                {step.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="mt-4 text-xl text-emerald-100">
              Don't let funding constraints hold back your environmental initiatives. Apply today and make a difference.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="transform rounded-xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-50">
                Apply for Funding
              </button>
              <button className="transform rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white hover:text-emerald-600">
                Contact Advisors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingOpportunities;

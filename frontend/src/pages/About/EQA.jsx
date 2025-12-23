import React from "react";

const EQA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-16 shadow-2xl transform-gpu">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 text-sm font-bold text-white shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" clipRule="evenodd" />
              </svg>
              About EQA
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl">
              Environment Quality
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Authority
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg">
              Ethiopia's primary environmental regulatory body, ensuring sustainable environmental management
              and promoting biodiversity conservation across the nation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Regulatory Authority</span>
              </div>
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">National Coverage</span>
              </div>
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Biodiversity Focus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-emerald-950">Mission & Vision</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700">
                  EQA's mission is to protect and enhance Ethiopia's environment through effective regulation,
                  monitoring, and promotion of sustainable practices.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50">
                  <h3 className="font-bold text-emerald-950 mb-2">Our Mission</h3>
                  <p className="text-slate-700">Protect and enhance Ethiopia's environment through effective regulation and sustainable practices.</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700">
                  The vision is to create a clean, healthy, and sustainable environment that supports economic
                  development and improves quality of life for all Ethiopians.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-200/50">
                  <h3 className="font-bold text-emerald-950 mb-2">Our Vision</h3>
                  <p className="text-slate-700">A clean, healthy, and sustainable environment supporting economic development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Responsibilities & Programs */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Responsibilities */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Key Responsibilities</h3>
              </div>

              <div className="space-y-3">
                {[
                  "Environmental impact assessment and permitting",
                  "Monitoring air, water, and soil quality",
                  "Enforcement of environmental laws and regulations",
                  "Climate change adaptation and mitigation programs",
                  "Biodiversity conservation and protected areas management"
                ].map((responsibility, index) => (
                  <div key={index} className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="font-semibold text-slate-800">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Programs and Initiatives */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Programs & Initiatives</h3>
              </div>

              <div className="space-y-3">
                {[
                  "National Biodiversity Strategy and Action Plan implementation",
                  "Environmental education and awareness campaigns",
                  "Clean Development Mechanism projects",
                  "Waste management and pollution control programs",
                  "Community-based conservation initiatives"
                ].map((program, index) => (
                  <div key={index} className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="font-semibold text-slate-800">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration and Partnerships */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-black text-white drop-shadow-lg">Collaboration & Partnerships</h2>
                <p className="text-emerald-100 mt-1">Working together for environmental excellence</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Institutional Partnerships</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    EQA works closely with universities, NGOs, international organizations, and local communities
                    to achieve environmental goals.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">University Collaboration</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Partnerships with institutions like Haramaya University enable research, capacity building,
                    and joint conservation projects.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Government Coordination</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    EQA coordinates with the Ministry of Environment, Forest and Climate Change to align
                    national environmental policies with global commitments.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Global Alignment</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Ensuring national policies align with international environmental agreements and commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typical Roles */}
        <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m0 0V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Typical Roles & Functions</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "📢", text: "Promote environmental awareness and education" },
                { icon: "🌿", text: "Support national and local conservation initiatives" },
                { icon: "🤝", text: "Coordinate information sharing and reporting" },
                { icon: "🏫", text: "Encourage participation from schools and communities" }
              ].map((role, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 transition-all duration-300 group/item">
                  <span className="text-3xl group-hover/item:scale-110 transition-transform duration-300">{role.icon}</span>
                  <span className="font-semibold text-slate-800">{role.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-black text-white mb-4 drop-shadow-lg">Partner with EQA</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Join Ethiopia's environmental regulatory authority in protecting and enhancing our natural environment.
            </p>
            <button className="px-8 py-4 bg-white text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn More About Partnerships
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EQA;

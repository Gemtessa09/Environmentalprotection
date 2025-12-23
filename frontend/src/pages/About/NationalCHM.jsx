import React from "react";

const NationalCHM = () => {
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
              About National CHM
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl">
              National
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Clearing-House Mechanism
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg">
              A global network established under the Convention on Biological Diversity (CBD) to facilitate
              the exchange of biodiversity information and promote technical and scientific cooperation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Global Network</span>
              </div>
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Information Hub</span>
              </div>
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">CBD Framework</span>
              </div>
            </div>
          </div>
        </div>

        {/* What is the CHM Section */}
        <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-emerald-950">What is the CHM?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700">
                  The CHM is an information-sharing mechanism that connects biodiversity stakeholders worldwide.
                  It serves as a platform for accessing and sharing data, tools, and best practices related to biodiversity conservation.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50">
                  <h3 className="font-bold text-emerald-950 mb-2">Global Platform</h3>
                  <p className="text-slate-700">Connects biodiversity stakeholders worldwide for information sharing and collaboration.</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700">
                  Each country has its own National CHM focal point, which coordinates with the global network
                  to ensure that local biodiversity information is accessible to decision-makers, researchers, and the public.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-200/50">
                  <h3 className="font-bold text-emerald-950 mb-2">National Focal Points</h3>
                  <p className="text-slate-700">Each country coordinates through dedicated focal points for local biodiversity information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Functions & Components */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Functions */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Key Functions</h3>
              </div>

              <div className="space-y-3">
                {[
                  "Facilitate access to biodiversity data and information",
                  "Support capacity building and technology transfer",
                  "Promote collaboration between stakeholders",
                  "Monitor implementation of biodiversity commitments",
                  "Provide tools for biodiversity assessment and planning"
                ].map((function_, index) => (
                  <div key={index} className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="font-semibold text-slate-800">{function_}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Components</h3>
              </div>

              <div className="space-y-3">
                {[
                  "National focal points and networks",
                  "Online portals and databases",
                  "Training programs and workshops",
                  "Partnerships with research institutions",
                  "Communication and outreach materials"
                ].map((component, index) => (
                  <div key={index} className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="font-semibold text-slate-800">{component}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ethiopia's National CHM */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-black text-white drop-shadow-lg">Ethiopia's National CHM</h2>
                <p className="text-emerald-100 mt-1">Coordinated by EQA for biodiversity information excellence</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Central Hub</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Ethiopia's National CHM is coordinated by the Environment Quality Authority (EQA) in collaboration
                    with the Ministry of Environment, Forest and Climate Change.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Information Access</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    It serves as a central hub for biodiversity information in Ethiopia, providing access to
                    national biodiversity strategies, research findings, and conservation initiatives.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Global Commitments</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    The National CHM supports Ethiopia's efforts to meet its commitments under the Convention
                    on Biological Diversity and other international agreements.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Research & Strategy</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Provides access to biodiversity strategies, research findings, and conservation initiatives
                    for decision-makers and stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose & Benefits for Clubs */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Purpose */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Purpose</h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "📊", text: "Share reliable biodiversity data and resources" },
                  { icon: "🎓", text: "Support education, research, and decision-making" },
                  { icon: "📄", text: "Make national reports and strategies easier to access" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 transition-all duration-300 group/item">
                    <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="font-semibold text-slate-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How clubs benefit */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">How Clubs Benefit</h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "📚", text: "Find learning materials and policy documents" },
                  { icon: "💡", text: "Discover projects and funding opportunities" },
                  { icon: "🤝", text: "Coordinate activities and share results" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-cyan-50 transition-all duration-300 group/item">
                    <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="font-semibold text-slate-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-black text-white mb-4 drop-shadow-lg">Access CHM Resources</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Connect with Ethiopia's biodiversity information network and access valuable resources for conservation and research.
            </p>
            <button className="px-8 py-4 bg-white text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalCHM;

import React from "react";

const HaramayaUniversity = () => {
  return (
    <div className="min-h-screen bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-16 shadow-2xl transform-gpu group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/haramayauniversityphoto2.jpg" 
              alt="Haramaya University Background" 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 via-green-900/50 to-teal-900/60"></div>
          </div>

          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 text-sm font-bold text-white shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" clipRule="evenodd" />
              </svg>
              About Haramaya University
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl">
              Haramaya
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                University
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg">
              A premier public research university in Ethiopia, leading innovation in agricultural sciences,
              environmental studies, and sustainable community development since 1954.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">20,000+ Students</span>
              </div>
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">1,000+ Hectares</span>
              </div>
              <div className="flex items-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Founded 1954</span>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Images Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-80 overflow-hidden rounded-3xl shadow-2xl group">
            <img
              src="/haramayauniversityphoto2.jpg"
              alt="Haramaya University Main Gate"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Main Campus</h3>
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-3xl shadow-2xl group">
            <img
              src="/haramayauniversityphoto3.jpg"
              alt="Haramaya University Landscape"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Green Campus Initiative</h3>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-emerald-950">History & Legacy</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700">
                  Founded in 1954 as the Imperial College of Agricultural and Mechanical Arts, Haramaya University
                  has evolved from a small agricultural college into a comprehensive university with over 20,000 students.
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                  It played a pivotal role in Ethiopia's agricultural revolution and continues to lead in research on
                  climate-resilient farming, soil conservation, and environmental management.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50">
                  <h3 className="font-bold text-emerald-950 mb-2">Campus Size</h3>
                  <p className="text-2xl font-black text-emerald-600">1,000+ Hectares</p>
                  <p className="text-sm text-slate-600 mt-1">Agricultural experiments, botanical gardens, wildlife habitats</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-200/50">
                  <h3 className="font-bold text-emerald-950 mb-2">Student Population</h3>
                  <p className="text-2xl font-black text-green-600">20,000+</p>
                  <p className="text-sm text-slate-600 mt-1">Diverse community of learners and researchers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Programs & Research */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Academic Programs */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Academic Programs</h3>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Haramaya University offers comprehensive programs in agriculture, veterinary medicine, environmental science, and related fields.
              </p>

              <div className="space-y-3">
                {[
                  "Agriculture and Environmental Sciences",
                  "Veterinary Medicine",
                  "Natural Resources and Environmental Sciences",
                  "Forestry and Wildlife Management",
                  "Water Resources and Irrigation Engineering"
                ].map((program, index) => (
                  <div key={index} className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="font-semibold text-slate-800">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Excellence */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Research Excellence</h3>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Renowned for groundbreaking research in sustainable agriculture and environmental conservation.
              </p>

              <div className="space-y-3">
                {[
                  "Climate-smart agriculture",
                  "Biodiversity conservation",
                  "Soil and water management",
                  "Renewable energy solutions",
                  "Community-based natural resource management"
                ].map((research, index) => (
                  <div key={index} className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="font-semibold text-slate-800">{research}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Initiatives */}
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
                <h2 className="text-3xl font-black text-white drop-shadow-lg">Environmental Initiatives</h2>
                <p className="text-emerald-100 mt-1">Leading sustainability efforts in Ethiopia</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Campus Sustainability</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    The campus features extensive green spaces, including the Haramaya Forest, serving as a living laboratory for students and researchers.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Community Programs</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Implemented waste management systems, renewable energy installations, and outreach programs engaging local farmers and schools.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Global Partnerships</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Collaborates with international organizations and government agencies to contribute to UN Sustainable Development Goals.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">National Strategy</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Supports Ethiopia's Climate Resilient Green Economy strategy through innovative research and community action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What We Do */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">What We Do</h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "📚", text: "Environmental education and awareness" },
                  { icon: "🤝", text: "Student-led projects and volunteering" },
                  { icon: "🔬", text: "Research and innovation for sustainability" },
                  { icon: "🌱", text: "Partnership with community stakeholders" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 transition-all duration-300 group/item">
                    <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="font-semibold text-slate-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How to Get Involved */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">How to Get Involved</h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "🌿", text: "Join environmental club activities" },
                  { icon: "🧹", text: "Volunteer for cleanup and tree planting" },
                  { icon: "💡", text: "Share ideas for new projects" },
                  { icon: "📸", text: "Help document biodiversity on campus" }
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
            <h3 className="text-2xl font-black text-white mb-4 drop-shadow-lg">Join Our Mission</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Be part of Haramaya University's environmental legacy. Together, we can create a sustainable future for Ethiopia and beyond.
            </p>
            <button className="px-8 py-4 bg-white text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Involved Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaramayaUniversity;

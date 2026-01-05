import React from "react";

const EnvironmentalProtectionCenter = () => {
  return (
    <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/haramayauniversityphoto2.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'; // Fallback if image missing
          }}
        />
        <div className="absolute inset-0 bg-emerald-900/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="mx-auto h-32 w-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 p-2">
               <img 
                src="/hulcsalogo.jpg" 
                alt="EPC Logo" 
                className="h-full w-full object-contain rounded-full"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/150?text=EPC";
                }}
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Environmental Protection Center
            </h1>
            <p className="text-emerald-100 text-lg">
              Haramaya University
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-10">
          
          {/* Need for Establishment */}
          <section>
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Need for Establishment</h2>
            </div>
            <div className="prose prose-emerald text-gray-600 leading-relaxed">
              <p>
                Ethiopia faces serious environmental problems like: soil erosion, deforestation, water shortages, that threaten livelihoods and development. Aside from the FEPA and some regional environmental authority and NGOs there is no single permanent institution in higher education devoted to environmental policy issues. The Center fills this gap by providing legal scholarship, research, and community outreach to strengthen environmental protection nationwide.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Mission</h2>
            </div>
            <p className="text-gray-700 italic text-lg border-l-4 border-emerald-500 pl-4">
              "To protect the natural environment of Ethiopia by linking national environmental policy to local action; promoting scholarship on environmental law; bringing together academics, practitioners, and policy makers to discuss major environmental issues; and increasing public awareness of environmental laws and regulations."
            </p>
          </section>

          {/* Objectives */}
          <section>
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Objectives of the Center</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-1">
              {/* Objective 1 */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">1. Improve Legal Education</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                  <li>Integrate current environmental research into law curricula.</li>
                  <li>Engage students in seminars, lecture series, and research projects.</li>
                </ul>
              </div>

              {/* Objective 2 */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">2. Conduct Environmental Law & Policy Research</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                  <li>Study land tenure, watershed management, sustainable development, trade & environment, gender impacts, and more.</li>
                  <li>Host symposia and support fellows to influence national environmental policy.</li>
                </ul>
              </div>

              {/* Objective 3 */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">3. Promote Public Compliance & Stewardship</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                  <li>Educate farmers, pastoralists, and local officials on laws and best practices.</li>
                  <li>Provide training, workshops, and legal consultations.</li>
                  <li>Encourage citizen enforcement of environmental laws and support alternative dispute resolution for natural-resource conflicts.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Constitution PDF Download */}
          <section className="mt-8 pt-8 border-t border-gray-200">
             <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-bold text-blue-800">Constitution of EPC</h3>
                  <p className="text-blue-600 text-sm">Download the full establishment document and constitution.</p>
                </div>
                <a 
                  href="/Constitution of EPC.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
             </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default EnvironmentalProtectionCenter;

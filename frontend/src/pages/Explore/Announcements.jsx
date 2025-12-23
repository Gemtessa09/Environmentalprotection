import React from "react";

const Announcements = () => {
  const announcements = [
    {
      title: "Campus Cleanup Day",
      date: "Next Saturday, 9 AM - 12 PM",
      body: "Join volunteers to clean pathways, green spaces, and gathering areas. Bring gloves if you can. Meet at the main campus entrance. Contact: environmental.club@hau.edu.et for more info.",
      category: "Event",
      icon: "🧹",
      color: "from-blue-500 to-cyan-500",
      priority: "high"
    },
    {
      title: "Tree Planting Weekend",
      date: "This month, Saturday & Sunday",
      body: "We will plant native and climate-resilient seedlings and set up a care schedule for watering. Learn about local flora and sustainable gardening practices. Volunteers needed for digging and planting.",
      category: "Workshop",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
      priority: "high"
    },
    {
      title: "Recycling Drive",
      date: "Ongoing until end of semester",
      body: "Collect plastics, paper, and e-waste. Drop-off points will be announced per dorm/building. Special collection for electronics to prevent hazardous waste. Points system for participants!",
      category: "Campaign",
      icon: "♻️",
      color: "from-amber-500 to-orange-500",
      priority: "medium"
    },
    {
      title: "Environmental Awareness Seminar",
      date: "Next Wednesday, 2 PM - 4 PM",
      body: "Guest speaker from Ethiopian Wildlife Conservation Authority will discuss current conservation challenges in Ethiopia. Open to all students. Certificate of participation available.",
      category: "Seminar",
      icon: "🎤",
      color: "from-purple-500 to-pink-500",
      priority: "high"
    },
    {
      title: "Biodiversity Survey Training",
      date: "Two weeks from now, Full day",
      body: "Hands-on training for identifying local species, using survey tools, and data collection methods. Essential for our ongoing biodiversity monitoring projects. Limited spots available.",
      category: "Training",
      icon: "🔬",
      color: "from-indigo-500 to-blue-500",
      priority: "medium"
    },
    {
      title: "Green Campus Competition",
      date: "Monthly throughout semester",
      body: "Dorms and departments compete for the most sustainable practices. Categories include waste reduction, energy conservation, and green initiatives. Winner gets recognition and small prizes.",
      category: "Competition",
      icon: "🏆",
      color: "from-red-500 to-pink-500",
      priority: "medium"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
    }
  };

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              Explore Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Latest
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Announcements
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Official notices and calls to action for students and volunteers. Stay updated with our latest
              environmental initiatives, events, and opportunities to get involved in campus sustainability efforts.
            </p>
          </div>
        </div>

        {/* Announcements Grid */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Current Announcements</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Check out our latest events, workshops, and initiatives. Get involved and make a difference!
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((announcement, index) => (
              <div
                key={announcement.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${announcement.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${announcement.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-xl">{announcement.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                          {announcement.title}
                        </h3>
                        <div className="text-xs text-slate-500 mt-1">{announcement.date}</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold border ${getPriorityColor(announcement.priority)}`}>
                        {announcement.category}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm group-hover:text-slate-800 transition-colors duration-300">
                    {announcement.body}
                  </p>

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

        {/* Quick Stats */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Get Involved</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-3xl mx-auto">
                Join our community of environmental champions and make a real impact on campus sustainability.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4 text-center">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-black text-white drop-shadow-lg mb-2">50+</div>
                <div className="text-emerald-100 drop-shadow text-sm">Active Volunteers</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-black text-white drop-shadow-lg mb-2">12</div>
                <div className="text-emerald-100 drop-shadow text-sm">Monthly Events</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-black text-white drop-shadow-lg mb-2">5</div>
                <div className="text-emerald-100 drop-shadow text-sm">Ongoing Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-black text-white drop-shadow-lg mb-2">100%</div>
                <div className="text-emerald-100 drop-shadow text-sm">Student Driven</div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Stay Updated</h3>
            </div>

            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to never miss an important announcement or opportunity to get involved.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe to Newsletter
              </button>
              <button className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

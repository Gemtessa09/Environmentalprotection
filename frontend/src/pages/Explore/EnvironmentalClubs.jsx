import React, { useEffect, useMemo, useState } from "react";
import ClubCard from "../../components/ClubCard";
import { useClubs } from "../../context/ClubContext";
import { memberService } from "../../services/memberService";

const EnvironmentalClubs = () => {
  const { allClubs, refreshAll, loading, error } = useClubs();
  const [submitted, setSubmitted] = useState(false);
  const [joinError, setJoinError] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "Member", joinReason: "" });

  useEffect(() => {
    refreshAll();
  }, []);

  const clubsToShow = useMemo(() => {
    if (allClubs && allClubs.length) return allClubs;
    return [];
  }, [allClubs]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setJoinError(null);
    setSubmitted(false);
    try {
      await memberService.join(form);
      setSubmitted(true);
      setForm({ name: "", email: "", role: "Member", joinReason: "" });
    } catch (err) {
      setJoinError("Could not submit. Please try again.");
    }
  };

  const benefits = [
    {
      title: "Leadership Skills",
      icon: "👑",
      color: "from-purple-500 to-pink-500",
      description: "Develop leadership and teamwork skills through organizing events and activities."
    },
    {
      title: "Practical Experience",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
      description: "Gain hands-on environmental experience with real-world conservation projects."
    },
    {
      title: "Professional Network",
      icon: "🤝",
      color: "from-blue-500 to-cyan-500",
      description: "Connect with environmental professionals, NGOs, and like-minded individuals."
    },
    {
      title: "Community Impact",
      icon: "❤️",
      color: "from-red-500 to-pink-500",
      description: "Make a tangible difference in your community and campus environment."
    },
    {
      title: "Resume Building",
      icon: "📄",
      color: "from-amber-500 to-orange-500",
      description: "Enhance your resume with valuable volunteer experience and achievements."
    }
  ];

  const activities = [
    {
      title: "Campus Cleanup",
      icon: "🧹",
      description: "Regular cleanup drives to maintain clean and green campus spaces."
    },
    {
      title: "Tree Planting",
      icon: "🌳",
      description: "Community tree planting events to increase green cover and biodiversity."
    },
    {
      title: "Awareness Campaigns",
      icon: "📢",
      description: "Educational campaigns on environmental issues and sustainable living."
    },
    {
      title: "Biodiversity Monitoring",
      icon: "🔬",
      description: "Scientific monitoring of local wildlife and ecosystem health."
    },
    {
      title: "Workshops",
      icon: "🎓",
      description: "Educational workshops on sustainable practices and environmental topics."
    }
  ];

  const successStories = [
    {
      title: "Campus Recycling Program",
      icon: "♻️",
      achievement: "Reduced waste by 40%",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tree Planting Drive",
      icon: "🌳",
      achievement: "Planted 500+ native trees",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Water Conservation",
      icon: "💧",
      achievement: "Saved 10,000 liters monthly",
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
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Explore Section
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl mb-6">
              Environmental
              <span className="block bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                Clubs
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-emerald-100 drop-shadow-lg mx-auto">
              Environmental clubs support awareness, learning, and practical action for biodiversity and a cleaner campus.
              Join our community of environmental champions making a difference.
            </p>
          </div>
        </div>

        {/* What is an Environmental Club */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-emerald-950">What is an Environmental Club?</h2>
            </div>

            <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">
              An environmental club is a student-led group that promotes environmental awareness, encourages responsible
              behavior, and organizes practical activities that protect biodiversity and improve the local environment.
              In Ethiopia, these clubs are particularly important for addressing issues like deforestation, water conservation,
              and climate change adaptation.
            </p>
          </div>
        </div>

        {/* Benefits of Joining */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-emerald-950 mb-4">Benefits of Joining</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Discover the many advantages of becoming part of our environmental community.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{benefit.icon}</span>
                    </div>
                    <h3 className="text-lg font-black text-emerald-950 group-hover:text-emerald-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm group-hover:text-slate-800 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities and Success Stories */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Typical Activities */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-white drop-shadow-lg mb-2">Typical Activities</h3>
                <p className="text-emerald-100 drop-shadow-lg text-sm">
                  Hands-on experiences that make a real difference
                </p>
              </div>

              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={activity.title}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg">
                      <span className="text-xl">{activity.icon}</span>
                    </div>
                    <div>
                      <div className="text-white drop-shadow-lg font-bold text-sm">{activity.title}</div>
                      <div className="text-emerald-100 drop-shadow text-xs">{activity.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-emerald-950 mb-2">Success Stories</h3>
              <p className="text-slate-700 text-sm">
                Real impact from our environmental initiatives
              </p>
            </div>

            <div className="space-y-4">
              {successStories.map((story, index) => (
                <div
                  key={story.title}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/30 hover:bg-emerald-50/70 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${story.color} shadow-lg`}>
                    <span className="text-xl">{story.icon}</span>
                  </div>
                  <div>
                    <div className="text-emerald-950 font-bold text-sm">{story.title}</div>
                    <div className="text-emerald-700 text-xs">{story.achievement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Initiatives */}
        <div className="text-center">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-emerald-950">All Initiatives</h2>
            <button
              type="button"
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={refreshAll}
            >
              Refresh
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-center">
              {error}
            </div>
          )}

          {loading && !clubsToShow.length ? (
            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl text-center">
              <div className="inline-flex items-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
                <span className="text-slate-700">Loading clubs...</span>
              </div>
            </div>
          ) : clubsToShow.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clubsToShow.map((club) => (
                <ClubCard key={club._id} club={club} />
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-2xl text-center">
              <div className="text-slate-700">No clubs found in the database yet.</div>
            </div>
          )}
        </div>

        {/* Join the Club Form */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu hover:scale-[1.01]">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white drop-shadow-lg mb-4">Join Our Community</h2>
              <p className="text-emerald-100 drop-shadow-lg max-w-2xl mx-auto">
                Fill the form and we will contact you about upcoming activities. Whether you're a freshman interested in learning
                or an experienced environmentalist, there's a place for you in our community.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50/20 backdrop-blur-md border border-emerald-200/30 text-center">
                <div className="text-emerald-100 drop-shadow-lg font-bold">Submitted! Thank you for joining.</div>
              </div>
            )}

            {joinError && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50/20 backdrop-blur-md border border-red-200/30 text-center">
                <div className="text-red-100 drop-shadow-lg font-bold">{joinError}</div>
              </div>
            )}

            <form onSubmit={onSubmit} className="max-w-4xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-white drop-shadow-lg font-bold">Full Name</label>
                  <input
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-emerald-200 focus:border-white/40 focus:outline-none transition-all duration-300"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-white drop-shadow-lg font-bold">Email</label>
                  <input
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-emerald-200 focus:border-white/40 focus:outline-none transition-all duration-300"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-white drop-shadow-lg font-bold">Role</label>
                  <select
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:border-white/40 focus:outline-none transition-all duration-300"
                    value={form.role}
                    onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                  >
                    <option className="text-emerald-950">Member</option>
                    <option className="text-emerald-950">Volunteer</option>
                    <option className="text-emerald-950">Coordinator</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="block text-white drop-shadow-lg font-bold">Why do you want to join?</label>
                  <textarea
                    className="w-full px-4 py-3 h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-emerald-200 focus:border-white/40 focus:outline-none transition-all duration-300 resize-none"
                    value={form.joinReason}
                    onChange={(e) => setForm((f) => ({ ...f, joinReason: e.target.value }))}
                    placeholder="Tell us about your interest in environmental conservation"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-emerald-950 font-black rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Join Our Community
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalClubs;
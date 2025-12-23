import React, { useMemo, useState } from "react";

const LatestNews = () => {
  const posts = useMemo(
    () => [
      {
        title: "Green Campus milestone",
        date: "This week",
        category: "Achievement",
        body: "Volunteers improved waste sorting in key campus zones and ran awareness sessions for new students. Over 200 students participated in the waste sorting training, resulting in a 30% increase in proper waste segregation across main campus areas.",
        author: "Environmental Club Team",
        icon: "🌱",
        readTime: "3 min read"
      },
      {
        title: "Biodiversity walk",
        date: "This month",
        category: "Event",
        body: "A guided walk documented campus bird species and highlighted habitat protection practices. Participants identified 25 different bird species and learned about the importance of urban green spaces for biodiversity conservation.",
        author: "Dr. Abebe Kebede",
        icon: "🦅",
        readTime: "4 min read"
      },
      {
        title: "Water conservation campaign",
        date: "Ongoing",
        category: "Campaign",
        body: "Students promoted water-saving habits and shared quick tips across dorms and classrooms. The campaign has already saved an estimated 5,000 liters of water through simple behavioral changes and infrastructure improvements.",
        author: "Water Conservation Committee",
        icon: "💧",
        readTime: "2 min read"
      },
      {
        title: "Tree Planting Initiative Success",
        date: "Last month",
        category: "Achievement",
        body: "The annual tree planting drive planted 150 native trees around campus. Students from various departments participated, learning about local tree species and proper planting techniques. The initiative is part of our reforestation efforts.",
        author: "Haramaya University Environmental Club",
        icon: "🌳",
        readTime: "5 min read"
      },
      {
        title: "Climate Change Workshop",
        date: "Two weeks ago",
        category: "Education",
        body: "Guest speaker from Ethiopian Meteorological Agency presented on climate change impacts in Ethiopia. The workshop covered adaptation strategies, renewable energy options, and community resilience building.",
        author: "Climate Action Group",
        icon: "🌡️",
        readTime: "6 min read"
      },
      {
        title: "Recycling Program Expansion",
        date: "Last week",
        category: "Update",
        body: "New recycling stations installed in all major buildings. The program now accepts paper, plastic, glass, and electronics. Training sessions for building managers completed, ensuring proper collection and sorting.",
        author: "Waste Management Team",
        icon: "♻️",
        readTime: "3 min read"
      },
    ],
    []
  );

  const [active, setActive] = useState(posts[0]);

  const getCategoryColor = (category) => {
    const colors = {
      Achievement: "bg-green-100 text-green-800 border-green-200",
      Event: "bg-blue-100 text-blue-800 border-blue-200",
      Campaign: "bg-purple-100 text-purple-800 border-purple-200",
      Education: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Update: "bg-gray-100 text-gray-800 border-gray-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const nationalNews = [
    "Ethiopia launches new climate resilience strategy",
    "Green Legacy Initiative reaches 350 million trees planted",
    "New environmental regulations for industries",
    "International partnerships for biodiversity conservation"
  ];

  const regionalNews = [
    "Oromia region expands protected areas network",
    "Dire Dawa implements waste-to-energy project",
    "Awash National Park restoration efforts",
    "Community-led conservation in Bale Mountains"
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
              <span className="mr-2">📰</span>
              Latest News
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Environmental
              <span className="block text-emerald-200">News & Updates</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-emerald-100">
              Stay informed about our latest environmental initiatives, achievements, and upcoming events. Discover how we're making a difference in sustainability and conservation.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">30%</div>
                  <div className="text-sm text-gray-600">Waste Reduction</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <span className="text-2xl">🌳</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">150</div>
                  <div className="text-sm text-gray-600">Trees Planted</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                  <span className="text-2xl">💧</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">5K L</div>
                  <div className="text-sm text-gray-600">Water Saved</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <span className="text-2xl">🦅</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">25</div>
                  <div className="text-sm text-gray-600">Bird Species</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured News & Recent Updates */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="transform rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                  {active.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-emerald-800">{active.date}</span>
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${getCategoryColor(active.category)}`}>
                      {active.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{active.readTime}</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">{active.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{active.body}</p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">By:</span> {active.author}
                </div>
                <button className="transform rounded-xl bg-emerald-600 px-6 py-3 text-white font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-700">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>

          {/* Recent Updates Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Updates</h3>
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <button
                    key={post.title}
                    type="button"
                    onClick={() => setActive(post)}
                    className={`w-full transform rounded-2xl border p-4 text-left shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      active.title === post.title
                        ? "border-emerald-500 bg-emerald-50 shadow-lg"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-lg">
                        {post.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-emerald-800">{post.date}</span>
                          <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 truncate">{post.title}</h4>
                        <div className="text-xs text-gray-500 mt-1">{post.readTime}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental News from Ethiopia */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Environmental News from Ethiopia</h2>
            <p className="mt-4 text-lg text-gray-600">Stay updated with national and regional environmental developments</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 mr-4">
                  <span className="text-2xl">🇪🇹</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">National Developments</h3>
              </div>
              <ul className="space-y-3">
                {nationalNews.map((news, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="flex h-2 w-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{news}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mr-4">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Regional Updates</h3>
              </div>
              <ul className="space-y-3">
                {regionalNews.map((news, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="flex h-2 w-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{news}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Stay Connected</h2>
            <p className="mt-4 text-xl text-emerald-100">
              Never miss an important environmental update. Subscribe to our newsletter and join our community.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="transform rounded-xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-50">
                Subscribe to Newsletter
              </button>
              <button className="transform rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white hover:text-emerald-600">
                Follow Our Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

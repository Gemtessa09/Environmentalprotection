import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../services/http";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await http.post("/auth/login", { email, password });
      
      // Save token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.member));

      // Redirect based on role
      if (data.member.role === "Admin") {
        navigate("/admin");
      } else if (data.member.role === "Staff") {
        navigate("/staff");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

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
              <span className="mr-2">🔐</span>
              Member Login
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome
              <span className="block text-emerald-200">Back</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-emerald-100">
              Access your account with your email and password. Join our community of environmental enthusiasts and contribute to a sustainable future.
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
                  <span className="text-2xl">�</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">Personal</div>
                  <div className="text-sm text-gray-600">Account</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">Community</div>
                  <div className="text-sm text-gray-600">Access</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">Resources</div>
                  <div className="text-sm text-gray-600">& Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="transform rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 mb-4">
              <span className="text-3xl">�</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Member Login</h2>
            <p className="mt-2 text-gray-600">
              Sign in to your account to access member features and contribute to environmental conservation efforts.
            </p>
          </div>

          {error && (
            <div className="mb-6 transform rounded-2xl border border-red-200 bg-red-50 p-4 text-center shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 mr-3">
                  <span className="text-lg">❌</span>
                </div>
                <span className="text-red-800 font-medium">{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-lg"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <span className="text-gray-400">📧</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-lg"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <span className="text-gray-400">🔐</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="submit"
                disabled={loading}
                className="transform rounded-xl bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">{loading ? "⏳" : "🚀"}</span>
                  {loading ? "Signing In..." : "Sign In"}
                </span>
              </button>

            </div>
          </form>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 border border-amber-200">
            <div className="flex items-start">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 mr-3 mt-0.5">
                <span className="text-amber-600 text-sm">ℹ️</span>
              </div>
              <div className="text-sm text-amber-800">
                <div className="font-medium mb-1">Account Information</div>
                <div className="leading-relaxed">
                  Your login credentials are stored locally in your browser for convenience. This allows you to access member features and contribute to environmental conservation initiatives.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Member Benefits</h2>
            <p className="mt-4 text-lg text-gray-600">What you can access as a registered member</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="transform rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Community Access</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect with fellow environmental enthusiasts, join discussions, and participate in conservation initiatives.
              </p>
            </div>

            <div className="transform rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mr-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Exclusive Resources</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access premium content, research materials, and tools for environmental education and conservation.
              </p>
            </div>

            <div className="transform rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Collaboration</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Join projects, share ideas, and collaborate with environmental organizations and experts worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Join the Community?</h2>
            <p className="mt-4 text-xl text-emerald-100">
              Sign in with your email and password to access member features and contribute to environmental conservation.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-white border border-white/20">
                <span className="mr-2">🌱</span>
                <span className="text-sm font-medium">Environmental Community Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

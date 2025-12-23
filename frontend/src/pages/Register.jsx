import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    studentId: "",
    phone: "",
    interests: []
  });
  const [registered, setRegistered] = useState(false);
  const [errors, setErrors] = useState({});

  const departments = [
    "Biology",
    "Environmental Science",
    "Forestry",
    "Agriculture",
    "Geography",
    "Chemistry",
    "Other"
  ];

  const interests = [
    "Biodiversity Conservation",
    "Climate Change",
    "Waste Management",
    "Water Conservation",
    "Sustainable Agriculture",
    "Environmental Education",
    "Wildlife Photography",
    "Community Outreach"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.department) newErrors.department = "Department is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Registration data:", formData);
      setRegistered(true);
      setTimeout(() => setRegistered(false), 3000);
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
              <span className="mr-2">👥</span>
              Join Our Community
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Become a
              <span className="block text-emerald-200">Member</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-emerald-100">
              Join the Haramaya University Environmental Club and be part of the movement for a sustainable future.
              Connect with like-minded students and make a real impact.
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
                  <span className="text-2xl">👥</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Departments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="transform rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 mb-4">
              <span className="text-3xl">📝</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below to become a member of the Haramaya University Environmental Club
            </p>
          </div>

          {registered && (
            <div className="mb-6 transform rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 mr-3">
                  <span className="text-lg">✅</span>
                </div>
                <span className="text-emerald-800 font-medium">Registration successful! Welcome to our community!</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:shadow-lg ${
                    errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:shadow-lg ${
                    errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:shadow-lg ${
                    errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                  }`}
                  placeholder="your.email@haramaya.edu.et"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-lg"
                  placeholder="+251 XXX XXX XXX"
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Department *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:shadow-lg ${
                    errors.department ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                  }`}
                >
                  <option value="">Select your department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                {errors.department && <p className="mt-1 text-sm text-red-600">{errors.department}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Student ID
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-lg"
                  placeholder="HU/XXX/XX/XXXX"
                />
              </div>
            </div>

            {/* Password */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:shadow-lg ${
                    errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                  }`}
                  placeholder="Create a strong password"
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:shadow-lg ${
                    errors.confirmPassword ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500/20'
                  }`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-4">
                Areas of Interest (Select all that apply)
              </label>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {interests.map(interest => (
                  <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-6">
              <button
                type="submit"
                className="transform rounded-xl bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">🎉</span>
                  Create Account
                </span>
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="transform rounded-xl border-2 border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">⬅️</span>
                  Go Back
                </span>
              </button>
            </div>
          </form>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border border-blue-200">
            <div className="flex items-start">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 mr-3 mt-0.5">
                <span className="text-blue-600 text-sm">ℹ️</span>
              </div>
              <div className="text-sm text-blue-800">
                <div className="font-medium mb-1">Membership Benefits</div>
                <div className="leading-relaxed">
                  As a member, you'll have access to exclusive events, workshops, field trips, networking opportunities,
                  and the chance to contribute to real environmental projects that make a difference in our community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Already Have an Account?</h2>
            <p className="mt-4 text-xl text-emerald-100">
              Sign in to access your member dashboard and stay connected with our environmental community.
            </p>
            <div className="mt-8">
              <a
                href="/login"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-emerald-50"
              >
                <span className="mr-2">🔐</span>
                Sign In Instead
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
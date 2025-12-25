import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { memberService } from "../services/memberService";
import * as adminService from "../services/adminService";
import {
  FiHome,
  FiTarget,
  FiGlobe,
  FiUser,
  FiMessageSquare,
  FiBell,
  FiLogOut,
  FiUpload,
  FiCheckCircle,
  FiCalendar,
  FiAward,
  FiTrendingUp,
  FiChevronRight,
  FiStar,
  FiEdit3,
  FiHeart,
  FiShield,
  FiRefreshCw,
  FiEye
} from "react-icons/fi";
import {
  BsFillPersonFill,
  BsFillCheckCircleFill,
  BsClock,
  BsLightningFill
} from "react-icons/bs";

const MemberDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [activeTab, setActiveTab] = useState("overview");
  const [tasks, setTasks] = useState([]);
  const [notices, setNotices] = useState([]);
  const [publicReports, setPublicReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Profile form
  const [profileData, setProfileData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    department: user.department || "",
    password: ""
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [tasksRes, noticesRes, reportsData, userProfile] = await Promise.all([
        adminService.getAllTasks(),
        adminService.getNotices(),
        memberService.getPublicReports(),
        memberService.getProfile(user.id || user._id)
      ]);
      
      if (userProfile) {
        const updatedUser = { ...user, ...userProfile };
        updatedUser.id = updatedUser._id || updatedUser.id;
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        
        setProfileData(prev => ({
          ...prev,
          name: userProfile.name || prev.name,
          phone: userProfile.phone || prev.phone,
          department: userProfile.department || prev.department
        }));
      }
      
      setTasks(tasksRes.data || []);
      setNotices(noticesRes.data || []);
      setPublicReports(Array.isArray(reportsData) ? reportsData : []);
    } catch (error) {
      console.error("Error loading member data", error);
      setTasks([]);
      setNotices([]);
      setPublicReports([]);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await memberService.updateProfile(user.id || user._id, profileData);
      const updatedUser = { ...user, ...profileData };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      // Success notification
      showNotification("Profile updated successfully!", "success");
    } catch (error) {
      console.error(error);
      showNotification("Failed to update profile", "error");
    }
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.startsWith('image/')) {
      showNotification("Please select an image file", "error");
      return;
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      showNotification("Image size should be less than 5MB", "error");
      return;
    }

    const formData = new FormData();
    formData.append("photo", file);

    try {
      setLoading(true);
      const res = await memberService.uploadPhoto(formData);
      const updatedUser = { ...user, photo: res.photo };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      showNotification("Photo uploaded successfully!", "success");
    } catch (error) {
      console.error(error);
      showNotification("Failed to upload photo", "error");
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message, type) => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 animate-slideIn ${
      type === 'success' 
        ? 'bg-emerald-500 text-white' 
        : 'bg-red-500 text-white'
    }`;
    notification.innerHTML = `
      <div class="flex items-center gap-2">
        ${type === 'success' ? '✓' : '✗'}
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

  const handleTaskComplete = async (taskId) => {
    try {
      await adminService.updateTaskStatus(taskId, "Completed");
      setTasks(tasks.map(task => 
        task._id === taskId ? { ...task, status: "Completed" } : task
      ));
      showNotification("Task marked as completed!", "success");
    } catch (error) {
      console.error(error);
      showNotification("Failed to update task", "error");
    }
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-4 border-emerald-100 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-emerald-600 animate-spin"></div>
        </div>
      </div>
      <p className="mt-6 text-lg font-medium text-gray-600">Loading your dashboard...</p>
      <p className="text-sm text-gray-400 mt-2">We're getting everything ready for you</p>
    </div>
  );

  // Navigation items
  const navItems = [
    { id: "overview", icon: <FiHome size={20} />, label: "Overview" },
    { id: "activities", icon: <FiTarget size={20} />, label: "My Activities" },
    { id: "community", icon: <FiGlobe size={20} />, label: "Community" },
    { id: "profile", icon: <FiUser size={20} />, label: "My Profile" },
    { id: "feedback", icon: <FiMessageSquare size={20} />, label: "Feedback" },
  ];

  // Stats cards data
  const statsCards = [
    {
      title: "Contribution Points",
      value: "1,250",
      icon: <FiAward className="text-emerald-600" size={24} />,
      color: "from-emerald-500 to-teal-600",
      progress: 75,
      subtitle: "Level 3 Contributor",
      change: "+12% from last month"
    },
    {
      title: "Active Tasks",
      value: tasks.filter(t => t.status === "Pending" || t.status === "In Progress").length,
      icon: <BsLightningFill className="text-orange-500" size={22} />,
      color: "from-white to-white",
      border: true,
      subtitle: `${tasks.filter(t => t.status === "Completed").length} completed`
    },
    {
      title: "Upcoming Events",
      value: "3",
      icon: <FiCalendar className="text-blue-600" size={24} />,
      color: "from-white to-white",
      border: true,
      subtitle: "Next: Tomorrow"
    },
    {
      title: "Community Impact",
      value: "42",
      icon: <FiTrendingUp className="text-purple-600" size={24} />,
      color: "from-white to-white",
      border: true,
      subtitle: "Positive reports"
    }
  ];

  return (
    <div className="min-h-screen bg-white/80 backdrop-blur-sm">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <h1 className="font-bold text-gray-800">EnvirClub</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <FiBell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative group">
              {user.photo ? (
                <img 
                  src={`${process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000')}/${user.photo}`} 
                  alt="Profile" 
                  className="h-9 w-9 rounded-full object-cover border-2 border-white shadow-sm"
                />
              ) : (
                <div className="h-9 w-9 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center font-bold text-white text-sm">
                  {user.name?.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg animate-slideDown">
            <div className="p-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-4">
                {user.photo ? (
                  <img 
                    src={`${process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000')}/${user.photo}`} 
                    alt="Profile" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center font-bold text-white">
                    {user.name?.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">Member • Level 3</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id 
                        ? "bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-600 font-semibold" 
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
              
              <button 
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  navigate("/login");
                }}
                className="w-full flex items-center gap-3 px-4 py-3 mt-4 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
              >
                <FiLogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-72 bg-white/90 backdrop-blur-md border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">EnvirClub</h1>
                <p className="text-sm text-gray-500">Green Community</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                    activeTab === item.id 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200" 
                      : "text-gray-600 hover:bg-gray-50 hover:translate-x-1"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${
                    activeTab === item.id ? "bg-white/20" : "bg-gray-100"
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                  {activeTab === item.id && (
                    <FiChevronRight className="ml-auto" size={18} />
                  )}
                </button>
              ))}
            </nav>
            
            {/* User Profile Card in Sidebar */}
            <div className="mt-10 p-5 bg-gradient-to-br from-gray-50 to-emerald-50/50 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  {user.photo ? (
                    <img 
                      src={`${process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000')}/${user.photo}`} 
                      alt="Profile" 
                      className="h-14 w-14 rounded-full object-cover border-3 border-white shadow-md"
                    />
                  ) : (
                    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center font-bold text-white text-lg border-3 border-white shadow-md">
                      {user.name?.charAt(0)}
                    </div>
                  )}
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                    <FiStar size={10} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 truncate">{user.name}</h3>
                  <p className="text-sm text-gray-500">Active Member</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="text-center">
                  <p className="font-bold text-gray-900">1,250</p>
                  <p className="text-gray-500">Points</p>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div className="text-center">
                  <p className="font-bold text-gray-900">42</p>
                  <p className="text-gray-500">Tasks</p>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div className="text-center">
                  <p className="font-bold text-gray-900">Level 3</p>
                  <p className="text-gray-500">Rank</p>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  navigate("/login");
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-medium"
              >
                <FiLogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {activeTab === "overview" ? (
                    <>
                      Welcome back, <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{user.name?.split(" ")[0]}!</span> 👋
                    </>
                  ) : (
                    <span className="capitalize">{activeTab.replace(/([A-Z])/g, ' $1')}</span>
                  )}
                </h1>
                <p className="text-gray-500 mt-2">
                  {activeTab === "overview" ? "Here's what's happening in your community today" :
                   activeTab === "activities" ? "Track and manage your environmental activities" :
                   activeTab === "community" ? "Connect with fellow environmental enthusiasts" :
                   activeTab === "profile" ? "Manage your account and preferences" :
                   "Share your thoughts and suggestions"}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={loadData}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700"
                >
                  <FiRefreshCw size={16} />
                  Refresh
                </button>
                <div className="relative">
                  <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
                    <FiBell size={20} className="text-gray-600" />
                    <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-8">
            {/* Stats Cards - Only show on overview */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsCards.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 ${
                      stat.border ? 'border border-gray-200' : ''
                    } shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl ${
                        !stat.border ? 'bg-white/20' : 'bg-gray-50'
                      }`}>
                        {stat.icon}
                      </div>
                      {stat.progress && (
                        <div className="text-xs font-semibold px-2 py-1 rounded-full bg-white/20 text-white">
                          {stat.progress}%
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-gray-700 font-medium">{stat.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
                    {stat.change && (
                      <p className="text-xs text-emerald-600 mt-2 font-medium">
                        {stat.change}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab Content */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              {activeTab === "overview" && (
                <div className="p-6 lg:p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Recent Notices */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Latest Community Updates</h2>
                        <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
                          View all
                        </button>
                      </div>
                      <div className="space-y-4">
                        {notices.slice(0, 4).map((notice) => (
                          <div 
                            key={notice._id} 
                            className="group p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-50 rounded-lg">
                                  <FiBell className="text-emerald-600" size={18} />
                                </div>
                                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600">{notice.title}</h3>
                              </div>
                              <span className="text-xs text-gray-400 whitespace-nowrap">
                                {new Date(notice.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-3">{notice.content}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="flex items-center gap-1">
                                <FiEye size={12} />
                                <span>243 views</span>
                              </div>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <FiHeart size={12} />
                                <span>45 likes</span>
                              </div>
                            </div>
                          </div>
                        ))}
                        {notices.length === 0 && (
                          <div className="text-center py-12">
                            <div className="inline-flex p-4 bg-gray-50 rounded-2xl mb-4">
                              <FiBell size={24} className="text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">No updates yet</h3>
                            <p className="text-gray-400">Check back later for community announcements</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                      <div className="space-y-4">
                        <button className="w-full p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl text-left group hover:shadow-md transition-all">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-emerald-100 rounded-lg">
                              <FiUpload className="text-emerald-600" size={18} />
                            </div>
                            <span className="font-semibold text-gray-900">Submit Report</span>
                          </div>
                          <p className="text-sm text-gray-500">Share your environmental findings</p>
                        </button>
                        
                        <button className="w-full p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl text-left group hover:shadow-md transition-all">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <FiTarget className="text-blue-600" size={18} />
                            </div>
                            <span className="font-semibold text-gray-900">Join Task</span>
                          </div>
                          <p className="text-sm text-gray-500">Participate in community activities</p>
                        </button>
                        
                        <button className="w-full p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl text-left group hover:shadow-md transition-all">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-100 rounded-lg">
                              <FiMessageSquare className="text-purple-600" size={18} />
                            </div>
                            <span className="font-semibold text-gray-900">Give Feedback</span>
                          </div>
                          <p className="text-sm text-gray-500">Help us improve the platform</p>
                        </button>
                        
                        <button 
                          onClick={() => setActiveTab("profile")}
                          className="w-full p-4 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl text-left group hover:shadow-md transition-all"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-orange-100 rounded-lg">
                              <FiEdit3 className="text-orange-600" size={18} />
                            </div>
                            <span className="font-semibold text-gray-900">Update Profile</span>
                          </div>
                          <p className="text-sm text-gray-500">Keep your information current</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "activities" && (
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">My Tasks & Projects</h2>
                      <p className="text-gray-500 mt-2">Track your environmental contributions</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4 lg:mt-0">
                      <button className="px-4 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl font-medium hover:bg-emerald-100 transition-colors">
                        Add Task
                      </button>
                      <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-emerald-500">
                        <option>All Tasks</option>
                        <option>Active</option>
                        <option>Completed</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div 
                        key={task._id} 
                        className="p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all group"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`p-2.5 rounded-lg ${
                                task.status === "Completed" ? "bg-green-100" :
                                task.status === "In Progress" ? "bg-blue-100" :
                                "bg-orange-100"
                              }`}>
                                {task.status === "Completed" ? 
                                  <BsFillCheckCircleFill className="text-green-600" size={18} /> :
                                  task.status === "In Progress" ?
                                  <BsClock className="text-blue-600" size={18} /> :
                                  <BsLightningFill className="text-orange-600" size={18} />
                                }
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{task.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                                <div className="flex flex-wrap items-center gap-3">
                                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                                    task.status === "Completed" ? "bg-green-50 text-green-700" :
                                    task.status === "In Progress" ? "bg-blue-50 text-blue-700" :
                                    "bg-orange-50 text-orange-700"
                                  }`}>
                                    {task.status}
                                  </span>
                                  <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <FiCalendar size={12} />
                                    Due: {new Date(task.dueDate).toLocaleDateString()}
                                  </span>
                                  <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <BsFillPersonFill size={12} />
                                    {task.assignee || "Unassigned"}
                                  </span>
                                  <span className="text-xs px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full">
                                    +50 pts
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {task.status !== "Completed" && (
                            <button 
                              onClick={() => handleTaskComplete(task._id)}
                              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-200 transition-all transform lg:translate-x-4 lg:group-hover:translate-x-0 opacity-0 lg:group-hover:opacity-100 lg:opacity-0"
                            >
                              Mark Complete
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {tasks.length === 0 && (
                      <div className="text-center py-16">
                        <div className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl mb-6">
                          <FiTarget size={40} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-3">No tasks assigned</h3>
                        <p className="text-gray-400 mb-6">You're all caught up! Check back for new opportunities.</p>
                        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                          Browse Available Tasks
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="p-6 lg:p-8">
                  <div className="max-w-4xl mx-auto">
                    {/* Profile Header */}
                    <div className="relative mb-12">
                      <div className="h-48 lg:h-56 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                      
                      <div className="absolute -bottom-16 left-8 lg:left-12">
                        <div className="relative">
                          <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-2xl lg:rounded-3xl border-4 border-white shadow-xl overflow-hidden bg-white">
                            {user.photo ? (
                              <img 
                                src={`${process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000')}/${user.photo}`} 
                                alt="Profile" 
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="h-full w-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                                <span className="text-5xl lg:text-6xl text-white font-bold">
                                  {user.name?.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <label className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 bg-white p-2.5 rounded-full shadow-lg cursor-pointer hover:bg-gray-50 transition-colors group">
                            <input 
                              type="file" 
                              className="hidden" 
                              accept="image/*" 
                              onChange={handlePhotoUpload} 
                            />
                            <FiUpload size={20} className="text-gray-600 group-hover:text-emerald-600" />
                          </label>
                          
                          <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            Level 3
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute -bottom-16 right-8 lg:right-12 flex items-center gap-4">
                        <div className="text-right hidden lg:block">
                          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                          <p className="text-gray-500">{user.department || "Environmental Department"}</p>
                        </div>
                        <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 shadow-sm">
                          <span className="lg:hidden">Edit</span>
                          <span className="hidden lg:inline">Edit Profile</span>
                        </button>
                      </div>
                    </div>

                    {/* Profile Form */}
                    <div className="mt-24 lg:mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-6 lg:p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                      
                      <form onSubmit={handleProfileUpdate} className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                            <input
                              type="text"
                              value={profileData.name}
                              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                              placeholder="Enter your full name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                            <input
                              type="tel"
                              value={profileData.phone}
                              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                            <select
                              value={profileData.department}
                              onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                            >
                              <option value="">Select Department</option>
                              <option value="Environmental Science">Environmental Science</option>
                              <option value="Community Outreach">Community Outreach</option>
                              <option value="Research & Development">Research & Development</option>
                              <option value="Conservation">Conservation</option>
                              <option value="Education">Education</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                            <input
                              type="email"
                              value={user.email || ""}
                              disabled
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500"
                            />
                            <p className="text-xs text-gray-400 mt-1">Contact admin to change email</p>
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h4>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <input
                              type="password"
                              placeholder="Current Password"
                              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            />
                            <input
                              type="password"
                              placeholder="New Password"
                              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            />
                            <input
                              type="password"
                              placeholder="Confirm New Password"
                              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            />
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FiShield size={16} />
                            <span>Your information is secured with encryption</span>
                          </div>
                          <div className="flex gap-3">
                            <button 
                              type="button"
                              onClick={() => setProfileData({
                                name: user.name || "",
                                phone: user.phone || "",
                                department: user.department || "",
                                password: ""
                              })}
                              className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                            <button 
                              type="submit"
                              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-200 transition-all"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "community" && (
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Community Updates & Reports</h2>
                      <p className="text-gray-500 mt-2">See what others are contributing to our environment</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4 lg:mt-0">
                      <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                        Share Report
                      </button>
                      <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-emerald-500">
                        <option>All Reports</option>
                        <option>Success Stories</option>
                        <option>Environmental Issues</option>
                        <option>Research Findings</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {publicReports.map(report => (
                      <div 
                        key={report._id} 
                        className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2.5 rounded-xl ${
                                report.type === "Success" ? "bg-emerald-100" :
                                report.type === "Issue" ? "bg-red-100" :
                                report.type === "Research" ? "bg-blue-100" :
                                "bg-purple-100"
                              }`}>
                                <FiGlobe className={
                                  report.type === "Success" ? "text-emerald-600" :
                                  report.type === "Issue" ? "text-red-600" :
                                  report.type === "Research" ? "text-blue-600" :
                                  "text-purple-600"
                                } size={18} />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 text-lg">{report.title}</h3>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                                  report.type === "Success" ? "bg-emerald-50 text-emerald-700" :
                                  report.type === "Issue" ? "bg-red-50 text-red-700" :
                                  report.type === "Research" ? "bg-blue-50 text-blue-700" :
                                  "bg-purple-50 text-purple-700"
                                }`}>
                                  {report.type}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-400 whitespace-nowrap">
                              {new Date(report.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-6 line-clamp-3">{report.content}</p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-xs font-bold text-white">
                                {report.author?.name?.charAt(0) || "?"}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{report.author?.name || "Anonymous"}</p>
                                <p className="text-xs text-gray-500">{report.author?.role || "Member"}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-gray-400">
                              <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                                <FiHeart size={16} />
                                <span className="text-sm">42</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                                <FiMessageSquare size={16} />
                                <span className="text-sm">12</span>
                              </button>
                              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                                <FiEye size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {publicReports.length === 0 && (
                      <div className="lg:col-span-2 text-center py-16">
                        <div className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl mb-6">
                          <FiGlobe size={40} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-3">No reports yet</h3>
                        <p className="text-gray-400 mb-6">Be the first to share your environmental findings!</p>
                        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                          Create First Report
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "feedback" && (
                <div className="p-6 lg:p-8">
                  <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                      <div className="inline-flex p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl mb-6">
                        <FiMessageSquare size={32} className="text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">Share Your Ideas</h2>
                      <p className="text-gray-500">Your feedback helps us improve the community for everyone</p>
                    </div>
                    
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const feedbackData = {
                        subject: formData.get("subject"),
                        message: formData.get("message")
                      };
                      try {
                        await memberService.createFeedback(feedbackData);
                        showNotification("Feedback submitted successfully!", "success");
                        e.target.reset();
                      } catch (err) {
                        showNotification("Failed to submit feedback", "error");
                      }
                    }} className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                          <select 
                            name="subject"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          >
                            <option value="General Suggestion">General Suggestion</option>
                            <option value="Event Idea">Event Idea</option>
                            <option value="Issue Report">Issue Report</option>
                            <option value="Feature Request">Feature Request</option>
                            <option value="Partnership">Partnership Opportunity</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Priority</label>
                          <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all">
                            <option value="Low">Low Priority</option>
                            <option value="Medium">Medium Priority</option>
                            <option value="High">High Priority</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                        <textarea 
                          name="message"
                          required
                          rows="5"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                          placeholder="Please provide detailed feedback or suggestion..."
                        ></textarea>
                        <p className="text-xs text-gray-400 mt-2">Character limit: 1000</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Attachments (Optional)</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                          <div className="mb-4">
                            <FiUpload size={32} className="text-gray-400 mx-auto" />
                          </div>
                          <p className="text-gray-600 font-medium mb-1">Drop files here or click to upload</p>
                          <p className="text-sm text-gray-400">Supports images, PDF, DOC up to 10MB</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                        <button 
                          type="submit"
                          className="flex-1 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-200 transition-all"
                        >
                          Submit Feedback
                        </button>
                        <button 
                          type="button"
                          className="px-6 py-3.5 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Save Draft
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-10%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default MemberDashboard;
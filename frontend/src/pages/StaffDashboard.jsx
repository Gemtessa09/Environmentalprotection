import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { memberService } from "../services/memberService";
import * as adminService from "../services/adminService";
import {
  FiGrid,
  FiUsers,
  FiBell,
  FiFileText,
  FiUser,
  FiLogOut,
  FiUpload,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiSearch,
  FiFilter,
  FiDownload,
  FiEdit,
  FiEye,
  FiTrash2,
  FiPlus,
  FiTrendingUp,
  FiBarChart2,
  FiSettings,
  FiRefreshCw,
  FiChevronDown,
  FiMoreVertical,
  FiSend,
  FiCalendar,
  FiMail,
  FiPhone
} from "react-icons/fi";
import {
  BsFillLightningFill,
  BsFillPersonCheckFill,
  BsThreeDotsVertical
} from "react-icons/bs";
import {
  RiTeamLine,
  RiCalendarEventLine
} from "react-icons/ri";

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [activeTab, setActiveTab] = useState("tasks");
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

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
      const [tasksRes, membersRes, noticesRes, userProfile] = await Promise.all([
        adminService.getAllTasks(),
        adminService.getAllMembers(),
        adminService.getNotices(),
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
      setMembers(membersRes.data || []);
      setNotices(noticesRes.data || []);
    } catch (error) {
      console.error("Error loading staff data", error);
      setTasks([]);
      setMembers([]);
      setNotices([]);
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
      showNotification("Profile updated successfully!", "success");
    } catch (error) {
      console.error(error);
      showNotification("Failed to update profile", "error");
    }
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showNotification("Please select an image file", "error");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
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

  const handleTaskStatusUpdate = async (taskId, newStatus) => {
    try {
      await memberService.updateTaskStatus(taskId, newStatus);
      setTasks(tasks.map(t => t._id === taskId ? { ...t, status: newStatus } : t));
      showNotification("Task status updated!", "success");
    } catch (error) {
      showNotification("Failed to update task status", "error");
    }
  };

  const showNotification = (message, type) => {
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

  const handleCreateNotice = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const noticeData = {
      title: formData.get("title"),
      content: formData.get("content"),
      targetAudience: formData.get("audience")
    };
    try {
      await adminService.createNotice(noticeData);
      showNotification("Notice created successfully!", "success");
      loadData();
      e.target.reset();
    } catch (err) {
      showNotification("Failed to create notice", "error");
    }
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-4 border-emerald-100 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-emerald-600 animate-spin"></div>
        </div>
      </div>
      <p className="mt-6 text-lg font-medium text-gray-600">Loading dashboard...</p>
      <p className="text-sm text-gray-400 mt-2">Preparing operational data</p>
    </div>
  );

  // Navigation items
  const navItems = [
    { id: "tasks", icon: <FiGrid size={20} />, label: "Operational Tasks", badge: tasks.filter(t => t.status === "Pending").length },
    { id: "members", icon: <FiUsers size={20} />, label: "Member Records", badge: members.length },
    { id: "notices", icon: <FiBell size={20} />, label: "Notices & Updates", badge: notices.length },
    { id: "reports", icon: <FiFileText size={20} />, label: "Reports & Analytics" },
    { id: "profile", icon: <FiUser size={20} />, label: "My Profile" },
  ];

  // Stats cards
  const statsCards = [
    {
      title: "Pending Tasks",
      value: tasks.filter(t => t.status === "Pending").length,
      icon: <FiClock className="text-orange-500" size={24} />,
      color: "from-white to-white",
      border: "border-orange-100",
      change: "+2 this week",
      description: "Awaiting action"
    },
    {
      title: "Active Members",
      value: members.filter(m => m.active).length,
      icon: <BsFillPersonCheckFill className="text-emerald-500" size={22} />,
      color: "from-white to-white",
      border: "border-emerald-100",
      change: "+5 this month",
      description: "Engaged community"
    },
    {
      title: "Completed Tasks",
      value: tasks.filter(t => t.status === "Completed").length,
      icon: <FiCheckCircle className="text-blue-500" size={24} />,
      color: "from-white to-white",
      border: "border-blue-100",
      change: "+12% efficiency",
      description: "This month"
    },
    {
      title: "Upcoming Deadlines",
      value: tasks.filter(t => 
        new Date(t.dueDate) > new Date() && 
        new Date(t.dueDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      ).length,
      icon: <FiAlertCircle className="text-purple-500" size={24} />,
      color: "from-white to-white",
      border: "border-purple-100",
      change: "Next 7 days",
      description: "Require attention"
    }
  ];

  // Filtered tasks
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || task.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-800 text-sm">Staff Dashboard</h1>
                <p className="text-xs text-gray-500">EnvirClub</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <FiBell size={18} className="text-gray-600" />
            </button>
            <div className="relative group">
              {user.photo ? (
                <img 
                  src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/${user.photo}`} 
                  alt="Profile" 
                  className="h-9 w-9 rounded-full object-cover border-2 border-white shadow-sm"
                />
              ) : (
                <div className="h-9 w-9 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white text-sm">
                  {user.name?.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl animate-slideDown">
            <div className="p-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl mb-4">
                {user.photo ? (
                  <img 
                    src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/${user.photo}`} 
                    alt="Profile" 
                    className="h-12 w-12 rounded-full object-cover border-2 border-white"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white">
                    {user.name?.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">Staff • {user.department}</p>
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
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id 
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md" 
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        activeTab === item.id 
                          ? "bg-white/20" 
                          : "bg-emerald-100 text-emerald-700"
                      }`}>
                        {item.badge}
                      </span>
                    )}
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
                <FiLogOut size={18} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-72 bg-white/95 backdrop-blur-md border-r border-gray-200 min-h-screen sticky top-0 shadow-lg">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">EnvirClub</h1>
                <p className="text-sm text-emerald-600 font-medium">Staff Portal</p>
              </div>
            </div>
            
            {/* User Profile Card */}
            <div className="mb-8 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  {user.photo ? (
                    <img 
                      src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/${user.photo}`} 
                      alt="Profile" 
                      className="h-14 w-14 rounded-full object-cover border-3 border-white shadow-md"
                    />
                  ) : (
                    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white text-lg border-3 border-white shadow-md">
                      {user.name?.charAt(0)}
                    </div>
                  )}
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold">✓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 truncate">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.department || "Staff Member"}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/80 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">{tasks.length}</p>
                  <p className="text-xs text-gray-500">Total Tasks</p>
                </div>
                <div className="bg-white/80 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">{members.length}</p>
                  <p className="text-xs text-gray-500">Members</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group ${
                    activeTab === item.id 
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg" 
                      : "text-gray-600 hover:bg-gray-50 hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${
                      activeTab === item.id ? "bg-white/20" : "bg-gray-100"
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      activeTab === item.id 
                        ? "bg-white/20" 
                        : "bg-emerald-100 text-emerald-700"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
            
            {/* Quick Stats */}
            <div className="mt-8 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Today's Overview</h3>
                <FiTrendingUp className="text-emerald-500" size={16} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Pending Tasks</span>
                  <span className="font-semibold text-gray-900">{tasks.filter(t => t.status === "Pending").length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">New Members</span>
                  <span className="font-semibold text-gray-900">+3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Productivity</span>
                  <span className="font-semibold text-emerald-600">78%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-auto p-6 border-t border-gray-200">
            <button 
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-red-600 hover:bg-red-100 transition-colors font-medium"
            >
              <FiLogOut size={16} />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          {/* Header with Stats */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {activeTab === "tasks" && "Operational Tasks Management"}
                  {activeTab === "members" && "Member Records & Management"}
                  {activeTab === "notices" && "Notices & Communications"}
                  {activeTab === "reports" && "Reports & Analytics"}
                  {activeTab === "profile" && "My Profile"}
                </h1>
                <p className="text-gray-500 mt-2">
                  {activeTab === "tasks" && "Manage and track operational tasks"}
                  {activeTab === "members" && "View and manage community members"}
                  {activeTab === "notices" && "Create and manage announcements"}
                  {activeTab === "reports" && "Generate reports and analytics"}
                  {activeTab === "profile" && "Manage your account settings"}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={loadData}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700 shadow-sm"
                >
                  <FiRefreshCw size={16} />
                  Refresh
                </button>
                <button className="relative p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm">
                  <FiBell size={20} className="text-gray-600" />
                  <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* Stats Row - Only show on tasks tab */}
            {activeTab === "tasks" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsCards.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 border ${stat.border} shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.border.replace('border-', 'bg-')}/20`}>
                        {stat.icon}
                      </div>
                      <span className="text-xs font-semibold text-emerald-600">{stat.change}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-gray-700 font-medium">{stat.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {/* Tasks Tab */}
            {activeTab === "tasks" && (
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Task Management</h2>
                      <p className="text-gray-500 mt-2">Monitor and manage operational tasks</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Search tasks..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none w-full sm:w-64"
                        />
                      </div>
                      <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="px-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none"
                      >
                        <option value="all">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                      <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                        <FiPlus size={18} />
                        New Task
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-gray-50 to-emerald-50/50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Task Details</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Assigned To</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Deadline</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Priority</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredTasks.map((task) => (
                          <tr key={task._id} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="px-6 py-4">
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-lg ${
                                  task.priority === "High" ? "bg-red-100 text-red-600" :
                                  task.priority === "Medium" ? "bg-orange-100 text-orange-600" :
                                  "bg-blue-100 text-blue-600"
                                }`}>
                                  <BsFillLightningFill size={16} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600">{task.title}</h4>
                                  <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                                  <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                      #{task.category || "General"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-xs font-bold text-white">
                                  {task.assignedTo?.name?.charAt(0) || "?"}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{task.assignedTo?.name || "Unassigned"}</p>
                                  <p className="text-xs text-gray-500">{task.assignedTo?.role || "Member"}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <FiCalendar className="text-gray-400" size={16} />
                                <span className="text-sm text-gray-900">{new Date(task.dueDate).toLocaleDateString()}</span>
                              </div>
                              <p className="text-xs text-gray-400 mt-1">
                                {new Date(task.dueDate) > new Date() ? "Due in " : "Overdue by "}
                                {Math.abs(Math.ceil((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24)))} days
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${
                                task.priority === "High" ? "bg-red-100 text-red-700" :
                                task.priority === "Medium" ? "bg-orange-100 text-orange-700" :
                                "bg-blue-100 text-blue-700"
                              }`}>
                                {task.priority || "Medium"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col gap-2">
                                <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${
                                  task.status === "Completed" ? "bg-green-100 text-green-700" :
                                  task.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                                  "bg-orange-100 text-orange-700"
                                }`}>
                                  {task.status}
                                </span>
                                <select 
                                  value={task.status}
                                  onChange={(e) => handleTaskStatusUpdate(task._id, e.target.value)}
                                  className="text-xs border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 outline-none"
                                >
                                  <option value="Pending">Pending</option>
                                  <option value="In Progress">In Progress</option>
                                  <option value="Completed">Completed</option>
                                </select>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                                  <FiEye size={16} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                  <FiEdit size={16} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                  <FiTrash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    
                    {filteredTasks.length === 0 && (
                      <div className="text-center py-16">
                        <div className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl mb-6">
                          <FiGrid size={40} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-3">No tasks found</h3>
                        <p className="text-gray-400 mb-6">Try adjusting your search or create a new task</p>
                        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
                          <FiPlus size={18} />
                          Create New Task
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Members Tab */}
            {activeTab === "members" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                        <div>
                          <h2 className="text-xl font-bold text-gray-900">Member Directory</h2>
                          <p className="text-gray-500 mt-2">Manage community members and their profiles</p>
                        </div>
                        <div className="flex gap-3">
                          <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              type="text"
                              placeholder="Search members..."
                              className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none w-full lg:w-64"
                            />
                          </div>
                          <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                            <FiDownload size={18} />
                            Export
                          </button>
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-2xl border border-gray-200">
                        <table className="w-full">
                          <thead className="bg-gradient-to-r from-gray-50 to-emerald-50/50">
                            <tr>
                              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Member</th>
                              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Department</th>
                              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Join Date</th>
                              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {members.map((member) => (
                              <tr key={member._id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className="relative">
                                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-sm font-bold text-white">
                                        {member.name.charAt(0)}
                                      </div>
                                      {member.active && (
                                        <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-emerald-500 rounded-full border-2 border-white"></div>
                                      )}
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                                      <p className="text-sm text-gray-500">{member.email}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                                    {member.department}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                  {new Date(member.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <div className={`h-2 w-2 rounded-full ${member.active ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                    <span className={`text-xs font-semibold ${member.active ? 'text-emerald-700' : 'text-red-700'}`}>
                                      {member.active ? "Active" : "Inactive"}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                                      <FiEye size={16} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                      <FiMail size={16} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                      <FiTrash2 size={16} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Member Statistics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Active Members</span>
                          <span className="text-sm font-semibold text-gray-900">{members.filter(m => m.active).length}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${(members.filter(m => m.active).length / members.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">New This Month</span>
                          <span className="text-sm font-semibold text-gray-900">+{Math.floor(members.length * 0.1)}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all">
                        <span className="font-medium text-gray-700">Add New Member</span>
                        <FiPlus className="text-emerald-500" size={18} />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all">
                        <span className="font-medium text-gray-700">Send Bulk Email</span>
                        <FiMail className="text-blue-500" size={18} />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all">
                        <span className="font-medium text-gray-700">Generate Report</span>
                        <FiDownload className="text-purple-500" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notices Tab */}
            {activeTab === "notices" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">Recent Notices</h2>
                        <p className="text-gray-500 mt-2">Latest community announcements and updates</p>
                      </div>
                      <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                        <FiPlus size={18} />
                        Create Notice
                      </button>
                    </div>

                    <div className="space-y-4">
                      {notices.map((notice) => (
                        <div key={notice._id} className="group p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-emerald-100 rounded-lg">
                                <FiBell className="text-emerald-600" size={18} />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600">{notice.title}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                    {notice.targetAudience}
                                  </span>
                                  <span className="text-xs text-gray-400">
                                    {new Date(notice.createdAt).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                              <BsThreeDotsVertical size={18} />
                            </button>
                          </div>
                          <p className="text-gray-600 mb-4">{notice.content}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <FiEye size={14} />
                              {Math.floor(Math.random() * 1000)} views
                            </span>
                            <span>•</span>
                            <span>Posted by Admin</span>
                          </div>
                        </div>
                      ))}
                      
                      {notices.length === 0 && (
                        <div className="text-center py-12">
                          <div className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl mb-6">
                            <FiBell size={40} className="text-gray-400" />
                          </div>
                          <h3 className="text-xl font-medium text-gray-700 mb-3">No notices yet</h3>
                          <p className="text-gray-400 mb-6">Create your first announcement for the community</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-6">Create New Notice</h3>
                    <form onSubmit={handleCreateNotice} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input 
                          name="title"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                          placeholder="Announcement title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                        <select 
                          name="audience"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                        >
                          <option value="All">All Users (Admin, Staff, Members)</option>
                          <option value="Members Only">Members Only</option>
                          <option value="Staff Only">Staff Only</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                        <textarea 
                          name="content"
                          required
                          rows="6"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none resize-none"
                          placeholder="Write your announcement here..."
                        ></textarea>
                      </div>
                      <div className="flex gap-3">
                        <button type="submit" className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                          <FiSend className="inline mr-2" size={16} />
                          Publish
                        </button>
                        <button type="button" className="px-4 py-2.5 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50">
                          Save Draft
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === "reports" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-white/20 rounded-lg">
                        <FiBarChart2 size={24} />
                      </div>
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">Monthly</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">42</h3>
                    <p className="text-emerald-100 text-sm">Reports Generated</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-emerald-100 rounded-lg">
                        <FiTrendingUp className="text-emerald-600" size={24} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">78%</h3>
                    <p className="text-gray-500 text-sm">Completion Rate</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-blue-100 rounded-lg">
                        <RiCalendarEventLine className="text-blue-600" size={24} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">12</h3>
                    <p className="text-gray-500 text-sm">Events This Month</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-purple-100 rounded-lg">
                        <RiTeamLine className="text-purple-600" size={24} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">{members.length}</h3>
                    <p className="text-gray-500 text-sm">Total Members</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Generate New Report</h3>
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const reportData = {
                      title: formData.get("title"),
                      content: formData.get("content"),
                      type: formData.get("type")
                    };
                    try {
                      await memberService.createReport(reportData);
                      showNotification("Report submitted successfully!", "success");
                      e.target.reset();
                    } catch (err) {
                      showNotification("Failed to submit report", "error");
                    }
                  }} className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Report Title</label>
                        <input 
                          name="title"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                          placeholder="Monthly Activity Report"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Report Type</label>
                        <select 
                          name="type"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                        >
                          <option value="Activity">Activity Report</option>
                          <option value="Financial">Financial Report</option>
                          <option value="Membership">Membership Report</option>
                          <option value="Environmental">Environmental Impact</option>
                          <option value="Event">Event Report</option>
                          <option value="General">General</option>
                        </select>
                      </div>
                      <div className="lg:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Period</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input 
                            type="date"
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            placeholder="Start Date"
                          />
                          <input 
                            type="date"
                            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            placeholder="End Date"
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                        <textarea 
                          name="content"
                          required
                          rows="8"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none resize-none"
                          placeholder="Detailed report content..."
                        ></textarea>
                      </div>
                      <div className="lg:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Attachments</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                          <FiUpload className="mx-auto text-gray-400 mb-4" size={32} />
                          <p className="text-gray-600 font-medium mb-1">Drop files here or click to upload</p>
                          <p className="text-sm text-gray-400">Supports images, PDF, DOC, XLS up to 20MB</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                      <button type="submit" className="flex-1 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                        Generate Report
                      </button>
                      <button type="button" className="px-6 py-3.5 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50">
                        Preview
                      </button>
                      <button type="button" className="px-6 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200">
                        Save as Template
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                  {/* Profile Header */}
                  <div className="relative">
                    <div className="h-48 lg:h-56 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-t-3xl"></div>
                    <div className="absolute inset-0 bg-black/10 rounded-t-3xl"></div>
                    
                    <div className="absolute -bottom-16 left-8 lg:left-12">
                      <div className="relative">
                        <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-2xl lg:rounded-3xl border-6 border-white shadow-2xl overflow-hidden bg-white">
                          {user.photo ? (
                            <img 
                              src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/${user.photo}`} 
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
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-16 right-8 lg:right-12 flex items-center gap-4">
                      <div className="text-right hidden lg:block">
                        <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                        <p className="text-emerald-100">{user.department || "Staff Member"}</p>
                      </div>
                      <button className="px-6 py-2.5 bg-white/90 backdrop-blur-sm rounded-xl font-semibold text-gray-700 hover:bg-white shadow-lg">
                        <span className="lg:hidden">Edit</span>
                        <span className="hidden lg:inline">Edit Profile</span>
                      </button>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="pt-24 lg:pt-20 p-6 lg:p-8">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Information</h3>
                      <p className="text-gray-500">Manage your account details and preferences</p>
                    </div>

                    <form onSubmit={handleProfileUpdate} className="space-y-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">
                              <FiPhone size={16} />
                            </span>
                            <input
                              type="tel"
                              value={profileData.phone}
                              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                              className="flex-1 px-4 py-3.5 rounded-r-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                          <select
                            value={profileData.department}
                            onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          >
                            <option value="">Select Department</option>
                            <option value="Administration">Administration</option>
                            <option value="Operations">Operations</option>
                            <option value="Community Management">Community Management</option>
                            <option value="Event Coordination">Event Coordination</option>
                            <option value="Finance">Finance</option>
                            <option value="Human Resources">Human Resources</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">
                              <FiMail size={16} />
                            </span>
                            <input
                              type="email"
                              value={user.email || ""}
                              disabled
                              className="flex-1 px-4 py-3.5 rounded-r-xl border border-gray-200 bg-gray-50 text-gray-500"
                            />
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Contact admin to change email</p>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                          <input
                            type="password"
                            placeholder="Current Password"
                            className="px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                          />
                          <input
                            type="password"
                            placeholder="New Password"
                            className="px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                          />
                          <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="px-4 py-3.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FiSettings size={16} />
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
                            className="px-6 py-3.5 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Discard Changes
                          </button>
                          <button 
                            type="submit"
                            className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-200 transition-all"
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
          </div>
        </main>
      </div>

      {/* Add custom styles */}
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
      `}</style>
    </div>
  );
};

export default StaffDashboard;
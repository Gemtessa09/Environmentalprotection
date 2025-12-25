import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as adminService from "../services/adminService";
import { memberService } from "../services/memberService";
import {
  FiHome,
  FiUsers,
  FiBell,
  FiTarget,
  FiFileText,
  FiMessageSquare,
  FiUser,
  FiLogOut,
  FiUpload,
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
  FiPhone,
  FiActivity,
  FiDatabase,
  FiShield,
  FiGlobe,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiDollarSign,
  FiUserCheck,
  FiUserX,
  FiCamera
} from "react-icons/fi";
import {
  BsThreeDotsVertical,
  BsFillLightningFill,
  BsFillPersonCheckFill,
  BsGraphUp
} from "react-icons/bs";
import {
  RiTeamLine,
  RiCalendarEventLine,
  RiAdminLine
} from "react-icons/ri";
import {
  AiOutlineAreaChart,
  AiOutlinePieChart
} from "react-icons/ai";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState(null);
  const [members, setMembers] = useState([]);
  const [notices, setNotices] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [reports, setReports] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Form states
  const [newNotice, setNewNotice] = useState({ title: "", content: "", targetAudience: "All" });
  const [newTask, setNewTask] = useState({ title: "", description: "", assignedTo: "", dueDate: "", priority: "Medium" });
  const [editingMember, setEditingMember] = useState(null);
  const [selectedMemberType, setSelectedMemberType] = useState("all");

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
      const [statsRes, membersRes, noticesRes, tasksRes, reportsRes, feedbackRes, userProfile] = await Promise.all([
        adminService.getSystemStats(),
        adminService.getAllMembers(),
        adminService.getNotices(),
        adminService.getAllTasks(),
        adminService.getAllReports(),
        adminService.getAllFeedback(),
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

      setStats(statsRes.data || {});
      setMembers(membersRes.data || []);
      setNotices(noticesRes.data || []);
      setTasks(tasksRes.data || []);
      setReports(reportsRes.data || []);
      setFeedback(feedbackRes.data || []);
    } catch (error) {
      console.error("Error loading admin data", error);
      setStats({});
      setMembers([]);
      setNotices([]);
      setTasks([]);
      setReports([]);
      setFeedback([]);
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

  const handleCreateNotice = async (e) => {
    e.preventDefault();
    try {
      await adminService.createNotice(newNotice);
      setNewNotice({ title: "", content: "", targetAudience: "All" });
      const res = await adminService.getNotices();
      setNotices(res.data);
      showNotification("Notice created successfully!", "success");
    } catch (error) {
      showNotification("Failed to create notice", "error");
    }
  };

  const handleDeleteNotice = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    try {
      await adminService.deleteNotice(id);
      setNotices(notices.filter(n => n._id !== id));
      showNotification("Notice deleted successfully!", "success");
    } catch (error) {
      showNotification("Failed to delete notice", "error");
    }
  };

  const handleAssignTask = async (e) => {
    e.preventDefault();
    try {
      await adminService.assignTask(newTask);
      setNewTask({ title: "", description: "", assignedTo: "", dueDate: "", priority: "Medium" });
      const res = await adminService.getAllTasks();
      setTasks(res.data);
      showNotification("Task assigned successfully!", "success");
    } catch (error) {
      showNotification("Failed to assign task", "error");
    }
  };

  const handleDeleteMember = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;
    try {
      await adminService.deleteMember(id);
      setMembers(members.filter(m => m._id !== id));
      showNotification("User deleted successfully!", "success");
    } catch (error) {
      showNotification("Failed to delete user", "error");
    }
  };

  const handleUpdateMember = async (e) => {
    e.preventDefault();
    try {
      await adminService.updateMember(editingMember._id, editingMember);
      setMembers(members.map(m => m._id === editingMember._id ? editingMember : m));
      setEditingMember(null);
      showNotification("User updated successfully!", "success");
    } catch (error) {
      showNotification("Failed to update user", "error");
    }
  };

  const handleRoleUpdate = async (id, newRole) => {
    try {
      await adminService.updateMemberPrivilege(id, newRole);
      setMembers(members.map(m => m._id === id ? { ...m, role: newRole } : m));
      showNotification("User role updated!", "success");
    } catch (error) {
      showNotification("Failed to update role", "error");
    }
  };

  const handleScheduleUpdate = async (id) => {
    const schedule = prompt("Enter new schedule:");
    if (schedule === null) return;
    try {
      await adminService.updateMemberSchedule(id, schedule);
      setMembers(members.map(m => m._id === id ? { ...m, schedule } : m));
      showNotification("Schedule updated!", "success");
    } catch (error) {
      showNotification("Failed to update schedule", "error");
    }
  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 animate-slideIn ${
      type === 'success' 
        ? 'bg-emerald-500 text-white' 
        : type === 'warning' ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.innerHTML = `
      <div class="flex items-center gap-2">
        ${type === 'success' ? '✓' : type === 'warning' ? '⚠' : '✗'}
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

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-4 border-emerald-100 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-emerald-600 animate-spin"></div>
        </div>
      </div>
      <p className="mt-6 text-lg font-medium text-gray-600">Loading Admin Dashboard...</p>
      <p className="text-sm text-gray-400 mt-2">Preparing system analytics</p>
    </div>
  );

  // Navigation items
  const navItems = [
    { id: "overview", icon: <FiHome size={20} />, label: "Overview", color: "emerald" },
    { id: "members", icon: <FiUsers size={20} />, label: "Members", color: "blue", badge: members.length },
    { id: "notices", icon: <FiBell size={20} />, label: "Notices", color: "yellow", badge: notices.length },
    { id: "tasks", icon: <FiTarget size={20} />, label: "Tasks", color: "purple", badge: tasks.filter(t => t.status === "Pending").length },
    { id: "reports", icon: <FiFileText size={20} />, label: "Reports", color: "indigo", badge: reports.length },
    { id: "feedback", icon: <FiMessageSquare size={20} />, label: "Feedback", color: "pink", badge: feedback.length },
    { id: "profile", icon: <FiUser size={20} />, label: "Profile", color: "teal" },
  ];

  // Stats cards
  const statsCards = [
    {
      title: "Total Members",
      value: stats?.totalMembers || 0,
      icon: <RiTeamLine className="text-emerald-600" size={24} />,
      color: "from-emerald-500 to-teal-600",
      change: "+12%",
      description: "Active users"
    },
    {
      title: "Active Clubs",
      value: stats?.activeClubs || 0,
      icon: <FiGlobe className="text-blue-600" size={24} />,
      color: "from-blue-500 to-indigo-600",
      change: "+3 new",
      description: "Community groups"
    },
    {
      title: "Pending Tasks",
      value: tasks.filter(t => t.status === "Pending").length,
      icon: <FiClock className="text-orange-600" size={24} />,
      color: "from-orange-500 to-amber-600",
      change: "5 urgent",
      description: "Require attention"
    },
    {
      title: "System Health",
      value: "98%",
      icon: <FiActivity className="text-purple-600" size={24} />,
      color: "from-purple-500 to-pink-600",
      change: "Optimal",
      description: "Uptime & Performance"
    },
    {
      title: "Recent Reports",
      value: stats?.recentRegistrations || 0,
      icon: <FiBarChart2 className="text-indigo-600" size={24} />,
      color: "from-indigo-500 to-purple-600",
      change: "+24 this week",
      description: "Member activity"
    },
    {
      title: "Feedback Pending",
      value: feedback.length,
      icon: <FiMessageSquare className="text-pink-600" size={24} />,
      color: "from-pink-500 to-rose-600",
      change: "+8 new",
      description: "Awaiting review"
    }
  ];

  // Filtered members
  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedMemberType === "all" || member.role === selectedMemberType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-white/80 backdrop-blur-sm">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
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
                <RiAdminLine className="text-white" size={16} />
              </div>
              <div>
                <h1 className="font-bold text-gray-800 text-sm">Admin Portal</h1>
                <p className="text-xs text-gray-500">EnvirClub</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <FiBell size={18} className="text-gray-600" />
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
                    src={`${process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000')}/${user.photo}`} 
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
                  <p className="text-sm text-gray-500">System Administrator</p>
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
                <FiShield className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
                <p className="text-sm text-emerald-600 font-medium">System Control Center</p>
              </div>
            </div>
            
            {/* Admin Profile Card */}
            <div className="mb-8 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  {user.photo ? (
                    <img 
                      src={`${process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000')}/${user.photo}`} 
                      alt="Profile" 
                      className="h-14 w-14 rounded-full object-cover border-3 border-white shadow-md"
                    />
                  ) : (
                    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white text-lg border-3 border-white shadow-md">
                      {user.name?.charAt(0)}
                    </div>
                  )}
                  <label className="absolute -bottom-1 -right-1 h-6 w-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors shadow-sm">
                    <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                    <FiCamera size={12} className="text-white" />
                  </label>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 truncate">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.role === 'Admin' ? 'System Administrator' : user.role}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/80 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">{members.length}</p>
                  <p className="text-xs text-gray-500">Users</p>
                </div>
                <div className="bg-white/80 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-gray-900">{tasks.length}</p>
                  <p className="text-xs text-gray-500">Tasks</p>
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
            
            {/* System Status */}
            <div className="mt-8 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">System Status</h3>
                <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">API Status</span>
                  <span className="font-semibold text-emerald-600">Online</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Database</span>
                  <span className="font-semibold text-emerald-600">Healthy</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Security</span>
                  <span className="font-semibold text-emerald-600">Active</span>
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
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {activeTab === "overview" && "System Overview Dashboard"}
                  {activeTab === "members" && "User Management"}
                  {activeTab === "notices" && "Announcements Center"}
                  {activeTab === "tasks" && "Task Administration"}
                  {activeTab === "reports" && "Reports & Analytics"}
                  {activeTab === "feedback" && "Feedback Management"}
                  {activeTab === "profile" && "Admin Profile"}
                </h1>
                <p className="text-gray-500 mt-2">
                  {activeTab === "overview" && "Monitor system performance and key metrics"}
                  {activeTab === "members" && "Manage user accounts, roles, and permissions"}
                  {activeTab === "notices" && "Create and manage system announcements"}
                  {activeTab === "tasks" && "Assign and track organizational tasks"}
                  {activeTab === "reports" && "View system reports and analytics"}
                  {activeTab === "feedback" && "Review and respond to user feedback"}
                  {activeTab === "profile" && "Manage your administrator account"}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={loadData}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700 shadow-sm"
                >
                  <FiRefreshCw size={16} />
                  Refresh Data
                </button>
                <button className="relative p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm">
                  <FiBell size={20} className="text-gray-600" />
                  <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
                </button>
                <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                  <FiDownload size={18} />
                  Export
                </button>
              </div>
            </div>

            {/* Stats Grid - Only show on overview */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statsCards.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        {stat.icon}
                      </div>
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">{stat.change}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-white/90 font-medium">{stat.title}</p>
                    <p className="text-white/70 text-sm mt-1">{stat.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                    <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
                      View all
                    </button>
                  </div>
                  <div className="space-y-4">
                    {notices.slice(0, 3).map((notice) => (
                      <div key={notice._id} className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <FiBell className="text-emerald-600" size={16} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{notice.title}</h4>
                          <p className="text-sm text-gray-500 truncate">{notice.content}</p>
                          <span className="text-xs text-gray-400">{new Date(notice.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                    {tasks.slice(0, 3).map((task) => (
                      <div key={task._id} className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className={`p-2 rounded-lg ${
                          task.priority === "High" ? "bg-red-100 text-red-600" :
                          task.priority === "Medium" ? "bg-orange-100 text-orange-600" :
                          "bg-blue-100 text-blue-600"
                        }`}>
                          <FiTarget size={16} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{task.title}</h4>
                          <p className="text-sm text-gray-500">Assigned to: {task.assignedTo?.name || "Unassigned"}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              task.status === "Completed" ? "bg-green-100 text-green-700" :
                              task.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                              "bg-orange-100 text-orange-700"
                            }`}>
                              {task.status}
                            </span>
                            <span className="text-xs text-gray-400">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Analytics */}
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">System Analytics</h2>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <AiOutlineAreaChart size={20} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <AiOutlinePieChart size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">User Growth</span>
                        <span className="text-sm font-semibold text-emerald-600">+24%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Task Completion</span>
                        <span className="text-sm font-semibold text-blue-600">78%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">System Load</span>
                        <span className="text-sm font-semibold text-purple-600">42%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-3 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-colors text-sm font-medium">
                        Add User
                      </button>
                      <button className="p-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors text-sm font-medium">
                        Generate Report
                      </button>
                      <button className="p-3 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-colors text-sm font-medium">
                        System Backup
                      </button>
                      <button className="p-3 bg-orange-50 text-orange-700 rounded-xl hover:bg-orange-100 transition-colors text-sm font-medium">
                        View Logs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Members Tab */}
            {activeTab === "members" && (
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">User Management</h2>
                      <p className="text-gray-500 mt-2">Manage all user accounts and permissions</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Search users..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none w-full sm:w-64"
                        />
                      </div>
                      <select
                        value={selectedMemberType}
                        onChange={(e) => setSelectedMemberType(e.target.value)}
                        className="px-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none"
                      >
                        <option value="all">All Roles</option>
                        <option value="Member">Members</option>
                        <option value="Staff">Staff</option>
                        <option value="Admin">Admins</option>
                      </select>
                      <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                        <FiPlus size={18} />
                        Add User
                      </button>
                    </div>
                  </div>

                  {/* Edit Member Modal */}
                  {editingMember && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 lg:p-8">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-xl font-bold text-gray-900">Edit User: {editingMember.name}</h3>
                          <button 
                            onClick={() => setEditingMember(null)}
                            className="p-2 text-gray-400 hover:text-gray-600"
                          >
                            ✕
                          </button>
                        </div>
                        <form onSubmit={handleUpdateMember} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                              <input
                                type="text"
                                value={editingMember.name}
                                onChange={e => setEditingMember({...editingMember, name: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                              <input
                                type="email"
                                value={editingMember.email}
                                onChange={e => setEditingMember({...editingMember, email: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                              <input
                                type="tel"
                                value={editingMember.phone || ""}
                                onChange={e => setEditingMember({...editingMember, phone: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                              <input
                                type="text"
                                value={editingMember.department || ""}
                                onChange={e => setEditingMember({...editingMember, department: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                              <select
                                value={editingMember.role}
                                onChange={e => setEditingMember({...editingMember, role: e.target.value})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                              >
                                <option value="Member">Member</option>
                                <option value="Staff">Staff</option>
                                <option value="Admin">Admin</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                              <select
                                value={editingMember.active}
                                onChange={e => setEditingMember({...editingMember, active: e.target.value === "true"})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                              >
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                            <button
                              type="button"
                              onClick={() => setEditingMember(null)}
                              className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}

                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-gray-50 to-emerald-50/50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">User</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Role</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Joined</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredMembers.map((member) => (
                          <tr key={member._id} className="hover:bg-gray-50/50 transition-colors group">
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
                              <select 
                                value={member.role}
                                onChange={(e) => handleRoleUpdate(member._id, e.target.value)}
                                className="text-sm border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 outline-none px-2 py-1"
                              >
                                <option value="Member">Member</option>
                                <option value="Staff">Staff</option>
                                <option value="Admin">Admin</option>
                              </select>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className={`h-2 w-2 rounded-full ${member.active ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                <span className={`text-xs font-semibold ${member.active ? 'text-emerald-700' : 'text-red-700'}`}>
                                  {member.active ? "Active" : "Inactive"}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {new Date(member.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => setEditingMember(member)}
                                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                  title="Edit"
                                >
                                  <FiEdit size={16} />
                                </button>
                                <button 
                                  onClick={() => handleScheduleUpdate(member._id)}
                                  className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                  title="Schedule"
                                >
                                  <FiCalendar size={16} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteMember(member._id)}
                                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Delete"
                                >
                                  <FiTrash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    
                    {filteredMembers.length === 0 && (
                      <div className="text-center py-16">
                        <div className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl mb-6">
                          <FiUsers size={40} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-3">No users found</h3>
                        <p className="text-gray-400 mb-6">Try adjusting your search or add a new user</p>
                      </div>
                    )}
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
                        <h2 className="text-xl font-bold text-gray-900">Recent Announcements</h2>
                        <p className="text-gray-500 mt-2">Manage system-wide communications</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="relative">
                          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="text"
                            placeholder="Search notices..."
                            className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none w-full lg:w-64"
                          />
                        </div>
                      </div>
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
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-400 hover:text-emerald-600 rounded-lg">
                                <FiEdit size={16} />
                              </button>
                              <button 
                                onClick={() => handleDeleteNotice(notice._id)}
                                className="p-2 text-gray-400 hover:text-red-600 rounded-lg"
                              >
                                <FiTrash2 size={16} />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{notice.content}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <FiEye size={14} />
                              {Math.floor(Math.random() * 1000)} views
                            </span>
                            <span>•</span>
                            <span>Posted by System Admin</span>
                          </div>
                        </div>
                      ))}
                      
                      {notices.length === 0 && (
                        <div className="text-center py-12">
                          <div className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl mb-6">
                            <FiBell size={40} className="text-gray-400" />
                          </div>
                          <h3 className="text-xl font-medium text-gray-700 mb-3">No announcements yet</h3>
                          <p className="text-gray-400 mb-6">Create your first system announcement</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-6">Create New Announcement</h3>
                    <form onSubmit={handleCreateNotice} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input 
                          name="title"
                          value={newNotice.title}
                          onChange={e => setNewNotice({...newNotice, title: e.target.value})}
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                          placeholder="Announcement title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                        <select 
                          name="audience"
                          value={newNotice.targetAudience}
                          onChange={e => setNewNotice({...newNotice, targetAudience: e.target.value})}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                        >
                          <option value="All">All Users</option>
                          <option value="Staff Only">Staff Only</option>
                          <option value="Members Only">Members Only</option>
                          <option value="Administrators">Administrators</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                        <textarea 
                          name="content"
                          value={newNotice.content}
                          onChange={e => setNewNotice({...newNotice, content: e.target.value})}
                          required
                          rows="8"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none resize-none"
                          placeholder="Write your announcement here..."
                        ></textarea>
                      </div>
                      <div className="flex gap-3">
                        <button type="submit" className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                          <FiSend className="inline mr-2" size={16} />
                          Publish Now
                        </button>
                        <button type="button" className="px-4 py-2.5 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50">
                          Schedule
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Tasks Tab */}
            {activeTab === "tasks" && (
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Task Administration</h2>
                      <p className="text-gray-500 mt-2">Assign and monitor organizational tasks</p>
                    </div>
                    <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                      <FiPlus size={18} />
                      New Task
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Task Assignment Form */}
                    <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl border border-gray-200 p-6">
                      <h3 className="font-bold text-gray-900 mb-6">Assign New Task</h3>
                      <form onSubmit={handleAssignTask} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
                          <input
                            type="text"
                            placeholder="Enter task title"
                            value={newTask.title}
                            onChange={e => setNewTask({...newTask, title: e.target.value})}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Assign To</label>
                          <select
                            value={newTask.assignedTo}
                            onChange={e => setNewTask({...newTask, assignedTo: e.target.value})}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            required
                          >
                            <option value="">Select User</option>
                            {members.map(m => (
                              <option key={m._id} value={m._id}>{m.name} ({m.role})</option>
                            ))}
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                            <input
                              type="date"
                              value={newTask.dueDate}
                              onChange={e => setNewTask({...newTask, dueDate: e.target.value})}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                            <select
                              value={newTask.priority}
                              onChange={e => setNewTask({...newTask, priority: e.target.value})}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none"
                            >
                              <option value="Low">Low</option>
                              <option value="Medium">Medium</option>
                              <option value="High">High</option>
                              <option value="Critical">Critical</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                          <textarea
                            placeholder="Task description..."
                            value={newTask.description}
                            onChange={e => setNewTask({...newTask, description: e.target.value})}
                            rows="4"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none resize-none"
                          />
                        </div>
                        <button type="submit" className="w-full px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                          Assign Task
                        </button>
                      </form>
                    </div>

                    {/* Task List */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-6">Recent Tasks</h3>
                      <div className="space-y-4">
                        {tasks.slice(0, 5).map((task) => (
                          <div key={task._id} className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-gray-900">{task.title}</h4>
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                task.status === "Completed" ? "bg-green-100 text-green-700" :
                                task.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                                "bg-orange-100 text-orange-700"
                              }`}>
                                {task.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mb-3">{task.description}</p>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              <span>Assigned to: {task.assignedTo?.name || "Unassigned"}</span>
                              <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === "reports" && (
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">System Reports</h2>
                      <p className="text-gray-500 mt-2">Analytics and insights for system administration</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        Last 30 Days
                      </button>
                      <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                        <FiDownload size={18} />
                        Export All
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {reports.map((report) => (
                      <div key={report._id} className="group p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600">{report.title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                report.type === "Activity" ? "bg-blue-100 text-blue-700" :
                                report.type === "Financial" ? "bg-green-100 text-green-700" :
                                report.type === "System" ? "bg-purple-100 text-purple-700" :
                                "bg-gray-100 text-gray-700"
                              }`}>
                                {report.type}
                              </span>
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                report.status === "Resolved" ? "bg-emerald-100 text-emerald-700" :
                                report.status === "Pending" ? "bg-orange-100 text-orange-700" :
                                report.status === "Under Review" ? "bg-blue-100 text-blue-700" :
                                "bg-gray-100 text-gray-700"
                              }`}>
                                {report.status}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">{new Date(report.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{report.content}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-xs font-bold text-white">
                              {report.author?.name?.charAt(0) || "?"}
                            </div>
                            <span className="text-sm text-gray-500">By {report.author?.name} ({report.author?.role})</span>
                          </div>
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
                        </div>
                      </div>
                    ))}
                    
                    {reports.length === 0 && (
                      <div className="text-center py-16">
                        <div className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl mb-6">
                          <FiFileText size={40} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-3">No reports yet</h3>
                        <p className="text-gray-400 mb-6">System reports will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Feedback Tab */}
            {activeTab === "feedback" && (
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">User Feedback</h2>
                      <p className="text-gray-500 mt-2">Review and manage user suggestions and issues</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Search feedback..."
                          className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none w-full lg:w-64"
                        />
                      </div>
                      <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:border-emerald-500 outline-none">
                        <option value="all">All Types</option>
                        <option value="Suggestion">Suggestions</option>
                        <option value="Issue">Issues</option>
                        <option value="Compliment">Compliments</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {feedback.map((item) => (
                      <div key={item._id} className="group p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-yellow-50 to-amber-50/30">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">{item.subject}</h3>
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                item.type === "Suggestion" ? "bg-blue-100 text-blue-700" :
                                item.type === "Issue" ? "bg-red-100 text-red-700" :
                                item.type === "Compliment" ? "bg-green-100 text-green-700" :
                                "bg-gray-100 text-gray-700"
                              }`}>
                                {item.type || "Feedback"}
                              </span>
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                item.status === "Resolved" ? "bg-emerald-100 text-emerald-700" :
                                item.status === "Pending" ? "bg-orange-100 text-orange-700" :
                                "bg-gray-100 text-gray-700"
                              }`}>
                                {item.status || "New"}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.message}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-xs font-bold text-white">
                              {item.author?.name?.charAt(0) || "?"}
                            </div>
                            <span className="text-sm text-gray-500">From {item.author?.name} ({item.author?.role})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors">
                              Mark Resolved
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <FiTrash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {feedback.length === 0 && (
                      <div className="text-center py-16">
                        <div className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-amber-50 rounded-3xl mb-6">
                          <FiMessageSquare size={40} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-3">No feedback yet</h3>
                        <p className="text-gray-400 mb-6">User feedback will appear here</p>
                      </div>
                    )}
                  </div>
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
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-16 right-8 lg:right-12 flex items-center gap-4">
                      <div className="text-right hidden lg:block">
                        <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                        <p className="text-emerald-100">System Administrator</p>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Administrator Profile</h3>
                      <p className="text-gray-500">Manage your system administrator account</p>
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
                            <option value="System Administration">System Administration</option>
                            <option value="IT Management">IT Management</option>
                            <option value="Operations">Operations</option>
                            <option value="Executive">Executive</option>
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
                          <p className="text-xs text-gray-400 mt-1">Primary system email</p>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h4>
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
                          <FiShield size={16} />
                          <span>Enhanced security encryption enabled</span>
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

export default AdminDashboard;
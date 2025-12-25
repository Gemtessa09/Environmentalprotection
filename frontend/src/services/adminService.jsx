import http from "./http";

const apiEndpoint = "/admin";
const membersEndpoint = "/members";
const noticesEndpoint = "/notices";
const tasksEndpoint = "/tasks";

// Admin Dashboard Stats
export const getSystemStats = () => http.get(`${apiEndpoint}/stats`);

// Member Management
export const getAllMembers = () => http.get(membersEndpoint);
export const updateMemberPrivilege = (id, role) => http.put(`${membersEndpoint}/${id}/privilege`, { role });
export const updateMemberSchedule = (id, schedule) => http.put(`${membersEndpoint}/${id}/schedule`, { schedule });
export const getMemberPerformance = (id) => http.get(`${membersEndpoint}/${id}/performance`);
export const getOverallPerformance = () => http.get(`${membersEndpoint}/performance/overall`);
export const updateMember = (id, data) => http.put(`${apiEndpoint}/members/${id}`, data);
export const deleteMember = (id) => http.delete(`${apiEndpoint}/members/${id}`);

// Reports & Feedback
export const getAllReports = () => http.get("/reports");
export const getAllFeedback = () => http.get("/feedback");

// Notice Management
export const createNotice = (notice) => http.post(noticesEndpoint, notice);
export const getNotices = () => http.get(noticesEndpoint);
export const deleteNotice = (id) => http.delete(`${noticesEndpoint}/${id}`);

// Task Management
export const assignTask = (task) => http.post(tasksEndpoint, task);
export const getAllTasks = () => http.get(tasksEndpoint);
export const updateTaskStatus = (id, status) => http.patch(`${tasksEndpoint}/${id}/status`, { status });

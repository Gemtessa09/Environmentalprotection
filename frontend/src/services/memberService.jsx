import api from "./http";

export const memberService = {
  async list() {
    const { data } = await api.get("/members");
    return data;
  },
  async join(payload) {
    const { data } = await api.post("/members", payload);
    return data;
  },
  async getProfile(id) {
    const { data } = await api.get(`/members/${id}`);
    return data;
  },
  async updateProfile(id, payload) {
    const { data } = await api.put(`/members/${id}`, payload);
    return data;
  },
  async uploadPhoto(formData) {
    const { data } = await api.post("/members/upload-photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
  async getMyTasks() {
    const { data } = await api.get("/tasks");
    return data;
  },
  async updateTaskStatus(id, status) {
    const { data } = await api.patch(`/tasks/${id}/status`, { status });
    return data;
  },
  async getMyPerformance(id) {
    const { data } = await api.get(`/members/${id}/performance`);
    return data;
  },
  async createFeedback(payload) {
    const { data } = await api.post("/feedback", payload);
    return data;
  },
  async getPublicReports() {
    const { data } = await api.get("/reports/public");
    return data;
  },
  async createReport(payload) {
    const { data } = await api.post("/reports", payload);
    return data;
  }
};


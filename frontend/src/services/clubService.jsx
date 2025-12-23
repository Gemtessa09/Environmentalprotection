import api from "./http";

export const clubService = {
  async list() {
    const { data } = await api.get("/clubs");
    return data;
  },
  async featured() {
    const { data } = await api.get("/clubs/featured");
    return data;
  },
  async get(id) {
    const { data } = await api.get(`/clubs/${id}`);
    return data;
  },
  async create(payload) {
    const { data } = await api.post("/clubs", payload);
    return data;
  },
};

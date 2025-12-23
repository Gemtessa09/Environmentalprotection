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
};

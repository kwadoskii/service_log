import API from "./axiosInstance";

const getAllUsers = async () => {
  const response = await API.get("/api/users");
  return response.data;
};

export { getAllUsers };

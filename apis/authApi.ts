import API from "./axiosInstance";

const loginUser = async (credentials: LoginPayload): Promise<LoginResponse> => {
  const response = await API.post("/auth/login", credentials);
  return response.data;
};

const getUserProfile = async (): Promise<UserProfile> => {
  const response = await API.get("/auth/profile");
  return response.data;
};

const updateUserProfile = async (profileData: UpdateUserProfile) => {
  const response = await API.put("/auth/profile", profileData);
  return response.data;
};

const changePassword = async (passwords: updatePassword) => {
  const response = await API.put("/auth/change-password", passwords);
  return response.data;
};

export { getUserProfile, loginUser, updateUserProfile, changePassword };

//interfaces
interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: string;
  token: string;
}

interface UserProfile {
  _id: string;
  email: string;
  role?: string;
  status?: boolean;
  firstName: string;
  lastName: string;
  username: string;
  createdAt: string;
}

interface UpdateUserProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
}

interface updatePassword {
  currentPassword: string;
  newPassword: string;
}

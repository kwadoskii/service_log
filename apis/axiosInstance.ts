import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { store } from "@/lib/store";
import { logoutUser } from "@/lib/features/userSlice";

// let isInterceptorAttached = false;
let isHandling401 = false;

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (res) => res,
  (error) => {
    if (
      error.response?.status === 401 &&
      window.location.href !== "/login" &&
      typeof window !== "undefined" &&
      !isHandling401
    ) {
      isHandling401 = true;

      Cookies.remove("authToken");
      store.dispatch(logoutUser());

      window.location.href = "/login";

      toast.info("Session expired. Please log in again.");
    }

    return Promise.reject(error);
  }
);

export default API;

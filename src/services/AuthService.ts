import { axiosPublic, axiosPrivate, setAuthToken } from "../config/axios";

interface LoginResponse {
  token: string;
}

export const authService = {
  signup: async (
    username: string,
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    const response = await axiosPublic.post<LoginResponse>("/auth/signup", {
      username,
      email,
      password,
    });
    const { token } = response.data;

    // Lưu token vào localStorage và axios
    localStorage.setItem("token", token);
    setAuthToken(token);

    return response.data;
  },
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await axiosPublic.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    const { token } = response.data;

    // Lưu token vào localStorage và axios
    localStorage.setItem("token", token);
    setAuthToken(token);

    return response.data;
  },

  logout: () => {
    // Xóa token khỏi localStorage và axios
    localStorage.removeItem("token");
    setAuthToken(null);
    window.location.href = "/login"; // Chuyển hướng về trang đăng nhập
  },

  getProfile: async () => {
    const response = await axiosPrivate.get("/auth/profile");
    return response.data;
  },

  refreshToken: async () => {
    try {
      const response = await axiosPublic.post<LoginResponse>(
        "/auth/refresh-token"
      );
      const { token } = response.data;

      // Cập nhật token mới
      localStorage.setItem("token", token);
      setAuthToken(token);

      return token;
    } catch (error) {
      authService.logout(); // Nếu refresh token thất bại, đăng xuất người dùng
      throw error;
    }
  },
};

import { axiosPublic, axiosPrivate, setAuthToken } from "../config/axios";
export const userService = {
  getUser: async () => {
    try {
      const response = await axiosPrivate.get("/user/me");
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Rethrow the error to handle it in the calling function
    }
  },
};

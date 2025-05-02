import { useEffect, useState } from "react";
import { userService } from "../../services/UserService";

const AboutPage = () => {
  const [data, setData] = useState<any>(null);
  const getUser = async () => {
    try {
      const response = await userService.getUser();
      setData(response.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen text-3xl font-bold">
      About Page
      <h3>hi, {data?.username}</h3>
    </div>
  );
};

export default AboutPage;

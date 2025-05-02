import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-[#F5F0F0] flex justify-center items-center h-screen w-screen">
      <div className="w-full max-w-[400px] p-4 bg-white rounded-lg shadow-lg ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

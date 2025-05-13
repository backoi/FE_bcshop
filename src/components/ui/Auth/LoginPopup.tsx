import React, { useRef } from "react";
//popup xem truoc san pham
import useClickOutSide from "../../hooks/useClickOutSide";
const LoginPopup = ({ toggleLogin }: any) => {
  const loginRef = useRef<HTMLDivElement>(null);
  useClickOutSide(loginRef as React.RefObject<HTMLElement>, toggleLogin);
  return (
    <>
      <div
        ref={loginRef}
        className="text-black absolute top-10 -right-10 w-96 bg-white shadow-xl rounded-md p-6 z-50"
      >
        <div className="absolute top-0 right-10 -mt-2 w-0 h-0 border-l-8 border-r-8 border-b-[10px] border-l-transparent border-r-transparent border-b-white z-50" />
        <div className="">
          <h2 className="text-center text-lg font-semibold text-gray-800 mb-2">
            ĐĂNG NHẬP TÀI KHOẢN
          </h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Nhập email và mật khẩu của bạn:
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <p className="text-xs text-gray-400 mb-4">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 rounded">
            ĐĂNG NHẬP
          </button>
          <div className="mt-4 flex flex-col justify-between text-sm text-black">
            <p>
              Khách hàng mới?{" "}
              <a href="#" className="text-yellow-500 hover:underline">
                Tạo tài khoản
              </a>
            </p>
            <p>
              Quên mật khẩu?{" "}
              <a href="#" className="text-yellow-500 hover:underline">
                Khôi phục mật khẩu
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;

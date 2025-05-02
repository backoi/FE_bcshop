import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaAmazon,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Momo from "../../assets/logo/momo.png";
import Cod from "../../assets/logo/cod.png";
import Viettelpost from "../../assets/logo/viettelpost.png";
import GHN from "../../assets/logo/ghn.png";
import SPX from "../../assets/logo/spx.png";
import GHTK from "../../assets/logo/ghtk.png";
import Credit from "../../assets/logo/credit.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Về Art Puzzle */}
        <div>
          <h3 className="font-semibold mb-2">Về Art Puzzle</h3>
          <p className="mb-4">
            Chúng tôi chuyên các mô hình kim loại 3D, mô hình gỗ 3D, mô hình
            nhựa 3D chính hãng Piececool, Metal Earth, Robotime, Lego, CaDA,
            MOULDKING, CubicFun
          </p>
          <div className="flex space-x-3 mb-4">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <SiTiktok />
          </div>
          <div>Phương thức thanh toán</div>
          <div className="flex space-x-2 mt-2">
            <img src={Momo} alt="momo" className="w-10" />
            <img src={Cod} alt="cod" className="w-10" />
            <img src={Credit} alt="credit" className="w-10" />
          </div>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h3 className="font-semibold mb-2">Thông tin liên hệ</h3>
          <p>
            Địa chỉ: Xóm Tân Thủy, xã Sơn Tây, huyện Hương Sơn, tỉnh Hà Tĩnh
          </p>
          <p className="mt-2">
            Điện thoại: <strong>0862728538</strong> (Mr. Bac)
          </p>
          <p>
            Email:{" "}
            <a href="leebac0802@gmail.com" className="text-blue-600">
              leebac0802@@gmail.com
            </a>
          </p>
          <h4 className="mt-4 font-medium">Phương thức vận chuyển</h4>
          <div className="flex space-x-3 mt-2">
            <img src={GHTK} alt="GHTK" className="w-14" />
            <img src={SPX} alt="SPX" className="w-14" />
            <img src={Viettelpost} alt="Viettelpost" className="w-14" />
            <img src={GHN} alt="GHN" className="w-14" />
          </div>
        </div>

        {/* Mô hình */}
        <div>
          <h3 className="font-semibold mb-2">Mô Hình</h3>
          <ul className="space-y-1">
            <li>
              <a href="#">Tất cả mô hình</a>
            </li>
            <li>
              <a href="#">Mô hình kim loại 3D</a>
            </li>
            <li>
              <a href="#">Mô hình gỗ 3D</a>
            </li>
            <li>
              <a href="#">Mô hình nhựa 3D</a>
            </li>
            <li>
              <a href="#">Mô hình ốc vít 3D</a>
            </li>
            <li>
              <a href="#">Mô hình giấy 3D</a>
            </li>
          </ul>
        </div>

        {/* Thông Tin */}
        <div>
          <h3 className="font-semibold mb-2">Thông Tin</h3>
          <ul className="space-y-1">
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
            <li>
              <a href="#">Hình thức thanh toán</a>
            </li>
            <li>
              <a href="#">Chính sách đổi trả</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">Chính sách giao hàng</a>
            </li>
            <li>
              <a href="#">Điều khoản dịch vụ</a>
            </li>
            <li>
              <a href="#">Hướng dẫn đặt hàng</a>
            </li>
            <li>
              <a href="#">Câu hỏi thường gặp</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dưới cùng */}
      <div className="bg-gray-100 text-center text-xs py-4 border-t">
        <p>Copyright © 1-4-2025 BacKoi </p>
      </div>
    </footer>
  );
};

export default Footer;

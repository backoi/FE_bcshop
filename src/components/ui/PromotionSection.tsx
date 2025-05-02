import React from "react";
import { FiTruck, FiRefreshCw, FiHeadphones } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const PromotionSection = () => {
  return (
    <div className="w-full ">
      {/* Top features section */}
      <div className="bg-yellow-400 text-white py-30">
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mx-auto text-center">
          {/* Item 1 */}
          <div className="sm:col-span-1 md:col-span-1 ">
            <FiTruck size={40} className="mx-auto mb-3" />
            <h3 className="text-lg font-bold pb-3">Giao Hàng Toàn Quốc</h3>
            <p className="text-sm leading-7">
              Đồng giá ship 25k toàn quốc
              <br />
              FREESHIP đơn hàng từ 290k trở lên
            </p>
          </div>

          {/* Item 2 */}
          <div className="sm:col-span-1 md:col-span-1">
            <FiRefreshCw size={40} className="mx-auto mb-3" />
            <h3 className="text-lg font-bold pb-3">Đổi trả miễn phí</h3>
            <p className="text-sm leading-7">
              Hoàn tiền hoặc đổi trả miễn phí
              <br />
              nếu có lỗi từ nhà sản xuất
            </p>
          </div>

          {/* Item 3 */}
          <div className="sm:col-span-2 md:col-span-1 ">
            <FiHeadphones size={40} className="mx-auto mb-3" />
            <h3 className="text-lg font-bold pb-3">Hỗ trợ 24/7</h3>
            <p className="text-sm leading-7">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn
              <br />
              Hotline: 0988.891.692 (Ms. Trinh)
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="bg-white py-12 text-center px-4">
        <p className="text-gray-500 italic text-xl">Chương trình khuyến mãi</p>
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4">
          Đăng ký nhận tin tức ưu đãi
        </h2>
        <div className="max-w-xl mx-auto flex items-center relative justify-center">
          <div className="relative flex-grow">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiMail />
            </span>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="placeholder:text-lg text-lg placeholder: w-full pl-15 pr-4  py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <span className="absolute right-0 h-full px-2 py-3 bg-yellow-400 text-white font-semibold text-2xl rounded hover:bg-yellow-500 transition">
            <button>ĐĂNG KÝ</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;

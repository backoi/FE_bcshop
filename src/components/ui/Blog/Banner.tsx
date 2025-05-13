import React from "react";

const CreativeBanner = () => {
  return (
    <div className="w-full my-5 relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 shadow-xl overflow-hidden">
      {/* Decorative elements (optional) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="border border-white/20 rounded-sm"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 uppercase tracking-wider">
          HƠN 100 MÔ HÌNH LẮP RÁP
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-300">
          Những trò chơi sáng tạo nhất
        </h2>

        <p className="text-lg mb-6 italic">Thỏa mãn đam mê của bạn</p>

        <div className="flex gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded transition-all transform hover:scale-105">
            MUA NGAY
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-3 px-6 rounded transition-all transform hover:scale-105">
            LIÊN HỆ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreativeBanner;

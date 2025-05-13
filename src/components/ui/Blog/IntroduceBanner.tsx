import React from "react";

const MetalModelBanner = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Hình ảnh giới thiệu */}
            <div className="md:w-1/2">
              <img
                src="https://theme.hstatic.net/200000417685/1001040197/14/home_introduce_img.jpg?v=1173"
                alt="Mô hình kim loại 3D"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nội dung giới thiệu */}
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Mô hình kim loại 3D
              </h1>

              <p className="text-gray-600 mb-4">
                Mô hình kim loại 3D lắp ráp được quốc tế công nhận là đồ chơi
                sáng tạo hấp dẫn nhất năm 2020. Được lắp ráp từ những mảnh thép
                không gỉ với chi tiết sắc sảo, màu sắc trung thực, tinh tế.
              </p>

              <p className="text-gray-600 mb-6">
                ArtPuzzle.vn chuyên mô hình lắp ráp 3D kim loại từ 2015, cung
                cấp hơn 800 mô hình 3D kim loại từ những thương hiệu nổi tiếng:
                Piececool, Metal Earth, MU Model, Microworld...
              </p>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Lợi ích:
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Độ bền cao, rèn luyện tính kiên nhẫn và tỉ mỉ</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Nhiều chủ đề đa dạng: kiến trúc, xe tăng, máy bay,
                      Gundam...
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Trải nghiệm mua sắm tốt nhất từ đội ngũ giàu kinh nghiệm
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  MUA NGAY
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  LIÊN HỆ
                </button>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">
                  MAGAO CLASS BITTERUP | HIPB1 SG
                </p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalModelBanner;

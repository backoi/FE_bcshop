import React from "react";
import { BiCheckCircle } from "react-icons/bi";

const ProductFeatures = () => {
  const features = [
    { id: 1, text: "Số mảnh: 127 mảnh" },
    { id: 2, text: "Kích thước hoàn thiện: 7 x 4 x 1 cm" },
    { id: 3, text: "Chất liệu: Kim loại không gỉ" },
    { id: 4, text: "Độ khó: 2/5 (Trung Bình)" },
    { id: 5, text: "Thời gian lắp ráp: Khoảng 2-3 giờ" },
  ];

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        Đặc điểm sản phẩm
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <BiCheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-gray-600">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;

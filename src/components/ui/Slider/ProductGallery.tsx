import React, { useState } from "react";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Trong môi trường thực tế, chúng ta sẽ có nhiều hình ảnh sản phẩm khác nhau
  // Ở đây chúng ta chỉ có 1 hình ảnh từ tài liệu mẫu
  const images = [
    {
      id: 1,
      src: "https://picsum.photos/800",
      alt: "Mô hình kim loại lắp ráp 3D - Góc trước",
    },
    {
      id: 2,
      src: "https://picsum.photos/800",
      alt: "Mô hình kim loại lắp ráp 3D - Góc sau",
    },
    {
      id: 3,
      src: "https://picsum.photos/800",
      alt: "Mô hình kim loại lắp ráp 3D - Góc bên",
    },
    {
      id: 4,
      src: "https://picsum.photos/800",
      alt: "Mô hình kim loại lắp rapes 3D - Góc trên",
    },
    {
      id: 5,
      src: "https://picsum.photos/800",
      alt: "Mô hình kim loại lắp rapes 3D - Góc trên",
    },
    {
      id: 6,
      src: "https://picsum.photos/800",
      alt: "Mô hình kim loại lắp rapes 3D - Góc trên",
    },
  ];

  return (
    <div className="flex space-x-3 px-2 py-2">
      {/* Thumbnail gallery */}
      <div className="flex flex-col space-y-2 overflow-auto pb-2 w-1/4 max-h-[550px]">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`flex-shrink-0 border-2 rounded w-full h-32  ${
              selectedImage === index ? "border-primary" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      {/* Main image */}
      <div className="border w-full border-gray-200 rounded-lg overflow-hidden bg-white mb-4">
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          className="w-full h-full object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default ProductGallery;

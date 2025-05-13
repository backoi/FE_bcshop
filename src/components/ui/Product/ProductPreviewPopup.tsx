import React, { useEffect, useRef, useState } from "react";

const ProductPreviewPopup = ({ product, onClose }: any) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 bg-black/30 //backdrop-blur-sm bg flex items-center justify-center z-50 p-4">
      <div
        ref={popupRef}
        className="bg-white rounded-lg max-w-6xl z-99 w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Product content */}
        <div className="md:flex">
          {/* Image gallery */}
          <div className="md:w-1/2 p-4">
            <div className="mb-4 h-80 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto py-2">
              {product.images?.map((img: any, index: any) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 flex-shrink-0 border-2 rounded-md overflow-hidden ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="md:w-1/2 p-4">
            <div className="mb-4">
              <span className="text-red-600 font-bold text-xl">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through ml-2">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Mô tả sản phẩm:</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Thông số kỹ thuật:</h3>
              <ul className="text-gray-600 space-y-1">
                {product.specifications?.map((spec: any, index: any) => (
                  <li key={index} className="flex">
                    <span className="font-medium w-32 flex-shrink-0">
                      {spec.name}:
                    </span>
                    <span>{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity selector */}
            <div className="flex items-center mb-6">
              <span className="mr-3 font-medium">Số lượng:</span>
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 text-lg hover:bg-gray-100">
                  -
                </button>
                <span className="px-4 py-1 border-x">{quantity}</span>
                <button className="px-3 py-1 text-lg hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition">
                Thêm vào giỏ hàng
              </button>
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-medium transition">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewPopup;

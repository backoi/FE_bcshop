import React, { useState } from "react";
//test: trái danh sách, phải chi tiết sản phẩm
const ProductDetailPage = () => {
  // Dữ liệu sản phẩm hiện tại
  const [currentProduct, setCurrentProduct] = useState({
    id: 1,
    name: "Áo thun nam cao cấp",
    price: 299000,
    discountPrice: 199000,
    description:
      "Áo thun nam chất liệu cotton 100%, thoáng mát, co giãn tốt. Thiết kế đơn giản, dễ phối đồ.",
    colors: ["Đen", "Trắng", "Xám"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviewCount: 128,
    images: [
      "https://via.placeholder.com/600x800?text=Product+1",
      "https://via.placeholder.com/600x800?text=Product+2",
      "https://via.placeholder.com/600x800?text=Product+3",
    ],
  });

  // Dữ liệu sản phẩm liên quan
  const [relatedProducts, setRelatedProducts] = useState([
    {
      id: 2,
      name: "Áo polo nam",
      price: 349000,
      image: "https://via.placeholder.com/300x400?text=Related+1",
    },
    {
      id: 3,
      name: "Quần jean nam",
      price: 499000,
      image: "https://via.placeholder.com/300x400?text=Related+2",
    },
    {
      id: 4,
      name: "Áo sơ mi trắng",
      price: 399000,
      image: "https://via.placeholder.com/300x400?text=Related+3",
    },
    {
      id: 5,
      name: "Giày thể thao",
      price: 899000,
      image: "https://via.placeholder.com/300x400?text=Related+4",
    },
    {
      id: 6,
      name: "Túi đeo chéo",
      price: 249000,
      image: "https://via.placeholder.com/300x400?text=Related+5",
    },
    {
      id: 7,
      name: "Mũ lưỡi trai",
      price: 159000,
      image: "https://via.placeholder.com/300x400?text=Related+6",
    },
  ]);

  // State cho màu và size được chọn
  const [selectedColor, setSelectedColor] = useState(currentProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(currentProduct.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  // Hàm xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    alert(
      `Đã thêm ${quantity} ${currentProduct.name} (${selectedColor}, ${selectedSize}) vào giỏ hàng`
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Bên trái - Danh sách sản phẩm liên quan (scroll) */}
        <div className="lg:w-1/4 order-2 lg:order-1">
          <h2 className="text-xl font-bold mb-4">Sản phẩm liên quan</h2>
          <div className="overflow-y-auto h-screen pr-2">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={
                    () => {}
                    //setCurrentProduct({ ...product, images: [product.image] })
                  }
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="font-medium mt-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-red-500 font-bold">
                    {product.price.toLocaleString()}đ
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bên phải - Chi tiết sản phẩm */}
        <div className="lg:w-3/4 order-1 lg:order-2">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Hình ảnh sản phẩm */}
            <div className="lg:w-1/2">
              <div className="sticky top-4">
                <img
                  src={currentProduct.images[0]}
                  alt={currentProduct.name}
                  className="w-full rounded-lg shadow-md"
                />
                <div className="flex gap-2 mt-4">
                  {currentProduct.images.slice(0, 3).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${currentProduct.name} ${index + 1}`}
                      className="w-20 h-20 object-cover rounded border cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Thông tin sản phẩm */}
            <div className="lg:w-1/2">
              <h1 className="text-2xl font-bold mb-2">{currentProduct.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(currentProduct.rating)
                          ? "fill-current"
                          : "stroke-current fill-none"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">
                  {currentProduct.rating} ({currentProduct.reviewCount} đánh
                  giá)
                </span>
              </div>

              <div className="mb-6">
                {currentProduct.discountPrice ? (
                  <>
                    <span className="text-3xl font-bold text-red-500">
                      {currentProduct.discountPrice.toLocaleString()}đ
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {currentProduct.price.toLocaleString()}đ
                    </span>
                    <span className="bg-red-100 text-red-600 text-sm font-medium ml-2 px-2 py-1 rounded">
                      -
                      {Math.round(
                        (1 -
                          currentProduct.discountPrice / currentProduct.price) *
                          100
                      )}
                      %
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">
                    {currentProduct.price.toLocaleString()}đ
                  </span>
                )}
              </div>

              <div className="mb-6">
                <p className="text-gray-700">{currentProduct.description}</p>
              </div>

              {/* Chọn màu */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Màu sắc:</h3>
                <div className="flex gap-2">
                  {currentProduct.colors.map((color) => (
                    <button
                      key={color}
                      className={`px-4 py-2 border rounded-full ${
                        selectedColor === color
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-300"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chọn size */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Kích cỡ:</h3>
                <div className="flex gap-2">
                  {currentProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 flex items-center justify-center border rounded ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-300"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chọn số lượng */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Số lượng:</h3>
                <div className="flex items-center">
                  <button
                    className="w-10 h-10 border rounded-l flex items-center justify-center"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <div className="w-16 h-10 border-t border-b flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    className="w-10 h-10 border rounded-r flex items-center justify-center"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Nút thêm vào giỏ hàng */}
              <div className="flex gap-4">
                <button
                  className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex-1"
                  onClick={handleAddToCart}
                >
                  Thêm vào giỏ hàng
                </button>
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

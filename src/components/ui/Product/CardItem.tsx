import React, { useEffect, useRef, useState } from "react";
import useCart from "../../../store/slices/cart";
import ProductPreviewPopup from "./ProductPreviewPopup";
//using
//category trang chu
interface CardItemProps {
  product: {
    productId: string;
    name: string;
    slug: string;
    price: number;
    stock: number;
    difficulty: number;
    pieces: number;
    dimensions: {
      width: number;
      height: number;
      length: number;
    };
    video: string;
    category: string;
    subCategories: string[];
    description: string;
    images: string[];
    //createdAt: Date;
    //updatedAt: Date;
  };
}
const CardItem = ({ product }: CardItemProps) => {
  //console.log("productid", product.productId);
  const { addToCart }: any = useCart();
  const [isPreview, setIsPreview] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const togglePreview = () => {
    console.log("click preview");
    setIsPreview(!isPreview);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group max-w-xs w-full mx-auto h-full relative flex flex-col bg-white rounded-lg shadow-lg p-4"
    >
      {/* Discount and Play Button */}
      <div className="relative h-64 //overflow-hidden rounded-lg">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className={`absolute w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out ${
              isHovering && product?.images.length > 1
                ? "-translate-x-full"
                : "translate-x-0"
            }`}
          />
          {product?.images.length > 1 && (
            <img
              src={product?.images[1]}
              alt={`${product?.name} - view 2`}
              className={`absolute w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out ${
                isHovering ? "translate-x-0" : "translate-x-full"
              }`}
            />
          )}
        </div>
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 z-10">
          -30%
        </span>
        <button
          onClick={togglePreview}
          className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1 z-10"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Sale Banner */}
      {/* <div className="relative mt-2">
        <div className="bg-brown-700 text-black text-sm font-bold px-4 py-1 rounded-l-lg">
          WAREHOUSE SALE
        </div>
        <div className="absolute top-0 right-0 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-r-lg">
          MUA NGAY <br /> 50% LÊN ĐẾN
        </div>
      </div> */}

      {/* Product Details with truncation */}
      <h3 className="text-sm font-semibold mt-2 text-gray-800 truncate">
        <a href={`/product/${product?.slug}`} className="hover:underline">
          {product?.name}
        </a>
      </h3>
      <p className="text-xs text-gray-500 mt-1">{product?.productId}</p>

      {/* Price */}
      <div className="flex items-center mt-2">
        <span className="text-lg font-bold text-red-500">{product?.price}</span>
        <span className="text-sm text-gray-500 line-through ml-2">
          {product?.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </div>

      {/* Additional Info */}
      <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
        <div className="flex items-center">
          <img
            className="w-4 h-4 mr-1"
            src="https://theme.hstatic.net/200000417685/1001040197/14/pcs_32.png?v=1173"
            alt="Mảnh"
          />
          {product?.pieces} mảnh
        </div>
        <div className="flex items-center">
          <img
            className="w-4 h-4 mr-1"
            src="https://theme.hstatic.net/200000417685/1001040197/14/level_32.png?v=1173"
            alt="Độ khó"
          />
          {product?.difficulty} / 10
        </div>
      </div>

      {/* Dimensions */}
      <div className="flex items-center mt-2 text-xs text-gray-600">
        <img
          className="w-4 h-4 mr-1"
          src="https://theme.hstatic.net/200000417685/1001040197/14/size2_32.png?v=1173"
          alt="Kích thước"
        />
        DxRxC: {product?.dimensions.width} x {product?.dimensions.height} x{" "}
        {product?.dimensions.length} cm
      </div>

      <div
        onClick={() => addToCart(product)}
        className=" text-sm opacity-0 group-hover:opacity-100 group-hover:delay-400 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white  w-[80%] font-bold py-2 px-4 rounded-lg hover:bg-red-500 cursor-pointer hover:delay-75 transition text-center duration-200 ease-in-out"
      >
        Thêm vào giỏ hàng
      </div>

      {isPreview && (
        <ProductPreviewPopup product={product} onClose={togglePreview} />
      )}
    </div>
  );
};

export default CardItem;

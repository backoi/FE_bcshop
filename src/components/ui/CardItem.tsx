// import { useState } from "react";

// const CardItem = () => {
//   const [isHovering, setIsHovering] = useState(false);
//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };
//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };
//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="bg-white flex flex-col rounded-lg shadow-md overflow-hidden h-full relative"
//     >
//       <div className="absolute top-0 left-0 bg-red-500 text-white text-center py-1">
//         Giảm 20%
//       </div>
//       <div className="aspect-square overflow-hidden">
//         <img
//           className="w-[200px] h-full object-cover"
//           src="https://images.seeklogo.com/logo-png/35/1/all-logo-png_seeklogo-358128.png"
//           alt="Product image"
//         />
//       </div>
//       <div className="p-3 bg-white flex flex-col justify-between h-full">
//         <h3>Product Name</h3>
//         <div className="flex justify-between items-center mt-2">
//           <span className="text-red-500 font-bold">$199.99</span>
//           <span className="text-gray-500 line-through text-sm">$249.99</span>
//         </div>
//       </div>
//       <div className="flex justify-center items-center bg-gray-800 text-white py-2 rounded-b-lg">
//         <span>0 mảnh</span>
//         <span>0/10</span>
//       </div>
//       {isHovering && (
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-800 flex items-center justify-center text-white text-lg font-bold">
//           <span>Thêm vào giỏ hàng</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardItem;

import React, { useState } from "react";
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
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="max-w-xs w-64 h-[500px] relative flex flex-col mx-auto bg-white rounded-lg shadow-lg p-4"
    >
      {/* Discount and Play Button */}
      <div className="relative h-64 overflow-hidden rounded-lg">
        <img
          src={product?.images[0]}
          alt="Drum Set"
          className="w-full object-cover rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
          -30%
        </span>
        <button className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1">
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
      {
        /* Add to Cart Button */
        isHovering && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-lg w-[80%] font-bold py-2 px-4 rounded-lg hover:bg-red-500 cursor-pointer transition duration-300 ease-in-out">
            Thêm vào giỏ hàng
          </div>
        )
      }
    </div>
  );
};

export default CardItem;

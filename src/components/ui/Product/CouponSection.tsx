import React from "react";

const CouponSection = () => {
  const coupons = [
    {
      discount: "2%",
      condition: "Đơn hàng từ 500K",
      code: "GIAM2P",
      expiry: "HSD: 31/12/2025",
      buttonText: "SAO CHÉP MÃ",
    },
    {
      discount: "4%",
      condition: "Đơn hàng từ 1000K",
      code: "GIAM4P",
      expiry: "HSD: 31/12/2025",
      buttonText: "SAO CHÉP MÃ",
    },
    {
      discount: "7%",
      condition: "Đơn hàng từ 2000K",
      code: "GIAM7P",
      expiry: "HSD: 31/12/2025",
      buttonText: "SAO CHÉP MÃ",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Đã sao chép mã ${text}`);
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Khuyến mãi dành cho bạn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className="relative border-2 border-dashed border-red-400 rounded-lg p-5 bg-gradient-to-br from-red-50 to-yellow-50"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 -mt-3 -ml-3 bg-white rounded-full border-2 border-red-400"></div>
              <div className="absolute top-0 right-0 w-6 h-6 -mt-3 -mr-3 bg-white rounded-full border-2 border-red-400"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 -mb-3 -ml-3 bg-white rounded-full border-2 border-red-400"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 -mb-3 -mr-3 bg-white rounded-full border-2 border-red-400"></div>

              {/* Coupon content */}
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {coupon.discount}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-3">
                  {coupon.condition}
                </div>

                <div className="bg-white rounded-md p-2 mb-3 border border-gray-200">
                  <div className="text-sm text-gray-500">Mã: {coupon.code}</div>
                  <div className="text-xs text-gray-400">{coupon.expiry}</div>
                </div>

                <button
                  onClick={() => copyToClipboard(coupon.code)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  {coupon.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponSection;

// import React, { useState } from "react";

// const CouponSection = () => {
//   const [copiedIndex, setCopiedIndex] = useState(null);

//   const coupons = [
//     {
//       discount: "2%",
//       condition: "Đơn hàng từ 500K",
//       code: "GIAM2P",
//       expiry: "HSD: 31/12/2025",
//     },
//     {
//       discount: "4%",
//       condition: "Đơn hàng từ 1000K",
//       code: "GIAM4P",
//       expiry: "HSD: 31/12/2025",
//     },
//     {
//       discount: "7%",
//       condition: "Đơn hàng từ 2000K",
//       code: "GIAM7P",
//       expiry: "HSD: 31/12/2025",
//     },
//   ];

//   const copyToClipboard = (text, index) => {
//     navigator.clipboard.writeText(text);
//     setCopiedIndex(index);

//     // Reset trạng thái sau 2 giây
//     setTimeout(() => {
//       setCopiedIndex(null);
//     }, 2000);
//   };

//   return (
//     <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Khuyến mãi dành cho bạn
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {coupons.map((coupon, index) => (
//             <div
//               key={index}
//               className="relative border-2 border-dashed border-red-400 rounded-lg p-5 bg-gradient-to-br from-red-50 to-yellow-50"
//             >
//               {/* Corner decorations */}
//               <div className="absolute top-0 left-0 w-6 h-6 -mt-3 -ml-3 bg-white rounded-full border-2 border-red-400"></div>
//               <div className="absolute top-0 right-0 w-6 h-6 -mt-3 -mr-3 bg-white rounded-full border-2 border-red-400"></div>
//               <div className="absolute bottom-0 left-0 w-6 h-6 -mb-3 -ml-3 bg-white rounded-full border-2 border-red-400"></div>
//               <div className="absolute bottom-0 right-0 w-6 h-6 -mb-3 -mr-3 bg-white rounded-full border-2 border-red-400"></div>

//               {/* Coupon content */}
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-red-600 mb-2">
//                   {coupon.discount}
//                 </div>
//                 <div className="text-lg font-semibold text-gray-700 mb-3">
//                   {coupon.condition}
//                 </div>

//                 <div className="bg-white rounded-md p-2 mb-3 border border-gray-200">
//                   <div className="text-sm text-gray-500">Mã: {coupon.code}</div>
//                   <div className="text-xs text-gray-400">{coupon.expiry}</div>
//                 </div>

//                 <button
//                   onClick={() => copyToClipboard(coupon.code, index)}
//                   className={`w-full font-bold py-2 px-4 rounded-md transition-colors duration-300 ${
//                     copiedIndex === index
//                       ? "bg-green-500 text-white"
//                       : "bg-red-600 hover:bg-red-700 text-white"
//                   }`}
//                 >
//                   {copiedIndex === index ? "ĐÃ SAO CHÉP" : "SAO CHÉP MÃ"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CouponSection;

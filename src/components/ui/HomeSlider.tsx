// import { Swiper, SwiperSlide } from "swiper/react";

// const HomeSlider = () => {
//   return (
//     <div className="p-4 flex gap-4 w-full h-full">
//       <div className="flex-6 h-full w-full">
//         <Swiper className="h-full" navigation>
//           <SwiperSlide className="h-full">
//             <img
//               src="https://theme.hstatic.net/200000417685/1001040197/14/top_banner_lg.jpg?v=1173?v=4"
//               className="w-full h-full object-cover"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       <div className="flex-2 flex-col h-full w-full">
//         <div className="flex-1 h-full">
//           <img
//             src="https://theme.hstatic.net/200000417685/1001040197/14/top_right_banner.jpg?v=1169"
//             className="w-full"
//           />
//         </div>
//         <div className="flex-1 h-full">
//           <img
//             src="https://theme.hstatic.net/200000417685/1001040197/14/bottom_right_banner.png?v=1173"
//             className="w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeSlider;

import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  return (
    <div className="p-4 flex gap-4 h-full w-full shadow-md">
      <div className="flex-3 flex w-full ">
        <Swiper navigation>
          <SwiperSlide>
            <img
              src="https://theme.hstatic.net/200000417685/1001040197/14/top_banner_lg.jpg?v=1173?v=4"
              alt="Mô hình 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex-1 flex gap-4 flex-col h-full">
        <div className="bg-gray-200 rounded-lg h-full">
          <img
            src="https://theme.hstatic.net/200000417685/1001040197/14/top_right_banner.jpg?v=1169"
            alt="Mô hình 2"
            className="w-full object-cover"
          />
        </div>

        <img
          src="https://theme.hstatic.net/200000417685/1001040197/14/bottom_right_banner.png?v=1173"
          alt="Mô hình 3"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};
export default HomeSlider;

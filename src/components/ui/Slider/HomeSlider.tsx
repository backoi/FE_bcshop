import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  const [slides, setSlides] = useState([
    {
      src: "https://theme.hstatic.net/200000417685/1001040197/14/top_banner_lg.jpg?v=1173?v=4",
      alt: "Slider 1",
    },
    {
      src: "https://theme.hstatic.net/200000417685/1001040197/14/slide_4_img.jpg?v=1173",
      alt: "Slider 2",
    },
  ]);
  return (
    <div className="p-4 flex gap-4 h-full w-full shadow-md">
      <div className="w-[75%] flex">
        <Swiper navigation className="w-full h-full">
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[25%] flex gap-4 flex-col h-full">
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

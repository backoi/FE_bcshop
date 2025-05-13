import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CardItem from "../Product/CardItem";
import { products } from "../../../products";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom CSS for the carousel
const carouselStyles = {
  customSwiper: {
    paddingBottom: "50px",
    position: "relative",
  },
};

const ProductCarousel = ({ seemore }: any) => {
  return (
    <div className="py-8 w-full mx-auto px-4">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          direction="horizontal"
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 15 },
          }}
        >
          {products.map((p, idx) => (
            <SwiperSlide key={idx} className="h-full pb-4">
              <CardItem product={p} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-swiper-button-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 transform cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-md hover:bg-blue-700">
            <FaChevronLeft className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="custom-swiper-button-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 transform cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-md hover:bg-blue-700">
            <FaChevronRight className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {seemore && (
        <div className="text-center mt-8">
          <a
            href="/products"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            {seemore}
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;

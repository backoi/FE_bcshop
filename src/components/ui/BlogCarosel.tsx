import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Pagination } from "swiper/modules";
import NewsItem from "./NewsItem";

const blogPosts = [
  {
    image:
      "https://file.hstatic.net/200000417685/article/sieu_sale_dai_chien_post_banner_468633c5db0c40b98887802d00a0d814_large.jpg",
    title: "Nhân Đôi Ưu Đãi – Mừng Xuân Giáp Thìn",
    desc: "Gấp đôi ưu đãi tặng Chậu Hoa Nhỏ, Thiên Ngữ Hạc hoặc Lân Phát Tài Mini...",
    date: "20 Tháng 01, 2024",
    link: "#",
  },
  {
    image:
      "https://file.hstatic.net/200000417685/article/8th_facebook_cover_11769bd4f29647a09698ddf5d6f9cf8c_large.png",
    title: "MUA KÈM DEAL SỐC – GIẢM ĐẾN 70%",
    desc: "Mua kèm deal sốc hơn 130 sản phẩm HOT giảm giá đến 70% khi mua hóa đơn từ 299K...",
    date: "06 Tháng 01, 2024",
    link: "#",
  },
  {
    image:
      "https://file.hstatic.net/200000417685/article/new-year-sale-2023-04_00a9e5ba4cba41ee8b024130deaf9d3a_grande.jpg",
    title: "[BLACK FRIDAY] GIẢM ĐẾN 70%",
    desc: "Giảm giá đến 70% toàn bộ mô hình lắp ráp 3D khi đặt hàng thành công...",
    date: "22 Tháng 11, 2023",
    link: "#",
  },
  {
    image:
      "https://file.hstatic.net/200000417685/article/202306_campaign_facebook_post_banner_a12978d27019454b93c7d7eb89006d56_1024x1024.jpg",
    title: "SIÊU SALE ĐẠI CHIẾN MÔ HÌNH GỖ 3D",
    desc: "Giảm giá đến 50% toàn bộ mô hình gỗ 3D khi đặt hàng thành công...",
    date: "29 Tháng 10, 2023",
    link: "#",
  },
  {
    image:
      "https://file.hstatic.net/200000417685/article/202306_campaign_facebook_post_banner_a12978d27019454b93c7d7eb89006d56_1024x1024.jpg",
    title: "SIÊU SALE ĐẠI CHIẾN MÔ HÌNH GỖ 3D",
    desc: "Giảm giá đến 50% toàn bộ mô hình gỗ 3D khi đặt hàng thành công...",
    date: "29 Tháng 10, 2023",
    link: "#",
  },
  {
    image:
      "https://file.hstatic.net/200000417685/article/202306_campaign_facebook_post_banner_a12978d27019454b93c7d7eb89006d56_1024x1024.jpg",
    title: "SIÊU SALE ĐẠI CHIẾN MÔ HÌNH GỖ 3D",
    desc: "Giảm giá đến 50% toàn bộ mô hình gỗ 3D khi đặt hàng thành công...",
    date: "29 Tháng 10, 2023",
    link: "#",
  },
  {
    image:
      "https://file.hstatic.net/200000417685/article/202306_campaign_facebook_post_banner_a12978d27019454b93c7d7eb89006d56_1024x1024.jpg",
    title: "SIÊU SALE ĐẠI CHIẾN MÔ HÌNH GỖ 3D",
    desc: "Giảm giá đến 50% toàn bộ mô hình gỗ 3D khi đặt hàng thành công...",
    date: "29 Tháng 10, 2023",
    link: "#",
  },
  {
    image:
      "https://file.hstatic.net/200000417685/article/202306_campaign_facebook_post_banner_a12978d27019454b93c7d7eb89006d56_1024x1024.jpg",
    title: "SIÊU SALE ĐẠI CHIẾN MÔ HÌNH GỖ 3D",
    desc: "Giảm giá đến 50% toàn bộ mô hình gỗ 3D khi đặt hàng thành công...",
    date: "29 Tháng 10, 2023",
    link: "#",
  },
];

const BlogCarousel = () => {
  return (
    <div className="py-12 bg-white text-center w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Bài viết mới nhất
      </h2>
      <div className="w-20 bg-yellow-500 h-1 mx-auto mb-8 rounded"></div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="px-4 max-w-[1200px] mx-auto pb-12"
      >
        {blogPosts.map((post, idx) => (
          <SwiperSlide key={idx}>
            <NewsItem item={post} idx={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;

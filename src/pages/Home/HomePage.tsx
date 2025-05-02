import "swiper/swiper-bundle.css";
//them popup
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import CategoryItem from "../../components/ui/CategoryItem";
import ProductItem from "../../components/ui/ProductItem";
import Sidebar from "../../components/ui/Sidebar";
import CardItem from "../../components/ui/CardItem";
import { productService } from "../../services/ProductService";
import PromotionSection from "../../components/ui/PromotionSection";
import HomeSlider from "../../components/ui/HomeSlider";
import CreativeBanner from "../../components/ui/Banner";
import BlogCarousel from "../../components/ui/BlogCarosel";
//https://theme.hstatic.net/200000417685/1001040197/14/small_banner_left.jpg?v=1169
//https://theme.hstatic.net/200000417685/1001040197/14/small_banner_center.jpg?v=1169
//https://theme.hstatic.net/200000417685/1001040197/14/small_banner_right.jpg?v=1169
const HomePage = ({}: {
  isSidebarOpen: boolean;

  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  toggleSidebar: () => void;
}) => {
  const [listProducts, setListProducts] = useState([]);
  const categories = [
    {
      id: 1,
      name: "Tất cả sản phẩm",
      img: "https://images.seeklogo.com/logo-png/35/1/all-logo-png_seeklogo-358128.png",
    },
    {
      id: 2,
      name: "Sản phẩm mới",
      img: "https://www.shutterstock.com/image-vector/new-product-rubber-stamp-grunge-260nw-1431108029.jpg",
    },
    {
      id: 3,
      name: "Mô hình",
      img: "https://theme.hstatic.net/200000417685/1001040197/14/mc_sw_model_100.jpg?v=1169",
    },
    {
      id: 4,
      name: "Dụng cụ lắp ráp",
      img: "https://theme.hstatic.net/200000417685/1001040197/14/cate_dung_cu_lap_rap_sm.jpg?v=1169",
    },
    {
      id: 5,
      name: "Nhân vật",
      img: "https://theme.hstatic.net/200000417685/1001040197/14/cate_marvel_sm.jpg?v=1169",
    },
    {
      id: 6,
      name: "Best seller",
      img: "https://theme.hstatic.net/200000417685/1001040197/14/best_seller_3.png?v=1169",
    },
  ];
  const fetchProducts = async () => {
    try {
      const response = await productService.getAll();
      const products = response.data; //.slice(0, 8); // Lấy 8 sản phẩm đầu tiên
      setListProducts(products);

      console.log("chay vao day ne");
      // console.log("response:", response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    //fetchProducts();
  }, []);
  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-3xl font-bold relative">
      <HomeSlider />
      <BlogCarousel />
      {/* 4 5 danh muc */}
      <div className="flex justify-center w-full gap-4 ">
        {categories.map((category) => (
          <CategoryItem
            img={category.img}
            title={category.name}
            key={category.id}
          />
        ))}
      </div>
      {/* chuong trinh khuýen mãi/mã giảm giá */}
      <div className="flex gap-4 w-full max-w-screen p-4">
        <div className="flex-1  bg-gray-200 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://theme.hstatic.net/200000417685/1001040197/14/small_banner_left.jpg?v=1169"
            alt=""
          />
        </div>
        <div className="flex-1  bg-gray-200 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://theme.hstatic.net/200000417685/1001040197/14/small_banner_left.jpg?v=1169"
            alt=""
          />
        </div>
        <div className="flex-1  bg-gray-200 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://theme.hstatic.net/200000417685/1001040197/14/small_banner_left.jpg?v=1169"
            alt=""
          />
        </div>
      </div>
      {/* ban chay nhat/giam gia trong tuan thêm đếm thời gian*/}
      <div className=" flex flex-col gap-4 w-full p-4">
        <h3 className="text-sm md:text-2xl">Giảm giá sóc trong ngày</h3>

        <div className="bg-gray-800 p-3  text-white flex justify-between items-center">
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="max-w-[1280px] h-full"
            modules={[Navigation]}
          >
            {listProducts.map((product, index) => (
              <SwiperSlide key={index} className="">
                <CardItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* footer frê ship/đổi hàng/bao hanh */}
      {/* tin tuc */}
      {/* footer */}
      <CreativeBanner />

      <PromotionSection />
    </div>
  );
};

export default HomePage;

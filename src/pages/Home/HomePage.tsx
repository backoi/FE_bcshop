import "swiper/swiper-bundle.css";
//hoàn thiện các clock giao diện
import { useEffect, useState } from "react";
import CategoryItem from "../../components/ui/Product/CategoryItem";
import { productService } from "../../services/ProductService";
import PromotionSection from "../../components/ui/PromotionSection";
import HomeSlider from "../../components/ui/Slider/HomeSlider";
import CreativeBanner from "../../components/ui/Blog/Banner";
import BlogCarousel from "../../components/ui/Blog/BlogCarosel";
import ProductCarousel from "../../components/ui/Slider/ProductCarosel";
import TitleSection from "../../components/ui/TitleSection";
//https://theme.hstatic.net/200000417685/1001040197/14/small_banner_left.jpg?v=1169
//https://theme.hstatic.net/200000417685/1001040197/14/small_banner_center.jpg?v=1169
//https://theme.hstatic.net/200000417685/1001040197/14/small_banner_right.jpg?v=1169
const HomePage = () => {
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(true);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-3xl font-bold relative">
      <HomeSlider />

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
        <TitleSection />

        <ProductCarousel seemore="Xem tất cả giảm giá" />
      </div>
      {/* footer frê ship/đổi hàng/bao hanh */}
      {/* tin tuc */}
      {/* footer */}
      <CreativeBanner />
      <BlogCarousel />
      <PromotionSection />
    </div>
  );
};

export default HomePage;

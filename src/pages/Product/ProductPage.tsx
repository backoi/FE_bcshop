import {
  BiCheck,
  BiChevronRight,
  BiHeart,
  BiMinus,
  BiPlus,
} from "react-icons/bi";
import ProductGallery from "../../components/ui/ProductGallery";
import { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { BsThunderbolt } from "react-icons/bs";
import { MdThunderstorm } from "react-icons/md";
import { IoFlash } from "react-icons/io5";
import ProductFeatures from "../../components/ui/ProductFeature";
import CouponItem from "../../components/ui/CouponItem";
import ProductTabSelect from "../../components/ui/ProductTabSelect";
import BlogCarousel from "../../components/ui/BlogCarosel";
import ProductCarousel from "../../components/ui/ProductCarosel";
import ProductScroll from "../../components/ui/ProductScroll";

//manh ghep   https://theme.hstatic.net/200000417685/1001040197/14/pcs_128.png?v=1173
// do kho   https://theme.hstatic.net/200000417685/1001040197/14/level_128.png?v=1173
// kich thuoc https://theme.hstatic.net/200000417685/1001040197/14/size2_128.png?v=1173
// ship https://theme.hstatic.net/200000417685/1001040197/14/product_info1_desc1_img.png?v=1173
//sheild https://theme.hstatic.net/200000417685/1001040197/14/product_info1_desc2_img.png?v=1173
//hoan hang  https://theme.hstatic.net/200000417685/1001040197/14/product_info2_desc1_img.png?v=1173
// cod https://theme.hstatic.net/200000417685/1001040197/14/product_info2_desc2_img.png?v=1173
const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const increaseQuantity = () => {
    setQuantity((qty) => qty + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((qty) => (qty > 1 ? qty - 1 : 1));
  };
  return (
    <div className="bg-gray-200 gap-4 mx-10">
      <nav className="breadcrumb flex items-center bg-gray-100 p-4 text-gray-700">
        <a href="/" className="hover:text-primary">
          Trang chủ
        </a>
        <BiChevronRight className="mx-2 h-4 w-4" />
        <a href="/mo-hinh" className="hover:text-primary">
          Mô Hình Kim Loại 3D
        </a>
        <BiChevronRight className="mx-2 h-4 w-4" />
        <span>MU Trâm Trung Kiếm Thanh Phượng</span>
      </nav>
      <div className="bg-green-500 flex">
        <div className="traichiem5p w-full h-full">
          <ProductGallery />
        </div>
        <div className="phaichiem7p flex w-full ">
          <div className="m-4 flex flex-col gap-4">
            <div className="lg:w-1/2">
              <h1 className="product-title">
                Mô Hình Kim Loại Lắp Ráp 3D MU Trâm Trung Kiếm Thanh Phượng (127
                mảnh, Phoenix Hairpin in Sword) YM-N153-B - MP1278
              </h1>

              <div className="flex items-center mt-4">
                <div className="text-sm text-gray-500">Mã sản phẩm: MP1278</div>
                <div className="mx-4 h-4 border-r border-gray-300"></div>
                <div className="text-sm text-gray-500">
                  Tình trạng:{" "}
                  <span className="text-green-500 font-medium">Còn hàng</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  <span className="text-gray-700 text-lg font-semibold mr-4">
                    Giá bán:
                  </span>
                  <div className="product-price">475.000₫</div>
                  <div className="product-original-price line-through ml-4 ">
                    680.000₫
                  </div>
                  <div className="discount-tag flex items-center ml-4 bg-red-500 text-white px-2 py-1 rounded">
                    <IoFlash className="h-4 w-4 " />
                    <span className="ml-1 ">30%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://theme.hstatic.net/200000417685/1001040197/14/pcs_128.png?v=1173"
                  alt=""
                  className="w-8 h-8"
                />
                <div>
                  <h3>48</h3>
                  <h3>Mảnh ghép</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://theme.hstatic.net/200000417685/1001040197/14/level_128.png?v=1173"
                  alt=""
                  className="w-8 h-8"
                />
                <div>
                  <h3>6/10</h3>
                  <h3>Độ khó</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://theme.hstatic.net/200000417685/1001040197/14/size2_128.png?v=1173"
                  alt=""
                  className="w-8 h-8"
                />
                <div>
                  <h3>5x8x5cm</h3>
                  <h3>Kích Thước(DxRxC)</h3>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <span className="mr-4 text-gray-700">Số lượng:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                  onClick={decreaseQuantity}
                >
                  <BiMinus className="h-4 w-4" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 py-1 text-center focus:outline-none"
                />
                <button
                  className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                  onClick={increaseQuantity}
                >
                  <BiPlus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-6 space-x-2">
              <div className="flex gap-4 w-full h-full ">
                <button className="btn-outline flex-1 border-red-600 border-2 text-red-600 hover:bg-red-600 hover:text-white">
                  THÊM VÀO GIỎ
                </button>
                <button className="btn-primary flex-1 bg-red-600 text-white hover:bg-red-700">
                  MUA NGAY
                </button>
              </div>
              <div className="flex gap-4 ">
                <button className="p-3 border border-gray-300 rounded hover:bg-red-200">
                  <BiHeart className="h-5 w-5 text-gray-500" />
                </button>
                <button
                  onClick={toggleModal}
                  className="p-3 border border-gray-300 rounded hover:bg-blue-400"
                >
                  <CiShare2 className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div></div>
            <div className="grid grid-cols-2 mt-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://theme.hstatic.net/200000417685/1001040197/14/product_info1_desc1_img.png?v=1173"
                  alt=""
                />
                <h3>Freeship hóa đơn từ 290K</h3>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://theme.hstatic.net/200000417685/1001040197/14/product_info1_desc2_img.png?v=1173"
                  alt=""
                />
                <h3>Cam kết hàng chính hãng 100%</h3>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://theme.hstatic.net/200000417685/1001040197/14/product_info2_desc1_img.png?v=1173"
                  alt=""
                />
                <h3>Đổi trả trong 3 ngày</h3>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://theme.hstatic.net/200000417685/1001040197/14/product_info2_desc2_img.png?v=1173"
                  alt=""
                />
                <h3>Kiểm tra hàng khi nhận</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-400 w-full flex justify-between">
        <CouponItem></CouponItem>
        <CouponItem></CouponItem>
        <CouponItem></CouponItem>
      </div>

      <div className="flex">
        <div className="bg-gray-600 flex w-full justify-between ">
          <div className="flex flex-3 p-4 flex-col gap-4 ">
            <ProductTabSelect />
            <ProductCarousel />
          </div>
          <div className="flex flex-1">
            <ProductScroll />
          </div>
        </div>
      </div>
      {/* Modal for sharing */}
      {showModal && (
        <>
          <div
            onClick={toggleModal}
            className="modal fixed top-0 opacity-50 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10"
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 modal-content bg-white p-6 rounded shadow-lg z-30">
            <span className="close">&times;</span>
            <h2 className="text-lg font-semibold">Chia sẻ sản phẩm</h2>
            <p className="mt-4">Chia sẻ sản phẩm này với bạn bè của bạn!</p>
            <div className="mt-4">
              <button className="btn-primary bg-blue-500 text-white px-4 py-2 rounded">
                Chia sẻ qua Facebook
              </button>
              <button className="btn-primary bg-blue-400 text-white px-4 py-2 rounded ml-2">
                Chia sẻ qua Twitter
              </button>
            </div>
          </div>
        </> // Replace with a state variable to control modal visibility
      )}
    </div>
  );
};
export default ProductPage;

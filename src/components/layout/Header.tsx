import { IoSearch, IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { useState } from "react";
import HeaderItem from "../ui/HeaderItem";
import SearchBar from "../ui/SearchBar";
import CartSidebar from "../ui/CartSideBar";
import SidebarMenu from "../ui/SideBarMenu";
import { href } from "react-router-dom";
// https://theme.hstatic.net/200000417685/1001040197/14/top_banner_lg.jpg?v=1169?v=4
// https://theme.hstatic.net/200000417685/1001040197/14/slide_1_img.jpg?v=1169
// https://theme.hstatic.net/200000417685/1001040197/14/slide_3_img.jpg?v=1169
// https://theme.hstatic.net/200000417685/1001040197/14/top_right_banner.jpg?v=1169
// https://theme.hstatic.net/200000417685/1001040197/14/bottom_right_banner.png?v=1169
const Header = ({ toggleSidebar }: any) => {
  const Menu = [
    { id: 1, name: "Trang chủ", href: "/" },
    {
      id: 2,
      name: "Danh mục",
      href: "/collections",
      subMenu: [
        {
          id: 1,
          name: "Mô hình trưng bày",
          children: [
            { id: 1, name: "Mô hình OnePiece", href: "collections/onepiece" },
            { id: 2, name: "Mô hình Anime", href: "collections/anime" },
            { id: 3, name: "Mô hình Marvel", href: "collections/marvel" },
            { id: 5, name: "Mô hình Gundam", href: "collections/gundam" },
            { id: 6, name: "Mô hình khác", href: "collections/other" },
          ],
        },
        {
          id: 2,
          name: "Mô hình lắp ráp",
          children: [
            { id: 1, name: "Mô hình 3D", href: "collections/mo-hinh-3d" },
            { id: 2, name: "Mô hình Giấy", href: "collections/mo-hinh-giay" },
            { id: 3, name: "Mô hình Gỗ", href: "collections/mo-hinh-go" },
            {
              id: 4,
              name: "Mô hình Kim loại",
              href: "collections/mo-hinh-kim-loai",
            },
            {
              id: 5,
              name: "Mô hình Giá rẻ",
              href: "collections/mo-hinh-gia-re",
            },
            { id: 6, name: "Mô hình khác", href: "collections/other" },
          ],
        },
      ],
    },
    { id: 3, name: "Dụng cụ lắp ráp", href: "/assemble-tool" },
    {
      id: 4,
      name: "Hãng sản xuất",
      href: "/brand",
      subMenu: [
        {
          id: 1,
          name: "Mô hình trưng bày",
          children: [
            { id: 1, name: "Metal heart", href: "brand/metal-heart" },
            { id: 2, name: "DC comic", href: "brand/dc-comic" },
            { id: 3, name: "18k super", href: "brand/18k-super" },
            { id: 4, name: "Ozem", href: "brand/ozem" },
            { id: 5, name: "Bandai Namco", href: "brand/bandai-namco" },
            { id: 7, name: "Max Factory", href: "brand/max-factory" },
            { id: 8, name: "Square Enix", href: "brand/square-enix" },
          ],
        },
        {
          id: 2,
          name: "Mô hình lắp ráp",
          children: [
            { id: 1, name: "LEGO", href: "brand/lego" },
            { id: 2, name: "SEMBO BLOCK", href: "brand/sembo-block" },
            { id: 3, name: "MOYU BLOCK", href: "brand/moyu-block" },
            { id: 4, name: "WANGE", href: "brand/wange" },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Ưu đãi",
      href: "/promotion",
      children: [
        { id: 1, name: "WareHouse Sale", href: "promotion/sale" },
        { id: 2, name: "Chương trình ưu đãi", href: "promotion/offer" },
        { id: 3, name: "Khách hàng thân thiết", href: "promotion/loyalty" },
      ],
    },
    { id: 6, name: "Tin tức" },
    {
      id: 7,
      name: "Trợ giúp",
      href: "/help",
      subMenu: [
        {
          id: 1,
          name: "Chính sách",
          children: [
            { id: 1, name: "Chính sách đổi trả", href: "help/return-policy" },
            {
              id: 2,
              name: "Hình thức thanh toán",
              href: "help/payment-method",
            },
            {
              id: 3,
              name: "Chính sách giao hàng",
              href: "help/shipping-policy",
            },
          ],
        },
        {
          id: 2,
          name: "Thông tin",
          children: [
            {
              id: 1,
              name: "Mô hình lắp ráp là gì",
              href: "help/what-is-assemble-model",
            },
            {
              id: 2,
              name: "Hướng dẫn lắp ráp",
              href: "help/assemble-guide",
            },
            {
              id: 3,
              name: "Câu hỏi thường gặp",
              href: "help/faq",
            },
            {
              id: 5,
              name: "Hướng dẫn đặt hàng",
              href: "help/order-guide",
            },
            { id: 4, name: "Liên hệ", href: "help/contact" },
          ],
        },
      ],
    },
  ];
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCartSidebar, setIsOpenCartSidebar] = useState(false);

  // Tương tự cho sub items
  const toggleSearch = () => {
    console.log("open search bar");
    setIsOpenSearch(!isOpenSearch);
  };
  const toggleCartSidebar = () => {
    console.log("open cart sidebar");
    setIsOpenCartSidebar(!isOpenCartSidebar);
  };
  const toggleSidebarMenu = () => {
    console.log("open sidebar menu");
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="flex flex-col w-full h-full bg-gray-100 sticky top-0 z-50 ">
      <div className="bg-red-500 text-white p-2 h-6 justify-center flex items-center">
        <h3 className="text-sm">Free shipping for orders over $200</h3>
      </div>
      <div className="bg-gray-800 p-3 text-white justify-between flex items-center">
        <div
          onClick={toggleSidebarMenu}
          className="lg:hidden flex items-center cursor-pointer"
        >
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path>
          </svg>
        </div>
        <div className="">
          <span className="text-5xl font-bold bg-image-text ">BCshop</span>
        </div>
        <div className="flex space-x-5 flex-wrap items-center justify-center">
          {Menu.map((item) => (
            <HeaderItem key={item.id} item={item} />
          ))}
        </div>
        <div className="flex space-x-4 ">
          <span onClick={toggleSearch} className="relative cursor-pointer">
            <IoSearch></IoSearch>
          </span>
          <span onClick={toggleSidebarMenu} className="relative cursor-pointer">
            <IoPersonOutline></IoPersonOutline>
          </span>
          <span onClick={toggleCartSidebar} className="relative cursor-pointer">
            <IoBagOutline></IoBagOutline>
          </span>
        </div>
      </div>
      {isOpenSearch && (
        <SearchBar setIsOpenSearch={setIsOpenSearch} isOpen={isOpenSearch} />
      )}

      {isOpenMenu && (
        <SidebarMenu Menu={Menu} toggleSidebarMenu={toggleSidebarMenu} />
      )}
      {isOpenCartSidebar && (
        <CartSidebar
          toggleCartSidebar={toggleCartSidebar}
          isOpen={isOpenCartSidebar}
        />
      )}
    </header>
  );
};

export default Header;

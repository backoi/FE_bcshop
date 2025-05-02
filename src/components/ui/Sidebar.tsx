import { Link } from "react-router-dom";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <>
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 h-full w-full opacity-50 bg-black z-9 ${
          isOpen ? "block" : "hidden"
        } `}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 p-4 transition-transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="mb-4 text-white" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mt-4">
          <h3 className="text-lg font-bold">Giỏ hàng</h3>
          <ul>
            <li className="p-2 hover:bg-gray-700">Sản phẩm 1</li>
            <li className="p-2 hover:bg-gray-700">Sản phẩm 2</li>
            <li className="p-2 hover:bg-gray-700">Sản phẩm 3</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Tổng tiền</h3>
          <p className="text-xl font-bold">$199.99</p>
        </div>
        <div className="mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Thanh toán
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Xóa giỏ hàng
          </button>
        </div>
        <div className="mt-4 absolute bottom-5 left-1/2 -translate-x-1/2">
          <Link
            to={"/cart"}
            className="bg-red-500 text- xl text-white px-1 py-2 rounded"
          >
            Open Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

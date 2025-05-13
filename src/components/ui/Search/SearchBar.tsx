import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import InputSearch from "./InputSearch";
import SearchItem from "./SearchItem";
import { products } from "../../../products";
import { FaTimes } from "react-icons/fa";
const SearchBar = ({ isOpen, setIsOpenSearch }: any) => {
  const [showSearch, setShowSearch] = useState(isOpen);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (isOpen) {
      setShowSearch(true);
      setTimeout(() => {
        document
          .getElementById("search-bar")
          ?.classList.add("translate-y-0", "opacity-100");
      }, 100); // Delay một chút để kích hoạt animation
    } else {
      document
        .getElementById("search-bar")
        ?.classList.remove("translate-y-0", "opacity-100");
      setTimeout(() => setShowSearch(false), 300); // Chờ animation xong rồi ẩn
    }
  }, [isOpen]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpenSearch(false)}
          className="fixed inset-0 bg-black/30 w-full h-full z-50 "
        ></div>
      )}

      {showSearch && (
        <div
          id="search-bar"
          className="fixed flex inset-0 w-full h-fit bg-white z-55 transition-all duration-300 -translate-y-full opacity-0"
        >
          <div className="mt-4 flex flex-row w-full items-center py-5">
            <span className="text-3xl font-bold bg-image-text flex-1 cursor-pointer ml-4">
              BCshop
            </span>
            <div className="flex flex-2 flex-col items-center justify-center w-full h-full ">
              <InputSearch setSearch={setSearch} />
              {search && (
                <div className="flex flex-col  w-full h-full gap-2 overflow-y-auto mt-4">
                  {products.slice(0, 4).map((item) => (
                    <SearchItem key={item.productId} product={item} />
                  ))}
                  <h2 className="text-center text-md font-bold hover:text-amber-500 cursor-pointer">
                    Xem thêm {products.length - 4} sản phẩm
                  </h2>
                </div>
              )}
            </div>
            <div className="flex-1  flex justify-end">
              <button
                onClick={() => setIsOpenSearch(false)}
                className="w-10 h-10 flex items-center justify-center mr-2 hover:bg-gray-300 rounded-full"
              >
                <FaTimes size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("root") as HTMLElement
  );
};

export default SearchBar;

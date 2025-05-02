import { useState, useEffect } from "react";

const SearchBar = ({ isOpen, setIsOpenSearch }: any) => {
  const [showSearch, setShowSearch] = useState(false);

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

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpenSearch(false)}
          className="fixed inset-0 bg-black w-full h-full z-50 opacity-50"
        ></div>
      )}

      {showSearch && (
        <div
          id="search-bar"
          className=" fixed top-0 left-0 right-0 mx-auto space-x-2 w-1/2 z-50 flex items-center justify-between bg-white p-4 shadow-lg rounded transition-all duration-300 transform -translate-y-full opacity-0"
        >
          <input
            type="text"
            placeholder="Search..."
            className="border rounded p-2 flex-grow"
          />
          <button className="bg-blue-500 text-white p-2 rounded">Search</button>
        </div>
      )}
    </>
  );
};

export default SearchBar;

// const SearchBar = ({ isOpen, setIsOpenSearch }: any) => {
//   return (
//     <>
//       {isOpen && (
//         <div
//           onClick={() => setIsOpenSearch(false)}
//           className="fixed inset-0 bg-black w-full h-full z-99 opacity-50"
//         ></div>
//       )}
//       <div className="fixed top-0 left-0 right-0 mx-auto w-1/2 z-1000 flex items-center justify-between bg-white p-4 shadow-lg rounded-lg">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border rounded p-2 flex-grow"
//         />
//         <button className="bg-blue-500 text-white p-2 rounded">Search</button>
//       </div>
//     </>
//   );
// };

// export default SearchBar;

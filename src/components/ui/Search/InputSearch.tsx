import { FaSearch } from "react-icons/fa";

const InputSearch = ({
  setSearch,
}: {
  setSearch: (search: string) => void;
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-2">
      <input
        className="w-full h-10 rounded border-2 border-gray-300 p-2 outline-amber-200"
        type="text"
        placeholder="Tìm kiếm sản phẩm"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="w-10 hover:bg-amber-200 h-10 cursor-pointer flex items-center justify-center rounded-md border-2 border-gray-300 p-2">
        <FaSearch />
      </button>
    </div>
  );
};

export default InputSearch;

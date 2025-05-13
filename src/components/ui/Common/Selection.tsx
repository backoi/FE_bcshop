import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Selection = ({
  name,
  items,
  onSubmit,
  onReset,
  onChange,
  selectedCategories,
}: {
  name: string;
  items: { id: string; name: string; label: string }[];
  onSubmit: () => void;
  onReset: () => void;
  onChange: (category: string) => void;
  selectedCategories: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  //const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // const handleCheckboxChange = (id: string) => {
  //   const name = items.find((category) => category.id === id)?.name || "";

  //   setSelectedCategories(
  //     selectedCategories.includes(name)
  //       ? selectedCategories.filter((item) => item !== name)
  //       : [...selectedCategories, name]
  //   );
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="relative w-full p-4 bg-white shadow-lg rounded-lg">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <h1 className="text-2xl font-bold">{name}</h1>
        <FaChevronDown className="text-2xl" />
      </div>

      {isOpen && (
        <div className="top-full z-20 left-0 w-full bg-white shadow-lg rounded-lg p-4 mt-2">
          <ul>
            {items.map((category, index) => (
              <li
                key={category.id}
                className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
              >
                <span>{category.label}</span>
                <input
                  type="checkbox"
                  value={category.name}
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => onChange(category.name)}
                />
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-4">
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              onClick={() => onReset()}
            >
              Đặt lại
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Áp dụng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selection;

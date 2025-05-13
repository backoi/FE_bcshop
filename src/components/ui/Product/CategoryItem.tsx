import React from "react";

const CategoryItem = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="group cursor-pointer transition-all duration-300 hover:scale-105 w-full">
      <div className="flex flex-col gap-4 justify-center items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-40 w-40 mx-auto">
        <div className="overflow-hidden rounded-full border-2 border-gray-100">
          <img
            className="w-16 h-16 object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
            src={img}
            alt={title}
          />
        </div>
        <h3 className="hidden md:block font-medium text-gray-800 group-hover:text-blue-600 transition-colors text-center text-sm truncate w-full">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryItem;

import React from "react";

const CategoryItem = ({ img, title }: { img: string; title: string }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <img className="w-20 object-cover aspect-square" src={img} alt="" />
        <h3 className="hidden md:block">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryItem;

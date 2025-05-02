import { useState } from "react";
import DropMenu from "./DropMenu";
import { Link } from "react-router-dom";

const HeaderItem = ({ item }: { item: any }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer hidden lg:block"
    >
      <Link
        to={item.href}
        className="text-white p-4 text-nm flex flex-col items-center"
      >
        <h3 className="text-white">{item.name}</h3>
      </Link>
      {isHovering && (
        <DropMenu
          isOpen={isHovering}
          subMenu={item.subMenu}
          children={item.children}
        />
      )}
    </span>
  );
};

export default HeaderItem;

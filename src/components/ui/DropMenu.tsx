import { Link } from "react-router-dom";

const DropMenu = ({
  isOpen,
  subMenu,
  children,
}: {
  isOpen: boolean;
  subMenu?: any;
  children?: any;
}) => {
  return (
    <>
      {isOpen && subMenu && (
        <div className="absolute -translate-x-1/2 left-1/2 top-12 z-[999] bg-white shadow-xl rounded-lg p-6  text-black min-w-[500px] transform transition-all duration-200 ease-out">
          <div className="grid grid-cols-2 gap-8">
            {subMenu.map((item: any) => (
              <div key={item.id} className="space-y-3">
                <li className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 block whitespace-nowrap">
                  {item.name}
                </li>

                <ul className="space-y-3">
                  {item.children.map((child: any) => (
                    <li
                      key={child.id}
                      className="py-2 px-3 hover:bg-red-50 rounded-md transition-colors duration-150 cursor-pointer group"
                    >
                      <Link
                        to={`/${child.href}`}
                        className="text-gray-700 group-hover:text-red-600"
                      >
                        {child.name}
                      </Link>
                      {child.description && (
                        <p className="text-xs text-gray-500 mt-1">
                          {child.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      {isOpen && children && (
        <div className="absolute top-full left-0 z-[999] bg-white shadow-xl rounded-lg py-3 px-2 text-black min-w-[220px] animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {children.map((item: any) => (
              <div
                key={item.id}
                className="group relative px-4 py-2 rounded-md transition-all duration-200 hover:bg-amber-50"
              >
                <span className="text-gray-800 font-medium whitespace-nowrap group-hover:text-amber-600">
                  {item.name}
                </span>

                {/* Hiệu ứng gạch chân khi hover */}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DropMenu;

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
export default function SidebarMenu({
  Menu,
  toggleSidebarMenu,
}: {
  Menu: any[];
  toggleSidebarMenu: () => void;
}) {
  const [openMenus, setOpenMenus] = useState<Record<number, boolean>>({});
  const [openChildren, setOpenChildren] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const toggleMenu = (id: number) => {
    setOpenMenus((prev: Record<number, boolean>) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleChild = (parentId: number, childId: number) => {
    const key = `${parentId}-${childId}`;
    setOpenChildren((prev: Record<string, boolean>) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return ReactDOM.createPortal(
    <>
      <div
        onClick={toggleSidebarMenu}
        className="fixed inset-0 w-full h-full bg-black/30 z-51"
      ></div>
      <div
        className={`fixed top-0 left-0 h-screen w-[80%] max-w-[320px] bg-white shadow-xl p-4 space-y-2 z-[52] overflow-y-auto transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <div className="text-xl font-bold">Menu</div>
          <button
            onClick={toggleSidebarMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {Menu.map((item) => (
          <div key={item.id} className="border-b pb-2">
            <div
              className="cursor-pointer font-semibold hover:text-blue-600 flex justify-between items-center py-2"
              onClick={() =>
                (item.subMenu || item.children) && toggleMenu(item.id)
              }
            >
              <a href={item.href || "#"}>{item.name}</a>
              {(item.subMenu || item.children) && (
                <span className="text-lg">
                  {openMenus[item.id] ? "−" : "+"}
                </span>
              )}
            </div>

            {(item.subMenu || item.children) && openMenus[item.id] && (
              <div className="pl-4 mt-1 space-y-2">
                {item.subMenu?.map((sub: any) => {
                  const key = `${item.id}-${sub.id}`;
                  return (
                    <div key={sub.id} className="py-1">
                      <div
                        className="cursor-pointer text-sm font-medium flex justify-between items-center"
                        onClick={() => toggleChild(item.id, sub.id)}
                      >
                        <span>{sub.name}</span>
                        <span>{openChildren[key] ? "−" : "+"}</span>
                      </div>
                      {openChildren[key] && (
                        <ul className="pl-4 list-disc text-sm text-gray-600 space-y-2 pt-1">
                          {sub.children.map((child: any) => (
                            <li key={child.id}>
                              <a
                                href={child.href || "#"}
                                className="hover:text-blue-600"
                              >
                                {child.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}

                {item.children &&
                  item.children.length > 0 &&
                  item.children?.map((child: any) => (
                    <li
                      key={child.id}
                      className="list-disc text-sm text-gray-600 pl-4 py-1"
                    >
                      <a
                        href={child.href || "#"}
                        className="hover:text-blue-600"
                      >
                        {child.name}
                      </a>
                    </li>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>,
    document.getElementById("root") as HTMLElement
  );
}

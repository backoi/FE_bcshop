import { useState } from "react";

export default function SidebarMenu({
  Menu,
  toggleSidebarMenu,
}: {
  Menu: any[];
  toggleSidebarMenu: () => void;
}) {
  const [openMenus, setOpenMenus] = useState<Record<number, boolean>>({});
  const [openChildren, setOpenChildren] = useState<Record<string, boolean>>({});

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

  return (
    <>
      <div
        onClick={toggleSidebarMenu}
        className="fixed top-0 left-0 h-full bg-gray-800 opacity-50 text-white w-full p-4 z-50"
      ></div>
      <div className="fixed w-full h-full md:w-96 bg-white shadow-md p-4 space-y-2 z-99 overflow-auto">
        {Menu.map((item) => (
          <div key={item.id}>
            <div
              className="cursor-pointer font-semibold hover:text-blue-600 flex justify-between items-center"
              onClick={() =>
                (item.subMenu || item.children) && toggleMenu(item.id)
              }
            >
              <a href={item.href || "#"}>{item.name}</a>
              {(item.subMenu || item.children) && (
                <span>{openMenus[item.id] ? "−" : "+"}</span>
              )}
            </div>

            {(item.subMenu || item.children) && openMenus[item.id] && (
              <div className="pl-4 mt-1 space-y-1">
                {/* Hiển thị submenu */}
                {item.subMenu?.map((sub: any) => {
                  const key = `${item.id}-${sub.id}`;
                  return (
                    <div key={sub.id}>
                      <div
                        className="cursor-pointer text-sm font-medium flex justify-between items-center"
                        onClick={() => toggleChild(item.id, sub.id)}
                      >
                        <span>{sub.name}</span>
                        <span>{openChildren[key] ? "−" : "+"}</span>
                      </div>
                      {openChildren[key] && (
                        <ul className="pl-4 list-disc text-sm text-gray-600 space-y-1">
                          {sub.children.map((child: any) => (
                            <li key={child.id}>{child.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}

                {/* Hiển thị children nếu không có subMenu */}
                {item.children &&
                  item.children.length > 0 &&
                  item.children?.map((child: any) => (
                    <li
                      key={child.id}
                      className="list-disc text-sm text-gray-600 pl-4"
                    >
                      {child.name}
                    </li>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

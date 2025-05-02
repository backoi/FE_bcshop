import React from "react";
import NewsItem from "../../components/ui/NewsItem";

const news = [
  {
    title: "Nhân Đôi Ưu Đãi – Mừng Xuân Giáp Thìn",
    image:
      "https://file.hstatic.net/200000417685/article/pre_tet_2024_post_banner_3048beed727645bfacc8157d56088cb6_1024x1024.jpg",
    date: "20.01.2024",
    author: "Nguyễn Trinh",
    desc: "Gấp đôi ưu đãi tặng Chậu Hoa Nhỏ, Thiên Ngữ Hạc hoặc Lân Phát Tài Mini mừng Xuân Giáp Thìn...",
  },
  {
    title: "MUA KÈM DEAL SỐC – GIẢM ĐẾN 70%",
    image:
      "https://file.hstatic.net/200000417685/article/deal_soc_2024_post_banner_b4d320b2ab8c43e0b8119e36c876778f_grande.jpg",
    date: "06.01.2024",
    author: "Art Puzzle",
    desc: "Mua kèm sản phẩm HOT giảm giá đến 70%, áp dụng từ 7.1...",
  },
  {
    title: "MUA KÈM DEAL SỐC – GIẢM ĐẾN 70%",
    image:
      "https://file.hstatic.net/200000417685/article/back_to_school_post_banner_5908bde6d788488383049a6f6213c3c4_grande.jpg",
    date: "06.01.2024",
    author: "Art Puzzle",
    desc: "Mua kèm sản phẩm HOT giảm giá đến 70%, áp dụng từ 7.1...",
  },
  {
    title: "[BLACK FRIDAY] GIẢM ĐẾN 70%",
    image:
      "https://file.hstatic.net/200000417685/article/black_friday_web_post_2477567ff0924d4db1c9a0d9608dbe2a_grande.jpg",
    date: "22.11.2023",
    author: "Hứa Thế Khánh",
    desc: "Giảm giá đến 70% toàn bộ mô hình lắp ráp 3D...",
  },
  // Add more...
];

const NewsPage = () => {
  return (
    <div className=" mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Main News List */}
      <div className="md:col-span-3 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tin tức</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, idx) => (
            <NewsItem key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Bài viết mới nhất</h3>
          <div className="space-y-3">
            {news.slice(0, 4).map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-orange-600 font-bold">{idx + 1}</span>
                <div>
                  <h4 className="text-sm font-medium text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories ----BAO GỒM THẺ CON----- */}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 ">
            <i className="fas fa-folder-open mr-2 "></i> Danh mục bài viết
          </h3>
          <div className="category-dropdown relative">
            <button className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition">
              <span>Chọn danh mục</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="dropdown-content absolute z-10 w-full  bg-white rounded-md shadow-lg border border-gray-200">
              <ul className="py-1">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                  >
                    Tất cả danh mục
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                  >
                    Mô hình
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                  >
                    Khuyến mãi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

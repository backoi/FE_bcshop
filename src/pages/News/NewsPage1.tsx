const NewsPage1 = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">
        Tin Tức Mô Hình
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* <!-- Left Column - Article List (2/3 width) --> */}
        <div className="w-full lg:w-2/3">
          {/* <!-- Article List --> */}
          <div className="space-y-8">
            {/* <!-- Article Item 1 --> */}
            <div className="article-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    alt="Mô hình xe cổ"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Xe mô hình
                    </span>
                    <span className="text-gray-500 text-sm ml-4">
                      10/10/2023
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
                    Bộ sưu tập xe mô hình cổ điển mới nhất 2023
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Khám phá những chiếc xe mô hình cổ điển được chế tác tỉ mỉ
                    với độ chi tiết cao, mang đến trải nghiệm sưu tầm tuyệt vời
                    cho người yêu xe.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-eye mr-1"></i>
                    <span className="mr-4">1.2K lượt xem</span>
                    <i className="fas fa-comment mr-1"></i>
                    <span>24 bình luận</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Article Item 2 --> */}
            <div className="article-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Mô hình robot"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Robot
                    </span>
                    <span className="text-gray-500 text-sm ml-4">
                      05/10/2023
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
                    Hướng dẫn lắp ráp mô hình Gundam cho người mới bắt đầu
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Bài viết chi tiết hướng dẫn từng bước lắp ráp mô hình
                    Gundam, các công cụ cần thiết và mẹo để có thành phẩm hoàn
                    hảo.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-eye mr-1"></i>
                    <span className="mr-4">2.4K lượt xem</span>
                    <i className="fas fa-comment mr-1"></i>
                    <span>56 bình luận</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Article Item 3 --> */}
            <div className="article-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1605001297536-d9e9988ff1f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Mô hình tàu chiến"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Quân sự
                    </span>
                    <span className="text-gray-500 text-sm ml-4">
                      28/09/2023
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
                    Top 10 mô hình tàu chiến lịch sử đáng sưu tầm nhất
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Tổng hợp những mô hình tàu chiến nổi tiếng trong lịch sử với
                    độ chi tiết cao, phù hợp cho các nhà sưu tập mô hình quân
                    sự.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-eye mr-1"></i>
                    <span className="mr-4">890 lượt xem</span>
                    <i className="fas fa-comment mr-1"></i>
                    <span>18 bình luận</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pagination --> */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <ul className="flex">
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50 pagination-item active"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50 pagination-item"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50 pagination-item"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 rounded-r-md"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* <!-- Right Column - Sidebar (1/3 width) --> */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* <!-- Featured Articles --> */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 text-blue-800">
              <i className="fas fa-star mr-2 text-yellow-400"></i> Bài viết nổi
              bật
            </h3>
            <div className="space-y-4">
              <div className="flex items-start cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1605001016900-683b1a8208ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Mô hình máy bay"
                  className="w-20 h-16 object-cover rounded"
                />
                <div className="ml-3">
                  <h4 className="font-medium group-hover:text-blue-600">
                    Triển lãm mô hình máy bay quốc tế 2023
                  </h4>
                  <p className="text-sm text-gray-500">15/09/2023</p>
                </div>
              </div>
              <div className="flex items-start cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1605001297536-d9e9988ff1f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Mô hình tàu"
                  className="w-20 h-16 object-cover rounded"
                />
                <div className="ml-3">
                  <h4 className="font-medium group-hover:text-blue-600">
                    Bí quyết sơn mô hình tàu chiến chân thực
                  </h4>
                  <p className="text-sm text-gray-500">22/09/2023</p>
                </div>
              </div>
              <div className="flex items-start cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Mô hình robot"
                  className="w-20 h-16 object-cover rounded"
                />
                <div className="ml-3">
                  <h4 className="font-medium group-hover:text-blue-600">
                    Đánh giá bộ dụng cụ lắp ráp Gundam MG
                  </h4>
                  <p className="text-sm text-gray-500">30/09/2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Categories Dropdown --> */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 text-blue-800">
              <i className="fas fa-folder-open mr-2 text-blue-500"></i> Danh mục
            </h3>
            <div className="category-dropdown relative">
              <button className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                <span>Chọn danh mục</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="dropdown-content absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
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
                      Xe mô hình
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    >
                      Robot/Gundam
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    >
                      Mô hình quân sự
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    >
                      Máy bay
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    >
                      Tàu thủy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    >
                      Nhân vật
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    >
                      Kiến trúc
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Newsletter Subscription --> */}
          <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Đăng ký nhận tin</h3>
            <p className="mb-4">
              Nhận thông tin mới nhất về sản phẩm và khuyến mãi từ ModelShop
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-2 rounded text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded transition"
              >
                Đăng ký ngay
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsPage1;

{
  /* // Simple script to handle dropdown toggle
        document.addEventListener('DOMContentLoaded', function() {
            const dropdownButton = document.querySelector('.category-dropdown button');
            const dropdownContent = document.querySelector('.dropdown-content');
            
            dropdownButton.addEventListener('click', function(e) {
                e.preventDefault();
                const isOpen = dropdownContent.style.display === 'block';
                dropdownContent.style.display = isOpen ? 'none' : 'block';
                
                // Toggle chevron icon
                const icon = this.querySelector('i');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.category-dropdown')) {
                    dropdownContent.style.display = 'none';
                    const icon = dropdownButton.querySelector('i');
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
            
            // Article card click handler
            const articleCards = document.querySelectorAll('.article-card');
            articleCards.forEach(card => {
                card.addEventListener('click', function() {
                    // In a real implementation, this would navigate to the article page
                    alert('Chuyển đến trang bài viết chi tiết');
                });
            });
            }); */
}

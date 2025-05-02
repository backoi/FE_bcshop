import React from "react";

const TableOfContents = () => (
  <div className="bg-[#f9fcff] border border-blue-100 rounded p-4 text-sm">
    <h3 className="font-semibold text-gray-800 mb-2">Các nội dung chính</h3>
    <ul className="list-decimal list-inside space-y-1 text-blue-600">
      <li>
        <a href="#thoi-gian">1. Thời gian</a>
      </li>
      <li>
        <a href="#noi-dung">2. Nội dung chương trình</a>
      </li>
      <li>
        <a href="#cach-dat">3. Cách thức đặt hàng hợp lệ</a>
      </li>
      <li>
        <a href="#doi-tuong">4. Đối tượng tham gia</a>
      </li>
      <li>
        <a href="#luu-y">5. Lưu ý</a>
      </li>
      <li>
        <a href="#faq">6. Câu hỏi thường gặp</a>
      </li>
    </ul>
  </div>
);

const PostDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="md:col-span-3 space-y-6">
        <img
          src="/images/dealsoc.jpg"
          alt="Deal sốc"
          className="w-full rounded-lg"
        />

        <TableOfContents />

        <div className="prose max-w-none mt-6">
          <h2 id="thoi-gian">1. Thời gian</h2>
          <p>Từ 7.1 đến hết ngày 15.1</p>

          <h2 id="noi-dung">2. Nội dung chương trình</h2>
          <p>
            Khi mua sắm với hóa đơn từ <strong>299K</strong>, quý khách hàng sẽ
            được tham gia chương trình Mua Kèm Deal Sốc với hơn 130 sản phẩm HOT
            giảm giá đến <strong>70%</strong>.
          </p>
          <p>
            Danh sách sản phẩm thuộc chương trình Deal Sốc 2024 quý khách xem
            tại đây:{" "}
            <a
              href="https://artpuzzle.vn/collections/deal-soc-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://artpuzzle.vn/collections/deal-soc-2024
            </a>
          </p>

          <h2 id="cach-dat">3. Cách thức đặt hàng hợp lệ</h2>
          <p>Thông tin chi tiết về quy trình đặt hàng sẽ được cập nhật...</p>

          <h2 id="doi-tuong">4. Đối tượng tham gia</h2>
          <p>Chương trình dành cho tất cả khách hàng...</p>

          <h2 id="luu-y">5. Lưu ý</h2>
          <p>Chỉ áp dụng đơn từ 299K, không cộng dồn nhiều đơn...</p>

          <h2 id="faq">6. Câu hỏi thường gặp</h2>
          <p>Bạn có thể tham khảo thêm tại mục FAQ...</p>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        {/* Bài viết mới nhất */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Bài viết mới nhất</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item, idx) => (
              <div key={idx} className="flex gap-3 text-sm">
                <span className="text-orange-600 font-bold">{item}</span>
                <div>
                  <p className="font-medium">Tiêu đề bài viết {item}</p>
                  <p className="text-xs text-gray-400">Tin tức - 20.01.2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Danh mục */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Danh mục bài viết</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>📁 MÔ HÌNH</li>
            <li>📁 DANH MỤC</li>
            <li>📁 HÃNG SẢN XUẤT</li>
            <li>📁 ƯU ĐÃI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

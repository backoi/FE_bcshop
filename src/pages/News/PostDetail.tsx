import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//tiep tuc sửa sidebar
const TableOfContents = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="bg-[#f9fcff] border border-blue-100 rounded p-4 text-sm">
      <div className="flex gap-4 items-center mb-2">
        <h3 className="font-semibold text-gray-800">Các nội dung chính</h3>
        <span onClick={() => setIsShow(!isShow)}>{isShow ? "Ẩn" : "Hiện"}</span>
      </div>

      <ul
        className={` list-inside space-y-1 overflow-hidden transition-all duration-500 ease-in-out ${
          isShow ? "max-h-screen" : "max-h-0"
        }`}
      >
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
};

const PostDetail = () => {
  const { blogId } = useParams();
  console.log(blogId);

  // Add state to track header height
  const [headerHeight, setHeaderHeight] = useState(0);

  // Update header height on mount and when window resizes
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      } else {
        setHeaderHeight(0);
      }
    };

    // Initial measurement
    updateHeaderHeight();

    // Listen for window resize to recalculate
    //window.addEventListener("resize", updateHeaderHeight); //khi resize cửa sổ trình duyệt, cập nhật lại chiều cao header

    // Listen for custom header height change events
    const handleHeaderHeightChange = (event: CustomEvent) => {
      setHeaderHeight(event.detail.height);
    };

    document.addEventListener(
      "headerHeightChange", //tên event được tạo ra từ header.tsx
      handleHeaderHeightChange as EventListener
    );

    return () => {
      //window.removeEventListener("resize", updateHeaderHeight);
      document.removeEventListener(
        "headerHeightChange",
        handleHeaderHeightChange as EventListener
      );
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="md:col-span-3 space-y-6">
        <img
          src="https://file.hstatic.net/200000417685/article/deal_soc_2024_post_banner_b4d320b2ab8c43e0b8119e36c876778f.jpg"
          alt="Deal sốc"
          className="w-full rounded-lg"
        />

        <TableOfContents />

        <div className=" max-w-none mt-6">
          <h2 id="thoi-gian" className="text-2xl font-bold">
            1. Thời gian
          </h2>
          <p>Từ 7.1 đến hết ngày 15.1</p>
          <h2 id="noi-dung" className="text-2xl font-bold">
            2. Nội dung chương trình
          </h2>
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
          <h2 id="cach-dat" className="text-2xl font-bold">
            3. Cách thức đặt hàng hợp lệ
          </h2>
          <p>
            Giả sử đơn hàng gốc của quý khách sẽ mua là 2.600.000 đ. Quý khách
            được hưởng 2 ưu đãi: 1. Ưu đãi thuộc chương trình ưu đãi theo giá
            trị đơn hàng 2. Nhân Đôi Ưu Đãi – Mừng Xuân Giáp Thìn (tặng 2 Chậu
            Hoa Nhỏ hoặc 2 Thiên Ngữ Hạc hoặc 1 Chậu Hoa Nhỏ + 1 Thiên Ngữ Hạc
            hoặc 1 Lân Mini) Quý khách vui lòng KHÔNG cho sản phẩm thuộc chương
            trình trên vào giỏ hàng , tại mục Lưu ý của bước Thanh Toán. Quý
            khách vui lòng ghi:Thiên Ngữ Hạc, Lân Mini… ArtPuzzle.vn sẽ kiểm tra
            đơn hàng và điều chỉnh giá lại, sau đó sẽ xác nhận với quý khách
            hàng qua điện thoại hoặc Page Facebook Lưu ý: Giá trị đơn hàng áp
            dụng Chương Trình Ưu Đãi sẽ bao gồm sản phẩm giảm giá
          </p>
          <h2 id="doi-tuong" className="text-2xl font-bold">
            4. Đối tượng tham gia
          </h2>
          <p>
            Tất cả khách hàng mua tại showroom, mua online thông qua Fanpage
            Facebook và đặt hàng trên Website https://artpuzzle.vn Mỗi khách
            hàng chỉ được hưởng ưu đãi tặng Chậu Hoa Nhỏ, Thiên Ngữ Hạc, Lân
            Mini tối đa 2 sản phẩm. Ví dụ: 2x Thiên Ngữ Hạc HOẶC 2x Lân Mini
            HOẶC 1 Thiên Ngữ Hạc và 1 Lân Mini
          </p>
          <h2 id="luu-y" className="text-2xl font-bold">
            5. Lưu ý
          </h2>
          <p>
            Quý khách hàng vui lòng liên hệ nhân viên của ArtPuzzle.vn để kiểm
            tra tình trạng còn hàng của các sản phẩm thông qua Fanpage Facebook
            https://m.me/artpuzzle.vn/ hoặc qua Hotline: 090 8427608 (Mr. Khanh)
            <br />
            Đơn hàng gốc được áp dụng chương trình ưu đãi hiện có của
            ArtPuzzle.vn: https://artpuzzle.vn/chinh-sach-uu-dai/ Không áp dụng
            đổi trả, bảo hành đối với sản phẩm Chậu Hoa Nhỏ, Thiên Ngữ Hạc và
            Lân Mini
          </p>
          <h2 id="faq" className="text-2xl font-bold">
            6. Câu hỏi thường gặp
          </h2>
          <p>
            Q: Đơn gốc của mình trên 290k có được miễn ship không?
            <br />
            A: Có
            <br />
            Q: Mình có thể xem danh sách sản phẩm Deal Sốc 2024 tại đâu? <br />
            A: Quý khách xem tại đây:
            https://artpuzzle.vn/collections/deal-soc-2024/
            <br />
            Q: Đơn gốc của mình có được áp dụng chương trình ưu đãi không
            (https://artpuzzle.vn/chinh-sach-uu-dai/)? <br />
            A: Có
            <br />
            Q: Chương trình có tích điểm AP cho mình không? <br />
            A: Có (không bao gồm sản phẩm Deal Sốc)
            <br />
            Q: Fanpage Facebook của Art Puzzle là gì? <br />
            https://m.me/artpuzzle.vn/ <br />
            Q: Mình muốn tư vấn trực tiếp, hotline của bạn là gì? <br />
            A: Hotline: 090 8427608 (Mr. Khanh)
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <div className="relative">
        <div
          className="space-y-8 sticky h-fit p-4 border-2 bg-amber-200 transition-[top] duration-300"
          style={{
            top: `${headerHeight + 10}px`,
            //maxHeight: `calc(100vh - ${headerHeight + 20}px)`,
            //overflowY: "auto",
          }}
        >
          {/* Bài viết mới nhất */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Bài viết mới nhất</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <span className="text-orange-600 font-bold">{item}</span>
                  <div>
                    <p className="font-medium">Tiêu đề bài viết {item}</p>
                    <p className="text-xs text-gray-400">
                      Tin tức - 20.01.2024
                    </p>
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
    </div>
  );
};

export default PostDetail;

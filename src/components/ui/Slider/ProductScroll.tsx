import CardItem from "../Product/CardItem";

const ProductScroll = () => {
  const products = [
    {
      productId: "MP1277",
      name: "Mèo Bậc Thầy Kungfu",
      slug: "meo-bac-thay-kungfu",
      price: 199.99,
      stock: 50,
      difficulty: 3,
      images: ["https://picsum.photos/200/300"],
      pieces: 50,
      dimensions: {
        width: 10,
        height: 11,
        length: 32,
      },
      video: "https://www.youtube.com/watch?v=example",
      category: "anime-figure",
      subCategories: ["anime", "figure"],

      description:
        "Mô hình mèo bậc thầy kungfu với thiết kế tinh xảo và chất liệu cao cấp. Sản phẩm hoàn hảo cho những người yêu thích mô hình và nghệ thuật lắp ráp.",
    },
    {
      productId: "MP1278",
      name: "Mô Hình Xe Tăng",
      slug: "mo-hinh-xe-tang",
      price: 299.99,
      stock: 30,
      images: ["https://picsum.photos/200/300"],
      pieces: 100,
      dimensions: {
        width: 15,
        height: 10,
        length: 25,
      },
      difficulty: 4,
      video: "https://www.youtube.com/watch?v=example2",
      category: "3d-assemble",
      subCategories: ["3d", "assemble"],
      description:
        "Mô hình xe tăng với chi tiết sắc nét và chất liệu bền bỉ. Dễ dàng lắp ráp và là món quà tuyệt vời cho những người đam mê mô hình.",
    },
    {
      productId: "MP1279",
      name: "Mô Hình Robot Biến Hình",
      slug: "mo-hinh-robot-bien-hinh",
      price: 399.99,
      stock: 20,
      images: ["https://picsum.photos/200/300"],
      pieces: 150,

      dimensions: {
        width: 20,
        height: 15,
        length: 30,
      },
      difficulty: 5,
      video: "https://www.youtube.com/watch?v=example3",
      category: "metal-assemble",
      subCategories: ["metal", "assemble"],
      description:
        "Mô hình robot biến hình với thiết kế độc đáo và chất liệu kim loại chắc chắn. Làm hài lòng những tín đồ yêu thích công nghệ và mô hình.",
    },
    {
      productId: "MP1280",
      name: "Mô Hình Xe Đua",
      slug: "mo-hinh-xe-dua",
      price: 249.99,
      stock: 40,
      images: ["https://picsum.photos/200/300"],
      pieces: 80,

      dimensions: {
        width: 12,
        height: 8,
        length: 20,
      },
      difficulty: 2,
      video: "https://www.youtube.com/watch?v=example4",
      category: "plastic-assemble",
      subCategories: ["plastic", "assemble"],
      description:
        "Mô hình xe đua với thiết kế thể thao và chất liệu nhựa cao cấp. Dễ dàng lắp ráp và là món quà tuyệt vời cho những người yêu thích tốc độ.",
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full h-[1000px] overflow-hidden rounded shadow-md">
      <div className="flex items-center justify-between mt-4 p-4">
        <h2 className="text-2xl font-bold">Sản phẩm tương tự</h2>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto h-full">
        {products.map((product) => (
          <CardItem product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductScroll;

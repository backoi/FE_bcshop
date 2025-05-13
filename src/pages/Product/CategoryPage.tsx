import { useEffect, useState } from "react";
import CardItem from "../../components/ui/Product/CardItem";
import Selection from "../../components/ui/Common/Selection";
import { productService } from "../../services/ProductService";
import { useParams } from "react-router-dom";
//tiep tuc loc
const CategoryPage = () => {
  const { category } = useParams();
  console.log("category:", category);
  const [listProducts, setListProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const fetchProducts = async () => {
    try {
      if (selectedCategories?.length === 1) {
        // Truyền thẳng category nếu chỉ có 1
        const response = await productService.getByCategory(selectedCategories);
        setListProducts(response.data || response);
        console.log("chay vao day ne");
        console.log("response:", response);
      } else {
        // Truyền danh sách category vào subCategories nếu có >1
        const response = await productService.getByCategory(selectedCategories);
        console.log("response:", response);
        setListProducts(response.data || response);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const categories = [
    // { id: "1ab", name: "", label: "Tất cả sản phẩm" },
    { id: "2ds", name: "anime-figure", label: "Mô hình Anime" },
    { id: "3vc", name: "3d-assemble", label: "Mô hình 3D" },
    { id: "4df", name: "metal-assemble", label: "Mô hình Kim loại" },
    { id: "4d2f", name: "plastic-assemble", label: "Mô hình Nhựa" },
    { id: "4dfcx", name: "cheap-assemble", label: "Mô hình Giá rẻ" },
    { id: "5gh", name: "assemble-tool", label: "Dụng cụ lắp ráp" },
  ];
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev?.includes(category)
        ? prev.filter((item) => item !== category) // Remove if exists
        : [...prev, category]; // Add if doesn't exist

      // Gọi API với các categories đã chọn
      productService.getByCategory(newCategories); // Nếu API hỗ trợ multiple main categories

      return newCategories;
    });
  };
  const handleFilterChange = () => {
    // const selectedCategories = categories.filter((category) =>
    //   category.name.includes(selectedCategory)
    // );
    // setSelectedCategory(selectedCategories[0].name);
    //console.log("Selected categories:", selectedCategories);
    fetchProducts();
  };
  const handleReset = () => {
    alert("Reset filter");
    setSelectedCategories([]);
  };
  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products when the component mounts

  return (
    <div>
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span>Trang chủ /</span>
        <span className="ml-1">Tất cả sản phẩm</span>
      </div>

      <div className="flex">
        {/* Sidebar - Category Filter */}
        <div className="w-1/4 pr-4 h-screen">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <Selection
              name="Danh mục sản phẩm"
              items={categories}
              selectedCategories={selectedCategories}
              onSubmit={handleFilterChange}
              onChange={toggleCategory}
              onReset={handleReset}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-3/4">
          <div className="grid grid-cols-4 gap-4">
            {listProducts.map((product: any) => (
              <CardItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

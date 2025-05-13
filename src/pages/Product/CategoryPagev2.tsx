import React, { useState, useEffect } from "react";
import { FaRedo, FaFilter, FaSearch } from "react-icons/fa";
import CardItem from "../../components/ui/Product/CardItem";
import { productService } from "../../services/ProductService";
import Selection from "../../components/ui/Common/Selection";
//using
//refactor style
import { products } from "../../products";

const CategoryPagev2 = () => {
  const categories = [
    // { id: "1", name: "", label: "Tất cả sản phẩm" },
    { id: "2", name: "anime-figure", label: "Mô hình Anime" },
    { id: "3", name: "3d-assemble", label: "Mô hình 3D" },
    { id: "4", name: "metal-assemble", label: "Mô hình Kim loại" },
    { id: "5", name: "plastic-assemble", label: "Mô hình Nhựa" },
    { id: "6", name: "cheap-assemble", label: "Mô hình Giá rẻ" },
    { id: "7", name: "assemble-tool", label: "Dụng cụ lắp ráp" },
  ];
  const [listProducts, setListProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // State for filters
  const [filters, setFilters] = useState({
    category: ["all"],
    maxPrice: 5000000,
    minRating: 0,
  });
  const fetchProducts = async () => {
    console.log("filters:", filters);
    try {
      if (selectedCategories?.length === 1) {
        // Truyền thẳng category nếu chỉ có 1
        const response = await productService.getByCategory(selectedCategories);
        setListProducts(response.data || response);

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

  // Update price display
  const handlePriceChange = (e: any) => {
    setFilters({ ...filters, maxPrice: parseInt(e.target.value) });
  };

  // Update rating filter
  const handleRatingChange = (rating: any) => {
    setFilters({ ...filters, minRating: rating });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      category: ["all"],
      maxPrice: 5000000,
      minRating: 0,
    });
  };

  // Apply filters (in this case, just reset to page 1)
  const applyFilters = () => {
    console.log("applyFilters:", filters);
  };

  // Get rating text
  const getRatingText = () => {
    return filters.minRating === 0
      ? "Tất cả đánh giá"
      : `${filters.minRating} sao trở lên`;
  };

  // Render star rating input
  const renderStarRating = () => {
    return (
      <div className="star-rating flex justify-center">
        {[5, 4, 3, 2, 1].map((rating) => (
          <React.Fragment key={rating}>
            <input
              type="radio"
              id={`${rating}-stars`}
              name="rating"
              value={rating}
              checked={filters.minRating === rating}
              onChange={() => handleRatingChange(rating)}
              className="hidden"
            />
            <label
              htmlFor={`${rating}-stars`}
              className="text-2xl cursor-pointer"
              style={{
                color: filters.minRating >= rating ? "#ffc107" : "#ddd",
              }}
            >
              ★
            </label>
          </React.Fragment>
        ))}
        <input
          type="radio"
          id="0-star"
          name="rating"
          value="0"
          checked={filters.minRating === 0}
          onChange={() => handleRatingChange(0)}
          className="hidden"
        />
        <label htmlFor="0-star" className="hidden">
          ★
        </label>
      </div>
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev?.includes(category)
        ? prev.filter((item) => item !== category) // Remove if exists
        : [...prev, category]; // Add if doesn't exist

      // Gọi API với các categories đã chọn
      //productService.getByCategory(newCategories); // Nếu API hỗ trợ multiple main categories
      setFilters({
        ...filters,
        category: newCategories.length > 0 ? newCategories : ["all"],
      });
      return newCategories;
    });
  };
  const handleFilterChange = () => {
    fetchProducts();
  };
  const handleReset = () => {
    alert("Reset filter");
    setSelectedCategories([]);
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, [filters]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Bộ Lọc Sản Phẩm
        </h1>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}

            <Selection
              name="Danh mục sản phẩm"
              items={categories}
              selectedCategories={selectedCategories}
              onSubmit={handleFilterChange}
              onChange={toggleCategory}
              onReset={handleReset}
            />

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Khoảng giá
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="100000"
                  value={filters.maxPrice}
                  onChange={handlePriceChange}
                  className="range-slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-600">
                  {filters.maxPrice.toLocaleString("vi-VN")}đ
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0đ</span>
                <span>10,000,000đ</span>
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Đánh giá
              </label>
              {renderStarRating()}
              <p className="text-center text-sm text-gray-500 mt-1">
                {getRatingText()}
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={resetFilters}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 mr-3"
            >
              <FaRedo className="inline mr-2" />
              Đặt lại
            </button>
            <button
              onClick={applyFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <FaFilter className="inline mr-2" />
              Áp dụng
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {listProducts.length > 0 ? (
            listProducts.map((prod: any) => {
              return (
                <div key={prod.productId} className="col-span-1">
                  <CardItem product={prod} />
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <FaSearch className="inline-block text-4xl text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-500">
                Không tìm thấy sản phẩm phù hợp
              </h3>
              <p className="text-gray-400 mt-2">
                Hãy thử điều chỉnh bộ lọc của bạn
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .star-rating {
          direction: rtl;
        }
        .star-rating input[type="radio"] {
          display: none;
        }
        .star-rating label {
          color: #ddd;
          font-size: 1.5rem;
          padding: 0 3px;
          cursor: pointer;
        }
        .star-rating input[type="radio"]:checked ~ label {
          color: #ffc107;
        }
        .star-rating label:hover,
        .star-rating label:hover ~ label {
          color: #ffc107;
        }
        
        .range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #e2e8f0;
          outline: none;
        }
        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .range-slider::-webkit-slider-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default CategoryPagev2;

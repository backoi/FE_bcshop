import { useState, useEffect } from "react";
import ProductTabSelect from "../../components/ui/Product/ProductTabSelect";
//test
const ModelKitDetails = () => {
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1611591437281-460914d22819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  );
  const [quantity, setQuantity] = useState(1);
  const [cartAdded, setCartAdded] = useState(false);

  const thumbnails = [
    "https://images.unsplash.com/photo-1611591437281-460914d22819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Tamiya German Panther G",
      price: "$34.99",
      rating: 5,
      reviews: 18,
      image:
        "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      scale: "1:35 Scale",
    },
    {
      id: 2,
      name: "Revell P-51D Mustang",
      price: "$29.99",
      rating: 4.5,
      reviews: 12,
      image:
        "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      scale: "1:48 Scale",
    },
    {
      id: 3,
      name: "Airfix Spitfire Mk.I",
      price: "$19.99",
      rating: 4,
      reviews: 8,
      image:
        "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      scale: "1:72 Scale",
    },
    {
      id: 4,
      name: "Dragon Sherman M4A3",
      price: "$42.99",
      rating: 5,
      reviews: 21,
      image:
        "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      scale: "1:35 Scale",
    },
  ];

  const handleThumbnailClick = (imgUrl: any) => {
    setMainImage(imgUrl);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setCartAdded(true);
    setTimeout(() => {
      setCartAdded(false);
    }, 2000);
  };

  const renderStars = (rating: any) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="bg-gray-50">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
        <a href="#" className="hover:text-blue-500">
          Home /{" "}
        </a>
        <a href="#" className="hover:text-blue-500">
          Model Kits /{" "}
        </a>
        <a href="#" className="hover:text-blue-500">
          Military /{" "}
        </a>
        <a href="#" className="hover:text-blue-500">
          Tanks /{" "}
        </a>
        <span className="text-gray-800">Tamiya German Tiger I</span>
      </div>

      {/* Product Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Gallery */}
          <div className="md:w-1/2">
            <div className="product-gallery bg-white p-4 rounded-lg shadow">
              <div
                className="main-image rounded-lg bg-gray-100"
                style={{
                  backgroundImage: `url(${mainImage})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "400px",
                  gridColumn: "span 4",
                }}
              >
                <span className="scale-badge absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
                  1:35 Scale
                </span>
              </div>
              {thumbnails.map((thumbnail, index) => (
                <div
                  key={index}
                  className="thumbnail rounded bg-gray-100 cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-blue-500"
                  style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "80px",
                  }}
                  onClick={() => handleThumbnailClick(thumbnail)}
                ></div>
              ))}
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Product Video</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-48 flex items-center justify-center bg-gray-100">
                  <i className="fas fa-play-circle text-5xl text-blue-500"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    Tamiya German Tiger I Mid Production
                  </h1>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="text-gray-600 ml-2">(24 reviews)</span>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  In Stock
                </div>
              </div>

              <div className="mt-6">
                <div className="text-3xl font-bold text-gray-900">$39.99</div>
                <div className="text-sm text-gray-500 mt-1">
                  + $5.99 Shipping
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Brand</h3>
                <div className="mt-1 flex items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tamiya_logo.svg/1200px-Tamiya_logo.svg.png"
                    alt="Tamiya"
                    className="h-8"
                  />
                  <span className="ml-2 text-gray-700">Tamiya</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Scale</h3>
                <div className="mt-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                    1:35
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  Parts Count
                </h3>
                <div className="mt-1">
                  <span className="text-gray-700">380+ parts</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  Skill Level
                </h3>
                <div className="mt-1">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-gray-700">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center">
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-l-lg"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    className="w-16 text-center border-t border-b border-gray-300 py-1"
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-r-lg"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button
                  className={`add-to-cart-btn flex-1 ${
                    cartAdded
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg`}
                  onClick={handleAddToCart}
                >
                  {cartAdded ? (
                    <>
                      <i className="fas fa-check mr-2"></i> Added to Cart
                    </>
                  ) : (
                    <>
                      <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
                    </>
                  )}
                </button>
                <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <i className="far fa-heart text-gray-600 text-xl"></i>
                </button>
              </div>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <i className="fas fa-shield-alt text-gray-400 mr-2"></i>
                <span>2-year warranty included</span>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fas fa-truck text-blue-500 text-xl"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    Shipping Information
                  </h3>
                  <div className="mt-1 text-sm text-gray-600">
                    <p>Usually ships within 1-2 business days</p>
                    <p className="mt-1">
                      Estimated delivery: 3-5 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <ProductTabSelect />

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                  />
                  <span className="scale-badge absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
                    {product.scale}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex text-yellow-400 text-sm">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-gray-500 text-sm ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModelKitDetails;

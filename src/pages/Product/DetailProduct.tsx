import { useState } from "react";
import {
  BiCheck,
  BiHeart,
  BiPlayCircle,
  BiShield,
  BiStar,
} from "react-icons/bi";
import { BsStarHalf, BsTruck } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaRedo, FaFilter, FaSearch, FaShoppingCart } from "react-icons/fa";
const ModelKitDetailPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Image URLs
  const images = [
    "https://images.unsplash.com/photo-1611591437281-460914d22819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];

  // Related products data
  const relatedProducts = [
    {
      name: "Tamiya German Panther G",
      price: "$34.99",
      rating: 5,
      reviews: 18,
      scale: "1:35",
      image:
        "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Revell P-51D Mustang",
      price: "$29.99",
      rating: 4.5,
      reviews: 12,
      scale: "1:48",
      image:
        "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Airfix Spitfire Mk.I",
      price: "$19.99",
      rating: 4,
      reviews: 8,
      scale: "1:72",
      image:
        "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Dragon Sherman M4A3",
      price: "$42.99",
      rating: 5,
      reviews: 21,
      scale: "1:35",
      image:
        "https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  // Reviews data
  const reviews = [
    {
      rating: 5,
      title: "Excellent Detail",
      author: "John D.",
      date: "August 15, 2023",
      content:
        "This is one of the best Tamiya kits I've built. The detail is incredible and the fit is perfect. The tracks were a bit fiddly but look amazing when completed. Highly recommend for intermediate builders.",
    },
    {
      rating: 4,
      title: "Great Kit",
      author: "Sarah M.",
      date: "July 22, 2023",
      content:
        "The detail on this model is fantastic. The instructions were clear and easy to follow. The only reason I didn't give 5 stars is that the decals were a bit fragile. Otherwise, a great build experience.",
    },
  ];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Render star rating component
  const renderStars = (rating: any) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <BiStar
          key={`star-${i}`}
          className="fill-yellow-400 text-yellow-400"
          size={16}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <BsStarHalf
          key="half-star"
          className="fill-yellow-400 text-yellow-400"
          size={16}
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <BiStar key={`empty-star-${i}`} className="text-yellow-400" size={16} />
      );
    }

    return stars;
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-blue-500 text-2xl">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              ScaleModel World
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <i className="fas fa-search"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <i className="fas fa-user"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 relative">
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </a>
          </div>
        </div>
        <nav className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-2">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">
                  Model Kits
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">
                  Tools & Paints
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">
                  New Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">
                  Sale
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>{" "}
        &gt;{" "}
        <a href="#" className="hover:text-blue-500">
          Model Kits
        </a>{" "}
        &gt;{" "}
        <a href="#" className="hover:text-blue-500">
          Military
        </a>{" "}
        &gt;{" "}
        <a href="#" className="hover:text-blue-500">
          Tanks
        </a>{" "}
        &gt; <span className="text-gray-800">Tamiya German Tiger I</span>
      </div>

      {/* Product Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Gallery */}
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow">
              <div
                className="rounded-lg bg-gray-100 h-96 bg-center bg-no-repeat bg-contain relative"
                style={{ backgroundImage: `url(${images[activeImage]})` }}
              >
                <span className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  1:35 Scale
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`h-20 bg-gray-100 rounded cursor-pointer bg-center bg-no-repeat bg-contain border-2 ${
                      index === activeImage
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Product Video</h3>
              <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg">
                <BiPlayCircle size={48} className="text-blue-500" />
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
                      {renderStars(4.5)}
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
                      <div className="bg-blue-600 h-2.5 rounded-full w-4/5"></div>
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
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    min="1"
                    className="w-16 text-center border-t border-b border-gray-300 py-1"
                  />
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-r-lg"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button
                  className={`flex-1 py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-all ${
                    addedToCart
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <>
                      <BiCheck size={20} className="mr-2" /> Added to Cart
                    </>
                  ) : (
                    <>
                      <CiShoppingCart size={20} className="mr-2" /> Add to Cart
                    </>
                  )}
                </button>
                <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <BiHeart size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <BiShield size={18} className="text-gray-400 mr-2" />
                <span>2-year warranty included</span>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BsTruck size={20} className="text-blue-500" />
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
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "specs"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("specs")}
              >
                Specifications
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "reviews"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "manual"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("manual")}
              >
                Instruction Manual
              </button>
            </nav>
          </div>

          <div className="bg-white p-6 rounded-b-lg shadow">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  About This Model
                </h2>
                <p className="text-gray-700 mb-4">
                  The Tamiya 1/35 scale German Tiger I Mid Production is a
                  highly detailed plastic model kit that recreates the iconic
                  German heavy tank from World War II. This mid-production
                  version features the distinctive features that made the Tiger
                  I feared on the battlefield.
                </p>
                <p className="text-gray-700 mb-4">
                  The kit includes finely molded parts with excellent detail,
                  including accurate road wheels, tracks, and turret details.
                  The model features movable tracks, a rotatable turret, and an
                  elevating gun for dynamic display options.
                </p>
                <h3 className="font-bold text-gray-800 mt-6 mb-2">Features:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Highly detailed 1/35 scale plastic model kit</li>
                  <li>Mid-production version with accurate details</li>
                  <li>Includes 380+ parts for maximum realism</li>
                  <li>Movable tracks and rotatable turret</li>
                  <li>Elevating main gun for dynamic posing</li>
                  <li>Includes decals for 3 different markings</li>
                  <li>Detailed commander's cupola and hatches</li>
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      What's in the Box:
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Plastic sprue with parts</li>
                      <li>Decal sheet</li>
                      <li>Instruction manual</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Recommended Paints:
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Tamiya XF-60 Dark Yellow</li>
                      <li>Tamiya XF-63 German Grey</li>
                      <li>Tamiya XF-64 Red Brown</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === "specs" && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Technical Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Model Details
                    </h3>
                    <table className="w-full text-sm text-gray-700">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Scale</td>
                          <td className="py-2 text-right">1:35</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Parts Count</td>
                          <td className="py-2 text-right">380+</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Length</td>
                          <td className="py-2 text-right">258mm</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Width</td>
                          <td className="py-2 text-right">95mm</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Skill Level</td>
                          <td className="py-2 text-right">Intermediate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Historical Information
                    </h3>
                    <table className="w-full text-sm text-gray-700">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Vehicle</td>
                          <td className="py-2 text-right">
                            Panzerkampfwagen VI Tiger I
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Type</td>
                          <td className="py-2 text-right">Heavy Tank</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Country</td>
                          <td className="py-2 text-right">Germany</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Period</td>
                          <td className="py-2 text-right">World War II</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium">Manufacturer</td>
                          <td className="py-2 text-right">Henschel</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Customer Reviews
                </h2>
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 text-2xl">
                      {renderStars(4.5)}
                    </div>
                    <span className="ml-2 text-gray-700 font-medium">
                      4.5 out of 5
                    </span>
                  </div>
                  <span className="ml-4 text-gray-500">24 reviews</span>
                </div>

                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {renderStars(review.rating)}
                        </div>
                        <span className="ml-2 font-medium text-gray-900">
                          {review.title}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>
                          By {review.author} on {review.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
                  Write a Review
                </button>
              </div>
            )}

            {/* Manual Tab */}
            {activeTab === "manual" && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Instruction Manual
                </h2>
                <p className="text-gray-700 mb-4">
                  Download the instruction manual for this model kit to help
                  with your build. The manual includes step-by-step assembly
                  instructions, painting guides, and decal placement.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center">
                  <i className="fas fa-file-pdf text-red-500 text-3xl mr-4"></i>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Tamiya_Tiger_I_Mid_Production_Manual.pdf
                    </h3>
                    <p className="text-sm text-gray-500">2.4 MB</p>
                  </div>
                  <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                  />
                  <span className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {product.scale} Scale
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
                      <FaShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                ScaleModel World is your one-stop shop for all things scale
                modeling. We offer a wide range of model kits, tools, and
                accessories to help you build your dream models.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            &copy; 2023 ScaleModel World. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
export default ModelKitDetailPage;

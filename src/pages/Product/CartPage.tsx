import { useState } from "react";
import ItemCart from "../../components/ui/ItemCart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tamiya 1/35 German Panther Tank",
      price: 59.99,
      quantity: 1,
      image: "https://picsum.photos/id/1015/300/200",
      scale: "1:35",
      brand: "Tamiya",
      stock: 10,
    },
    {
      id: 2,
      name: "Bandai Star Wars Millennium Falcon",
      price: 129.99,
      quantity: 1,
      image: "https://picsum.photos/id/1016/300/200",
      scale: "1:144",
      brand: "Bandai",
      stock: 5,
    },
    {
      id: 3,
      name: "Revell Apollo Saturn V Rocket",
      price: 89.99,
      quantity: 1,
      image: "https://picsum.photos/id/1027/300/200",
      scale: "1:96",
      brand: "Revell",
      stock: 8,
    },
  ]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shippingOption, setShippingOption] = useState("standard");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost =
    shippingOption === "express"
      ? 12.99
      : shippingOption === "priority"
      ? 24.99
      : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax - discount;

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "MODEL10") {
      setDiscount(subtotal * 0.1);
      alert("10% discount applied!");
    } else if (couponCode.toUpperCase() === "SCALE20") {
      setDiscount(subtotal * 0.2);
      alert("20% discount applied!");
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const updateQuantity = (id: any, newQuantity: any) => {
    if (newQuantity < 1) return;

    const item = cartItems.find((item: any) => item.id === id);
    if (newQuantity > (item?.stock ?? 0)) {
      alert(`Only ${item?.stock} available in stock`);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: any) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert("Order placed successfully! Thank you for your purchase.");
      setCartItems([]);
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3 px-6">
        <div className="container mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-blue-600 hover:underline">
                Trang chủ
              </a>
            </li>

            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li className="text-gray-700">Shopping Cart</li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
          Giỏ hàng của bạn
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Giỏ hàng rỗng
            </h3>
            <p className="text-gray-500 mb-6">
              Bạn chưa thêm sản phẩm nào vào giỏ hàng. Hãy bắt đầu mua sắm ngay
              nào!
            </p>
            <a
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition"
            >
              Tiếp tục mua sắm
            </a>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
                  <div className="col-span-5">Tên sản phẩm</div>
                  <div className="col-span-2 text-center">Giá</div>
                  <div className="col-span-3 text-center">Số lượng</div>
                  <div className="col-span-2 text-center">Tổng</div>
                </div>

                {cartItems.map((item) => (
                  <ItemCart
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </div>

              {/* Coupon Code */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Have a coupon code?
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-r-md transition"
                  >
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <p className="text-green-600 mt-2">
                    <i className="fas fa-check-circle mr-1"></i>$
                    {discount.toFixed(2)} discount applied
                  </p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="text-red-500">
                      -${discount.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-3">
                    <div className="mb-2">
                      <label className="block text-gray-700 mb-2">
                        Shipping
                      </label>
                      <select
                        value={shippingOption}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="standard">
                          Standard (5-7 days) - $5.99
                        </option>
                        <option value="express">
                          Express (3-5 days) - $12.99
                        </option>
                        <option value="priority">
                          Priority (1-2 days) - $24.99
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={`w-full py-3 rounded-md font-medium text-white transition ${
                    isCheckingOut
                      ? "bg-blue-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isCheckingOut ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Processing...
                    </>
                  ) : (
                    "Proceed to Checkout"
                  )}
                </button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    <i className="fas fa-lock mr-1"></i>
                    Secure checkout. Your information is safe.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-medium mb-2">We accept:</h4>
                  <div className="flex space-x-4">
                    <i className="fab fa-cc-visa text-3xl text-gray-600"></i>
                    <i className="fab fa-cc-mastercard text-3xl text-gray-600"></i>
                    <i className="fab fa-cc-amex text-3xl text-gray-600"></i>
                    <i className="fab fa-cc-paypal text-3xl text-gray-600"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ScaleModelWorld</h3>
              <p className="text-gray-400">
                Your premier destination for high-quality scale models and hobby
                supplies since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    On Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <p className="text-gray-400">
                Subscribe to our newsletter for updates and special offers.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2023 ScaleModelWorld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default CartPage;

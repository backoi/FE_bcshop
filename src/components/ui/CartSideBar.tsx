import { useState } from "react";
import { BiCloset } from "react-icons/bi";

const CartSidebar = ({
  isOpen,
  toggleCartSidebar,
}: {
  isOpen: boolean;
  toggleCartSidebar: () => void;
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
        onClick={toggleCartSidebar}
      ></div>

      <div
        className={`cart-sidebar fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* <!-- Cart Header --> */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-pink-600 flex items-center">
              <i className="fas fa-shopping-cart mr-2"></i> Your Collection
            </h2>
            <button className="text-gray-500 hover:text-gray-700">
              <BiCloset className="text-2xl" onClick={toggleCartSidebar} />
            </button>
          </div>

          {/* <!-- Cart Items --> */}
          <div
            id="cart-items"
            className="flex-1 overflow-y-auto cart-scrollbar p-4"
          >
            {/* <!-- Empty cart state --> */}
            <div
              id="empty-cart"
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <div className="anime-pulse mb-4">
                <i className="fas fa-ghost text-6xl text-gray-300"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-500 mb-2">
                Your collection is empty
              </h3>
              <p className="text-gray-400 mb-4">
                Add some awesome anime figures to your collection!
              </p>
              <button
                id="close-cart-empty"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition-colors"
              >
                Browse Figures
              </button>
            </div>

            {/* <!-- Cart items will be added here dynamically --> */}
          </div>

          {/* <!-- Cart Footer --> */}
          <div className="border-t p-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Subtotal:</span>
              <span id="cart-subtotal" className="font-bold">
                $0.00
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Shipping:</span>
              <span id="cart-shipping" className="font-bold">
                $0.00
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span id="cart-total">$0.00</span>
            </div>

            <div className="mb-4">
              <label className="checkbox-container">
                Gift wrap this order (+$5.00)
                <input type="checkbox" id="gift-wrap" />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="flex flex-col space-y-2">
              <a
                href="cart-details.html"
                className="block text-center bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-50 transition"
              >
                <i className="fas fa-shopping-cart mr-2"></i> View Full Cart
              </a>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                <i className="fas fa-credit-card mr-2"></i> Checkout
              </button>
            </div>

            <div className="mt-4 text-center">
              <button
                id="continueShoppingBtn"
                className="text-blue-600 hover:underline"
              >
                <i className="fas fa-arrow-left mr-1"></i> Continue Shopping
              </button>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
              <p>Free shipping on orders over $100</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartSidebar;

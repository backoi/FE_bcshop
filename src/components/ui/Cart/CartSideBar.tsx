import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import useCart from "../../../store/slices/cart";
import ItemCart from "./ItemCart";
import ReactDOM from "react-dom";
const CartSidebar = ({
  isOpen,
  toggleCartSidebar,
}: {
  isOpen: boolean;
  toggleCartSidebar: () => void;
}) => {
  const { cart }: any = useCart();
  const [listProducts, setListProducts] = useState(cart);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20"
          onClick={toggleCartSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-[90%] sm:w-[400px] max-w-[400px] bg-white shadow-xl z-[52] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-blue-600 flex items-center">
              <i className="fas fa-shopping-cart mr-2"></i> Your Collection
            </h2>
            <button
              className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleCartSidebar}
            >
              <IoClose className="text-2xl" />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-4"
            style={{ scrollbarWidth: "thin" }}
          >
            {listProducts.length > 0 ? (
              listProducts.map((item: any) => {
                return <ItemCart key={item.id} item={item} />;
              })
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <div className="animate-pulse mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-500 mb-2">
                  Your collection is empty
                </h3>
                <p className="text-gray-400 mb-4">
                  Add some awesome items to your collection!
                </p>
                <button
                  onClick={toggleCartSidebar}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Browse Items
                </button>
              </div>
            )}
          </div>

          {listProducts.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Subtotal:</span>
                <span className="font-bold">$0.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Shipping:</span>
                <span className="font-bold">$0.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold mb-4">
                <span>Total:</span>
                <span>$0.00</span>
              </div>

              <div className="mb-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-blue-600"
                  />
                  <span>Gift wrap this order (+$5.00)</span>
                </label>
              </div>

              <div className="flex flex-col space-y-2">
                <a
                  href="/cart"
                  className="block text-center bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-50 transition"
                >
                  View Full Cart
                </a>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Checkout
                </button>
              </div>

              <div className="mt-4 text-center text-xs text-gray-500">
                <p>Free shipping on orders over $100</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>,
    document.getElementById("root") as HTMLElement
  );
};
export default CartSidebar;

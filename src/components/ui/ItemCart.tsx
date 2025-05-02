const ItemCart = ({ item, removeItem, updateQuantity }: any) => {
  return (
    <div
      key={item.id}
      className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition"
    >
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Product Image and Info */}
        <div className="flex items-center md:w-5/12 mb-4 md:mb-0">
          <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md mr-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain scale-hover"
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500">
              {item.brand} • {item.scale} Scale
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700 text-sm mt-1 flex items-center"
            >
              <i className="fas fa-trash-alt mr-1"></i> Remove
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="md:w-2/12 mb-4 md:mb-0 flex md:block justify-between">
          <span className="md:hidden font-medium">Price:</span>
          <span className="font-medium text-gray-800">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* Quantity */}
        <div className="md:w-3/12 mb-4 md:mb-0">
          <div className="flex items-center justify-center">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-l flex items-center justify-center transition"
            >
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
              className="w-12 h-8 text-center border-t border-b border-gray-300 outline-none"
            />
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-r flex items-center justify-center transition"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-1">
            {item.stock} in stock
          </p>
        </div>

        {/* Total */}
        <div className="md:w-2/12 flex md:block justify-between">
          <span className="md:hidden font-medium">Total:</span>
          <span className="font-medium text-gray-800">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ItemCart;

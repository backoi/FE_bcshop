const ItemCart = ({
  item,
  removeItem,
  updateQuantity,
}: {
  item: any;
  removeItem?: any;
  updateQuantity?: any;
}) => {
  return (
    <div
      key={item.productId}
      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition flex gap-4 mb-4 last:mb-0"
    >
      <div className="w-24 h-24 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-md"
          src={item.images[0]}
          alt={item.name}
        />
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-500">Mô hình kim loại lắp ráp 3D</p>
          </div>
          {1 && (
            <button
              onClick={() => removeItem(item.productId)}
              className="text-red-500 text-sm hover:underline"
            >
              Xoá
            </button>
          )}
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              −
            </button>
            <span className="px-3 text-sm font-semibold">{item.quantity}</span>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              +
            </button>
          </div>
          <div className="text-amber-600 font-semibold">
            {item.price?.toLocaleString("vi-VN")}đ
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;

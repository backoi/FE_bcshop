const SearchItem = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full border-b-2 pb-2">
      <div>
        <h2 className="cursor-pointer text-lg font-bold hover:text-amber-500">
          {product.name}
        </h2>
        <span className="text-red-500">{product.price}</span>
        <span className="line-through text-gray-500">{product.oldPrice}</span>
      </div>
      <div>
        <img src={product?.images[0]} alt="" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default SearchItem;

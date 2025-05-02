import React from "react";

interface ProductCardProps {
  title: string;
  sku: string;
  currentPrice: string;
  originalPrice: string;
  pieces: string;
  rating: string;
  dimensions: string;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  sku,
  currentPrice,
  originalPrice,
  pieces,
  rating,
  dimensions,
  isSale = true,
}) => {
  return (
    <div className="max-w-xs border border-gray-200 rounded-lg p-4 font-sans relative">
      {isSale && (
        <div className="bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold inline-block mb-2">
          SALE
        </div>
      )}

      <div className="product-info">
        <h3 className="text-base font-normal text-gray-800 my-2 line-clamp-2">
          {title}
        </h3>
        <div className="text-xs text-gray-500 mb-2">SKU: {sku}</div>
        <div className="price my-2">
          <span className="text-lg font-bold text-red-600">{currentPrice}</span>
          <span className="text-sm text-gray-400 line-through ml-2">
            {originalPrice}
          </span>
        </div>
      </div>

      <div className="product-details flex justify-between my-2 text-sm text-gray-500">
        <div>{pieces}</div>
        <div>{rating}</div>
      </div>

      <div className="dimensions text-xs text-gray-400 mt-2">{dimensions}</div>
    </div>
  );
};

// Example usage

export default ProductCard;

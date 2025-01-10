import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="text-xl my-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold text-green-500">${product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductCard;

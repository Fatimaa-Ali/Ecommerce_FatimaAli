
import React from 'react';
import ProductCard from '../components/ProductCard'; // Adjust path if necessary

const ProductListingPage = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold text-center my-8">Product Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;

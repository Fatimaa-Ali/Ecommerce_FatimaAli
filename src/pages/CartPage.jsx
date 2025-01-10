import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-4">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

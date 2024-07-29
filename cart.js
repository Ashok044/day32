import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../features/cart/cartSlice';
import CartItem from '../features/cart/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  useEffect(() => {
    // Fetch JSON data from Google Drive link (for demonstration, using static data)
    const fetchData = async () => {
      const response = await fetch('URL_TO_YOUR_JSON_FILE');
      const data = await response.json();
      dispatch(setItems(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;

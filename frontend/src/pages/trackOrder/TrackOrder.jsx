// TrackOrder.js
import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';  // Import the StoreContext
import '../../pages/trackOrder/TrackOrder.css';

const TrackOrder = () => {
  const { token } = useContext(StoreContext);  // Retrieve token from context
  const location = useLocation();
  const { orderId } = useParams();
  const order = location.state?.order;
  const [cancelMessage, setCancelMessage] = useState('');

  const handleCancelOrder = async () => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this order?');  // Confirmation dialog
    if (!confirmCancel) return;  // If user clicks 'Cancel', exit the function
    
    try {
      const response = await axios.post(
        'https://sanskritighee.com/api/order/cancel-order/',  // Updated URL
        { orderId },
        {
          headers: { token }  // Pass the token as a custom header
        }
      );
  
      if (response.data.success) {
        setCancelMessage('Order canceled successfully');
      } else {
        setCancelMessage(response.data.message || 'Unable to cancel the order.');
      }
    } catch (error) {
      setCancelMessage('Error: Unable to cancel order.');
      console.error(error);
    }
  };
  
  

  return (
    <div className="track-order-container">
      <div className="track-order-content">
        {order ? (
          <>
            <h2>Order ID: {orderId}</h2>
            {order.items.map((item, index) => (
              <div key={index} className="track-order-item">
                <h3>{item.name}</h3>
                <img src={item.image || 'placeholder-image-url'} alt={item.name} />
                <div className="item-details">
                  <p className="item-quantity">Quantity: {item.quantity}</p>
                  <p className="item-price">Price: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Total Price: ₹{order.amount}.00</h3>
            <div className="order-actions">
              <button className="cancel-order-btn" onClick={handleCancelOrder}>Cancel Order</button>
              <button className="help-btn">Need Help?</button>
            </div>
            {cancelMessage && <p>{cancelMessage}</p>}
          </>
        ) : (
          <p>No order details available.</p>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;

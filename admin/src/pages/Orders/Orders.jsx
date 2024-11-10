import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        // Set orders to state and sort them if not already sorted in the backend
        const sortedOrders = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(sortedOrders);
        console.log(sortedOrders);
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Error fetching orders');
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + '/api/order/status', {
        orderId,
        status: event.target.value,
      });
  
      if (response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId
              ? { 
                  ...order, 
                  status: event.target.value, 
                  statusUpdatedAt: new Date() 
                }
              : order
          )
        );
        toast.success('Order status updated successfully'); // Show success toast
      } else {
        toast.error(response.data.message || 'Error updating order status'); // Show error toast
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      toast.error('Error updating order status'); // Show error toast
    }
  };
  

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, itemIndex) => {
                  if (itemIndex === order.items.length - 1) {
                    return `${item.name} x ${item.quantity}`;
                  } else {
                    return `${item.name} x ${item.quantity}, `;
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.firstName + ' ' + order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street + ','}</p>
                <p>
                  {`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>₹{order.amount}</p>
            <div className="order-status-section">
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Canceled">Canceled</option>
                <option value="Shipped">Shipped</option>
              </select>
              <p className="order-item-status-time">
                Last Updated: {order.statusUpdatedAt ? new Date(order.statusUpdatedAt).toLocaleString() : 'N/A'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

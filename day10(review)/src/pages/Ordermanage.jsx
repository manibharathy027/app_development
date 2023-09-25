import React, { Component } from 'react';
import '../assets/css/Ordermanage.css';

class Ordermanage extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      newOrder: {
        symbol: '',
        quantity: 0,
        price: 0,
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newOrder: {
        ...prevState.newOrder,
        [name]: value,
      },
    }));
  };

  handlePlaceOrder = () => {
    const { symbol, quantity, price } = this.state.newOrder;
    const order = {
      symbol,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
    };

    this.setState((prevState) => ({
      orders: [...prevState.orders, order],
      newOrder: {
        symbol: '',
        quantity: 0,
        price: 0,
      },
    }));
  };

  render() {
    const { orders, newOrder } = this.state;

    return (
      <div className="order-management">
        <h1>Investment Order Management</h1>
        <div className="order-form">
          <input
            type="text"
            name="symbol"
            placeholder="Symbol"
            value={newOrder.symbol}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newOrder.quantity}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newOrder.price}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handlePlaceOrder}>Place Order</button>
        </div>
        <div className="order-list">
          <h2>Orders</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                {order.symbol} - Quantity: {order.quantity} - Price: {order.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Ordermanage;

import React from 'react';
import '../assets/css/AccountInfo.css'; 
import { Link } from 'react-router-dom';
function AccountInfo() {
  return (
    <div className="account-info">
      <h1>Account Information</h1>
      <p>Name: MANI BHARATHY T</p>
      <p>Email: manibharathy027@gmail.com</p>
      <p>Balance: $1000</p>
    </div>
  );
}

export default AccountInfo;

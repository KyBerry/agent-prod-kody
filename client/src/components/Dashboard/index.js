import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [callHistory, setCallHistory] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetchCallHistory();
    fetchPaymentHistory();
  });

  const fetchCallHistory = async () => {
    const calls = await axios.get('/api/callhistory');
    setCallHistory(calls.data);
  };

  const fetchPaymentHistory = async () => {
    const payments = await axios.get('/api/paymenthistory');
    setPaymentHistory(payments.data);
  };

  // print call history
  const renderCallHistory = () => {
    return callHistory.map((call) => <li>call</li>);
  };

  // print payment history
  const renderPaymentHistory = () => {
    return paymentHistory.map((payment) => <li>{payment}</li>);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/">Go back home</Link>

      <h2>Call History</h2>
      <ul>{renderCallHistory()}</ul>
      <h2>Payment History</h2>
      <ul>{renderPaymentHistory()}</ul>
    </div>
  );
};

export default Dashboard;

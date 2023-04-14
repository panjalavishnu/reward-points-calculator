import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionList from './TransactionList';
import RewardCalculator from './RewardCalculator';
// const axios = require('axios');


function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/transactions.json')
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <RewardCalculator transactions={transactions} />
          <TransactionList transactions={transactions} />
        </>
      )}
    </div>
  );
}

export default Transactions;

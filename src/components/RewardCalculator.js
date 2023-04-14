import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/styles/RewardCalculator.css';

function RewardCalculator({ transactions }) {
  const [pointsByMonth, setPointsByMonth] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);

//   const calculatePointsByMonth = () => {
//     const points = {};
//     let total = 0;

//     transactions.forEach((transaction) => {
//       const month = new Date(transaction.purchaseDate).getMonth();
//       const amountOver100 = Math.max(transaction.purchaseAmount - 100, 0);
//       const amountOver50 = Math.max(transaction.purchaseAmount - 50, 0);

//       const pointsEarned = Math.floor(amountOver100 * 2) + Math.floor(amountOver50 * 1);

//       if (!points[month]) {
//         points[month] = {
//           totalPoints: 0,
//           transactions: [],
//         };
//       }

//       points[month].totalPoints += pointsEarned;
//       points[month].transactions.push({
//         id: transaction.id,
//         customerName: transaction.customerName,
//         purchaseAmount: transaction.purchaseAmount,
//         pointsEarned,
//       });

//       total += pointsEarned;
//     });

//     setPointsByMonth(points);
//     setTotalPoints(total);

const calculatePointsByMonth = () => {
    const points = {};
    let total = 0;
  
    transactions.forEach((transaction) => {
      const month = new Date(transaction.purchaseDate).getMonth();
      const amountOver100 = Math.max(transaction.purchaseAmount - 100, 0);
      const amountOver50 = Math.max(Math.min(transaction.purchaseAmount, 100) - 50, 0);
      const pointsEarned = Math.floor(amountOver100 * 2) + Math.floor(amountOver50 * 1);
  
      if (!points[month]) {
        points[month] = {
          totalPoints: 0,
          transactions: [],
        };
      }
  
      points[month].totalPoints += pointsEarned;
      points[month].transactions.push({
        id: transaction.id,
        customerName: transaction.customerName,
        purchaseAmount: transaction.purchaseAmount,
        pointsEarned,
      });
  
      total += pointsEarned;
    });
  
    setPointsByMonth(points);
    setTotalPoints(total);
  };
  
  

  return (
    <div className="reward-calculator">
      <table className="points-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer Name</th>
            <th>Purchase Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.customerName}</td>
              <td>{transaction.purchaseAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="calculate-points-button" onClick={calculatePointsByMonth}>
        Calculate Points
      </button>
      <table className="points-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Transaction ID</th>
            <th>Customer Name</th>
            <th>Purchase Amount</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(pointsByMonth).map(([month, data]) => (
            <React.Fragment key={month}>
              <tr>
                <th colSpan="5">Month {Number(month) + 1}</th>
              </tr>
              {data.transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td></td>
                  <td>{transaction.id}</td>
                  <td>{transaction.customerName}</td>
                  <td>{transaction.purchaseAmount.toFixed(2)}</td>
                  <td>{transaction.pointsEarned}</td>
                </tr>
              ))}
              <tr>
                <th colSpan="4">Total Points:</th>
                <td>{data.totalPoints}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

RewardCalculator.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      purchaseAmount: PropTypes.number.isRequired,
      purchaseDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RewardCalculator;

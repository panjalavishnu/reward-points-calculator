// import React from 'react';
// import PropTypes from 'prop-types';
// import '../components/styles/RewardCalculator.css';

// function TransactionList({ transactions }) {
//   return (
//     <div className="transaction-list">
//       <div className="transaction-header">
//         <div className="transaction-field">Transaction ID</div>
//         <div className="transaction-field">Customer Name</div>
//         <div className="transaction-field">Purchase Amount</div>
//       </div>
//       {transactions.map((transaction) => (
//         <div className="transaction-row" key={transaction.id}>
//           <div className="transaction-data">{transaction.id}</div>
//           <div className="transaction-data">{transaction.customerName}</div>
//           <div className="transaction-data">{typeof transaction.purchaseAmount === 'number' ? transaction.purchaseAmount.toFixed(2) : '-'}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// TransactionList.propTypes = {
//   transactions: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       customerName: PropTypes.string.isRequired,
//       purchaseAmount: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default TransactionList;



import React from 'react';
import PropTypes from 'prop-types';
import '../components/styles/RewardCalculator.css';

function TransactionList({ transactions }) {



TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      purchaseAmount: PropTypes.number.isRequired,
      pointsEarned: PropTypes.number.isRequired,
    })
  ).isRequired,
};
}

export default TransactionList;

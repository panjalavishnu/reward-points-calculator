import React from 'react';
import PropTypes from 'prop-types';
import '../components/styles/RewardCalculator.css';

function TransactionItem({ id, customerName, purchaseAmount, pointsEarned }) {
  return (
    <div className="transaction-item">
      <div className="transaction-field">{id}</div>
      <div className="transaction-field">{customerName}</div>
      <div className="transaction-field">{purchaseAmount}</div>
      <div className="transaction-field">{pointsEarned}</div>
    </div>
  );
}

TransactionItem.propTypes = {
  id: PropTypes.number.isRequired,
  customerName: PropTypes.string.isRequired,
  purchaseAmount: PropTypes.string.isRequired,
  pointsEarned: PropTypes.number.isRequired,
};

export default TransactionItem;


// import React from 'react';
// import PropTypes from 'prop-types';
// import '../components/styles/RewardCalculator.css';

// function TransactionItem({ id, customerName, purchaseAmount, pointsEarned }) {
//   return (
//     <div className="transaction-item">
//       <div className="transaction-field">{id}</div>
//       <div className="transaction-field">{customerName}</div>
//       <div className="transaction-field">{purchaseAmount}</div>
//       <div className="transaction-field">{pointsEarned}</div>
//     </div>
//   );
// }

// TransactionItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   customerName: PropTypes.string.isRequired,
//   purchaseAmount: PropTypes.number.isRequired,
//   pointsEarned: PropTypes.number.isRequired,
// };

// export default TransactionItem;

// import React from 'react';
// import PropTypes from 'prop-types';
// import '../components/styles/RewardCalculator.css';

// function TransactionItem({ id, customerName, purchaseAmount, pointsEarned }) {
//   return (
//     <div className="transaction-item">
//       <div className="transaction-field">{id}</div>
//       <div className="transaction-field">{customerName}</div>
//       <div className="transaction-field">{`$${purchaseAmount.toFixed(2)}`}</div>
//       <div className="transaction-field">{pointsEarned}</div>
//     </div>
//   );
// }

// TransactionItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   customerName: PropTypes.string.isRequired,
//   purchaseAmount: PropTypes.number.isRequired,
//   pointsEarned: PropTypes.number.isRequired,
// };

// export default TransactionItem;


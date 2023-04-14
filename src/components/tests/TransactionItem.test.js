// import React from 'react';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import TransactionItem from '../TransactionItem';

// describe('TransactionItem', () => {
//   const transaction = {
//     id: 1,
//     customerName: 'John Doe',
//     purchaseAmount: 100.0,
//     pointsEarned: 150,
//   };

//   it('renders transaction details correctly', () => {
//     const { getByText } = render(
//       <TransactionItem
//         id={transaction.id}
//         customerName={transaction.customerName}
//         purchaseAmount={transaction.purchaseAmount}
//         pointsEarned={transaction.pointsEarned}
//       />
//     );

//     expect(getByText(transaction.id)).toBeInTheDocument();
//     expect(getByText(transaction.customerName)).toBeInTheDocument();
//     //expect(getByText(`$${transaction.purchaseAmount.toFixed(2)}`)).toBeInTheDocument();
//     expect(getByText(new RegExp(`\\$${transaction.purchaseAmount.toFixed(2)}`))).toBeInTheDocument();

//     expect(getByText(transaction.pointsEarned)).toBeInTheDocument();
//   });

  
// });


// import React from 'react';
// import { render } from '@testing-library/react';
// import TransactionItem from '../TransactionItem';

// describe('TransactionItem', () => {
//   const transaction = {
//     id: 1,
//     customerName: 'John Doe',
//     purchaseAmount: '100.00',
//     pointsEarned: 150,
//   };

//   it('renders transaction details correctly', () => {
//     const { getByText } = render(
//       <TransactionItem
//         id={transaction.id}
//         customerName={transaction.customerName}
//         purchaseAmount={transaction.purchaseAmount}
//         pointsEarned={transaction.pointsEarned}
//       />
//     );

//     expect(getByText(transaction.id)).toBeInTheDocument();
//     expect(getByText(transaction.customerName)).toBeInTheDocument();
//     expect(getByText(new RegExp(`\\$${transaction.purchaseAmount.toFixed(2)}`))).toBeInTheDocument();
//     expect(getByText(transaction.pointsEarned)).toBeInTheDocument();
//   });

//   it('throws an error if required props are missing', () => {
//     // Silence the console error from PropTypes
//     jest.spyOn(console, 'error').mockImplementation(() => {});

//     expect(() => render(<TransactionItem />)).toThrow();
//     expect(() => render(<TransactionItem id={1} />)).toThrow();
//     expect(() => render(<TransactionItem id={1} customerName="John Doe" />)).toThrow();
//     expect(() =>
//       render(<TransactionItem id={1} customerName="John Doe" purchaseAmount="100.00" />)
//     ).toThrow();
//     expect(() =>
//       render(
//         <TransactionItem
//           id={1}
//           customerName="John Doe"
//           purchaseAmount="100.00"
//           pointsEarned={150}
//         />
//       )
//     ).not.toThrow();
//   });
// });



import React from 'react';
import { render } from '@testing-library/react';
import TransactionItem from '../TransactionItem';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';


const { getByRole } = screen;



describe('TransactionItem', () => {
  const transaction = {
    id: 1,
    customerName: 'John Doe',
    purchaseAmount: '100.0',
    pointsEarned: 150,
  };

  it('renders transaction details correctly', () => {
    const { getByText } = render(
      <TransactionItem
        id={transaction.id}
        customerName={transaction.customerName}
        purchaseAmount={transaction.purchaseAmount}
        pointsEarned={transaction.pointsEarned}
      />
    );

    expect(getByText(transaction.id)).toBeInTheDocument();
    expect(getByText(transaction.customerName)).toBeInTheDocument();
    expect(getByText(transaction.pointsEarned)).toBeInTheDocument();
  });

});

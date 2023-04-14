Reward Points Calculator
This is a React application that calculates reward points earned by customers based on their recorded purchases. Customers receive 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction. The application takes in a record of every transaction during a three-month period and calculates the reward points earned for each customer per month and total.

Getting Started
To get started with the application, clone the repository to your local machine:

git clone https://github.com/your-panjalavishnu/reward-points-calculator.git

Then, navigate to the project directory and install the necessary dependencies:

cd reward-points-calculator
npm install

To start the application, run the following command:
npm start


This will start the development server and open the application in your default web browser.

Usage
Once the application is running, you will see a table of transactions displayed on the screen. The table shows the date of each transaction, the customer name, the transaction amount, and the reward points earned. The table is sorted by customer name and month.

To test the application with different data, you can modify the data in transactions.json file. This file contains data  with a date, customer name, and transaction amount.

Running Tests
To run the unit tests for the application, run the following command:

npm test


This will run all of the tests located in the src directory and display the results in the console.

Built With
React
Axios
Jest
@testing-library/jest-dom


Author
vishnupanjala - vpanjal004@gmail.com
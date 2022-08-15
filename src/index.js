import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// {
//   "totalBudgetTeam": 4700,
//   "totalBudgetManager": 2200,
//   "totalBudgetDesigner": 1560,
//   "totalBudgetArtist": 1724
// }
// ----- exercise ------
const salaries1 = {
  Manager: { salary: 1000, tax: '10%' },
  Designer: { salary: 600, tax: '30%' },
  Artist: { salary: 1500, tax: '15%' },
};

const team1 = [
  { name: 'Misha', specialization: 'Manager' },
  { name: 'Max', specialization: 'Designer' },
  { name: 'Vova', specialization: 'Designer' },
  { name: 'Leo', specialization: 'Artist' },
  { name: 'Dan', specialization: 'Manager' },
];

const result = team1.reduce(
  (acc, { specialization }) => {
    const key = `totalBudget${specialization}`;
    const { salary, tax } = salaries1[specialization];
    const taxNum = parseInt(tax.replace('%', '')) / 100;
    const value = key in acc ? acc[key] : 0;
    const salaryWithTax = salary + salary * taxNum;

    return {
      ...acc,
      totalBudgetTeam: acc.totalBudgetTeam + salaryWithTax,
      [key]: value + salaryWithTax,
    };
  },
  {
    totalBudgetTeam: 0,
  }
);

console.log('result:', result);

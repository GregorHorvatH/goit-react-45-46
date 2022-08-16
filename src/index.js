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
//   "totalBudgetTeam": 5485,
//   "totalBudgetManager": 2200,
//   "totalBudgetDesigner": 1560,
//   "totalBudgetArtist": 1725
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

const getTeamBudget = (team = [], salaries = {}) =>
  team.reduce((acc, { specialization = '' } = {}) => {
    const key = `totalBudget${specialization}`;
    const { salary = 0, tax = 0 } = salaries[specialization] || {};
    const salaryWithTax = salary + parseFloat(tax) / 100;

    return {
      ...acc,
      [key]: (acc[key] || 0) + salaryWithTax,
      totalBudgetTeam: (acc.totalBudgetTeam || 0) + salaryWithTax,
    };
  }, {});

console.log(getTeamBudget(team1, salaries1));

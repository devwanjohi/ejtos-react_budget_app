import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MAXIMUM_BUDGET = 20000;

const Budget = () => {
  const { budget,expenses, currency, dispatch } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
    }, 0);
  const onChangeBudgetHandler = (event) => {
    const budgetValueEntered = Number(event.target.value);
    if (budgetValueEntered < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending.");
        return;
    }
    if (budgetValueEntered > MAXIMUM_BUDGET) {
      alert('Budget can not exceed ' + currency + ' ' + MAXIMUM_BUDGET);
      return;
    }

    dispatch({
      type: 'SET_BUDGET',
      payload: budgetValueEntered,
    });
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget">Budget: </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{marginLeft: '.5rem', marginRight: '.5rem'}}>{currency}</span>
        <input
          id="budget"
          required="required"
          type="number"
          value={budget}
          step="10"
          onChange={onChangeBudgetHandler}
        ></input>
      </div>
    </div>
  );
};

export default Budget;
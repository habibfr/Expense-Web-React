import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/newExpense";
import ExpensesData from "./components/Expenses/ExpenseData";

function App() {
  // set data expenses state
  const [expensesData, setExpenses] = useState(ExpensesData);

  // add new expense
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;

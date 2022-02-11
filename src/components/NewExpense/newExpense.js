import React from "react";
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <div className="alternative">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </div>
  );
}

export default NewExpense;

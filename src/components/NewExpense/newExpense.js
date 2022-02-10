import React from "react";
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  return (
    <div className="new-expense">
      <button className="alternative">
        <ExpenseForm />
      </button>
    </div>
  );
}

export default NewExpense;

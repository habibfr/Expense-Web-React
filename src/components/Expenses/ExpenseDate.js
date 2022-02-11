import React from "react";
import "./ExpenseDate.css";

// set date format
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className="expense-date">
        <div className="expensedate-date__month">{month}</div>
        <div className="expensedate-date__year">{year}</div>
        <div className="expensedate-date__day">{day}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;

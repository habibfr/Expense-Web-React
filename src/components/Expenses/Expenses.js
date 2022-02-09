import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesData from "./ExpenseData";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses() {
  const data = ExpensesData.map((data) => {
    return (
      <ExpenseItem
        key={data.id}
        title={data.title}
        amount={data.amount}
        date={data.date}
      />
    );
  });

  return <Card className="expenses">{data}</Card>;
}

export default Expenses;

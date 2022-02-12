import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setSelectYear] = useState("All");

  // handle filter change by year
  const filterChangeHandler = (selectedYear) => {
    setSelectYear(selectedYear);
  };

  // filter expenses by year
  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === "All"
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList item={filteredExpenses} />
    </Card>
  );
}

export default Expenses;

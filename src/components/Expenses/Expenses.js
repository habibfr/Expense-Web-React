import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
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

  // check if there is any expense
  let expenseList = <p>No Expenses</p>;
  if (filteredExpenses.length > 0) {
    expenseList = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {props.items
        .filter((expense) => {
          if (filteredYear === "All") {
            return true;
          } else {
            return expense.date.getFullYear() === parseInt(filteredYear);
          }
        })
        .map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
      {/* {filteredExpenses.length === 0 && <h3> Kosong Bro </h3>} */}
      {/* {filteredExpenses.length > 0 &&} */}
      {expenseList}
    </Card>
  );
}

export default Expenses;

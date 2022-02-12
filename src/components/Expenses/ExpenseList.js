import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  //   {/* {props.items
  //   .filter((expense) => {
  //     if (filteredYear === "All") {
  //       return true;
  //     } else {
  //       return expense.date.getFullYear() === parseInt(filteredYear);
  //     }
  //   })
  //   .map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   })} */}
  // {/* {filteredExpenses.length === 0 && <h3> Kosong Bro </h3>} */}
  // {/* {filteredExpenses.length > 0 &&} */}

  // let expenseList = <p>No Expenses</p>;
  // if (props.item.length > 0) {
  //   expenseList = props.item.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  if (props.item.length === 0) {
    return <p className="expenses-list__fallback">No Expense Found!!</p>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpenseList;

import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/newExpense";

function App() {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {})
  // );

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />

      {/* {data} */}

      {/* //   <ExpenseItem
  //     title={ExpensesData[1].title}
  //     amount={ExpensesData[1].amount}
  //     date={ExpensesData[1].date}
  //   />
  //   <ExpenseItem
  //     title={ExpensesData[2].title}
  //     amount={ExpensesData[2].amount}
  //     date={ExpensesData[2].date}
  //   />
  //   <ExpenseItem
  //     title={ExpensesData[3].title}
  //     amount={ExpensesData[3].amount}
  //     date={ExpensesData[3].date}
  //   /> */}
    </div>
  );
}

export default App;

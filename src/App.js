import Expenses from "./components/Expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses />

      {/* {data} */}

      {/* <ExpenseItem
        title={ExpensesData[1].title}
        amount={ExpensesData[1].amount}
        date={ExpensesData[1].date}
      />
      <ExpenseItem
        title={ExpensesData[2].title}
        amount={ExpensesData[2].amount}
        date={ExpensesData[2].date}
      />
      <ExpenseItem
        title={ExpensesData[3].title}
        amount={ExpensesData[3].amount}
        date={ExpensesData[3].date}
      /> */}
    </div>
  );
}

export default App;

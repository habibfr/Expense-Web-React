import ExpenseItem from "./ExpenseItem";
import ExpensesData from "./ExpenseData";
import "./Expenses.css";

function Expenses() {
  const data = ExpensesData.map((data) => {
    return (
      <div>
        <ExpenseItem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      </div>
    );
  });

  return <div className="expenses">{data}</div>;
}

export default Expenses;

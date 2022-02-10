import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesData from "./ExpenseData";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

function Expenses() {
  const [filteredYear, setSelectYear] = useState("");

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

  const filterChangeHandler = (selectedYear) => {
    setSelectYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {data}
      </Card>
    </div>
  );
}

export default Expenses;

import React, { useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
          title={props.itens[0].title}
          amount={props.itens[0].amount}
          date={props.itens[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.itens[1].title}
          amount={props.itens[1].amount}
          date={props.itens[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.itens[2].title}
          amount={props.itens[2].amount}
          date={props.itens[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.itens[3].title}
          amount={props.itens[3].amount}
          date={props.itens[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;

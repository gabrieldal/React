import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;

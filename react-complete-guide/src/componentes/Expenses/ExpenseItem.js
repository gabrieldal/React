import React, {useState} from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h1>{title}</h1>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick= {clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

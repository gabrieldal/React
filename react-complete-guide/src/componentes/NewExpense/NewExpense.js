import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //This is a function that is passed from App.js
  };
  const startEditingHandler = () => {
    //This is a function that is passed from ExpenseForm.js
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    //This is a function that is passed from ExpenseForm.js
    setIsEditing(false);
  };


  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
      <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler} 
      onCancel={stopEditingHandler} 
      />
      )}
    </div>
  );
};

export default NewExpense;

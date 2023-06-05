import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 18th  2023</div>
      <div className='expense-item__description'><h1>Car Insurance</h1></div>
      <div className='expense-item__price'>$400.67</div>
    </div>
  );
}

export default ExpenseItem;

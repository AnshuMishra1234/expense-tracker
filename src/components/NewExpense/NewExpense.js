import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';



const NewExpense = (props) => {
  // const saveExpenseDataHandler=(enteredExpenseData)=>{
  //   const expenseData={
  //     ...enteredExpenseData,
      // id:Math.random().toString()

  //   }
  //   props.onAddExpense(expenseData);
  //   console.log(enteredExpenseData);
  // }
  
  return (
    <div className="new-expense">
    <ExpenseForm
    onSaveExpenseData=
    {props.onAddExpense}
   
     />

      
    </div>
  )
}

export default NewExpense

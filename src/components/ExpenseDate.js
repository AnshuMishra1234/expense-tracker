
import React from 'react-dom';
import './ExpenseDate.css'


function ExpenseDate(props){
  //   const month = props.date.toLocaleString('en-US', { month: 'long' });
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  let dateObject = new Date(props.date);
  const month = dateObject.toLocaleString('en-US', { month: 'long' });
  const year = dateObject.getFullYear();
  const day = dateObject.toLocaleString('en-US', { day: '2-digit' });

  return(
 
      <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expens-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>

  )
}

export default ExpenseDate;
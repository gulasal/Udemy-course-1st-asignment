import React, { useState } from "react";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
import "./ExpenceItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <div className=".expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button
        onClick={() => {
          setTitle("Updated!");
        }}
      >
        Change item
      </button>
    </Card>
  );
}
export default ExpenseItem;

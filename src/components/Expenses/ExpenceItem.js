import React from 'react';
import ExpenceDate from './ExpenceDate';
import Card from '../UI/Card';
import './ExpenceItem.css'

function ExpenseItem(props){
    
    
    return (
        <Card  className='expense-item'>
            <ExpenceDate date={props.date}/>
            <div className='.expense-item__description'><h2>{props.title}</h2></div>
            <div className='expense-item__price'>${props.amount}</div>
        </Card>
    )
}
export default ExpenseItem;
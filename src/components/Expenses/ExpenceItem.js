import React, {useState} from 'react';
import ExpenceDate from './ExpenceDate';
import Card from '../UI/Card';
import './ExpenceItem.css'

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);

    

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title); 
    }
    
    return (
        <Card  className='expense-item'>
            <ExpenceDate date={props.date}/>
            <div className='.expense-item__description'><h2>{title}</h2></div>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>Submit</button>
        </Card>
    )
}
export default ExpenseItem;
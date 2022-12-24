import ExpenceDate from './ExpenceDate';
import Card from './Card';
import './ExpenceItem.css'

function ExpenseItem(props){
    const clickHandler = () => {
        console.log("Clicked")
    }
    
    return (
        <Card  className='expense-item'>
            <ExpenceDate date={props.date}/>
            <div className='.expense-item__description'><h2>{props.title}</h2></div>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>Submit</button>
        </Card>
    )
}
export default ExpenseItem;
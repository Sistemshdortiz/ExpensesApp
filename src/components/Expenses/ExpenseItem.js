import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { isMobile } from 'react-device-detect';

function ExpenseItem(props) {

    return (
        isMobile ?
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>

                    <div className='expense-item__price'>{props.amount}€</div>
                </div>
            </Card>
            :
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <div className='expense-item__title'>{props.title}</div>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}€</div>
                </div>
            </Card>
    );
}

export default ExpenseItem;
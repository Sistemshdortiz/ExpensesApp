import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { isMobile } from 'react-device-detect';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log("expenses items evalueted by react")

    const ClickHandler = () => {
        setTitle("Updated");

        console.log(title);
    };

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
                    <h2>{title}</h2>
                    <div className='expense-item__price'>{props.amount}€</div>
                </div>
                <button onClick={ClickHandler}>Change Title</button>
            </Card>
    );
}

export default ExpenseItem;
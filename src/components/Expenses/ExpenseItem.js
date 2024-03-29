import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { isMobile } from 'react-device-detect';

const ExpenseItem = (props) => {

    return (
        isMobile ?
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                        <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}€</div>
                </div>
            </Card></li>
            :
            <li><Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}€</div>
                </div>
            </Card></li>
    );
}

export default ExpenseItem;

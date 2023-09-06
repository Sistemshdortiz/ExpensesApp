import React, { useState } from 'react';
import Card from '../UI/Card'
import './Expense.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../Filter/ExpensesFilter';

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(filteredYear)

    }

    return (

        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map((expense) => (
                    <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />))}
            </Card>
        </div>)
}

export default Expense;
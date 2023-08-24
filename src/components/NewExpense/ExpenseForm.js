import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    //constantes para setear los valores que ingresa el usuario en el formulario
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //****Esta sería otra forma de pasar los valores  */
    // const[userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate:''
    // });   

    //Funciones que asocian los inpunt ingresados por el usuario con los nuevos valores a pasar. 
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        //En el caso de seleccionar la opción de los valores conjuntos deberiamos usar esta forma para tomar
        //los valores desde el userInput.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle: event.target.value};
        // })
    };


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const expenseHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number' min='0.01' step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date' min='2019-01-01' max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' onClick={expenseHandler}>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
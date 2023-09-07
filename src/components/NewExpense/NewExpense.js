import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }
    const [editingForm, setEditingForm] = useState(false);

    const clickEditingForm = () => {
        setEditingForm(true)
    }
    const clickCancelEditing = () => {
        setEditingForm(false)
    }

    return <div className="new-expense">
        {!editingForm && <button onClick={clickEditingForm}>Add New Expense</button>}
        {editingForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={clickCancelEditing}/>}
    </div>
};

export default NewExpense;
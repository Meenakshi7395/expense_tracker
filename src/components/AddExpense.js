// import { useSelector } from "react-redux"
// import React from "react"
import { useState } from "react";
import { addExpense } from "../redux/spendWiseReducer";
import { useDispatch } from "react-redux";

function AddExpense(){
    
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    function onSubmit() {
        // alert("The form was submitted")
        if(date!= null && description !='' && amount>0 && category!='') {
            var expense = {
                description:description,
                date:date,
                amount:amount,
                category:category
            }
            console.log(expense)
            dispatch(addExpense(expense))
           
        }
    }

    return <>
         {/* <form onSubmit={getValue}>  */}
            <label>
                <input type="date" name="date"  placeholder="Enter Date" onChange={(event)=>setDate(event.target.value)} value={date}/>
            </label><br/>
            <label>
                <input type="text" name="description" placeholder="Description" onChange={(event)=>setDescription(event.target.value)}/>     
            </label><br/>
            <label>
            <   input type="number" name="amount" placeholder="Amount" onChange={(event)=>setAmount(event.target.value)}/>
            </label><br/>
            <label>
            <select id="category" name="Category" onChange={(event)=>setCategory(event.target.value)}>
                <option >Select</option>
                <option value="food">Food</option>
                <option value="grossiory">Grossiory</option>
                <option value="entertainment">Entertainment</option>
                <option value="bills">Bills</option>
            </select>
            </label><br/>
            <button onClick={onSubmit}>Submit</button>
           
        </>
}


export default AddExpense;
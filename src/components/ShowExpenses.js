import { useDispatch, useSelector } from "react-redux"
import React from "react"
import { removeExpense } from "../redux/spendWiseReducer"

function ShowExpenses()
{
    const expenses = useSelector((state)=>state.spendwise.expenses)
    const dispatch=useDispatch()

    return <>
        <table>
            <thead>
                {/* <th>Id</th> */}
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Actions</th>
            </thead>
            <tbody> 
                {expenses.map((expense)=>{
                    return <tr>
                        {/* <td>{expense.id}</td> */}
                        <td>{expense.date}</td>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td><button>Edit</button> <button onClick={()=>{dispatch(removeExpense({id:expense.id}))}}>Delete</button></td>
                    </tr>
                })}

            </tbody>
        </table>
    
    </>
}

export default ShowExpenses;
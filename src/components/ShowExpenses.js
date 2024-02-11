import { useSelector } from "react-redux"
import React from "react"

function ShowExpenses()
{
    const expenses = useSelector((state)=>state.spendwise.expenses)
    return <>
        <table>
            <thead>
                <th>Id</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
            </thead>
            <tbody> 
                {expenses.map((expense)=>{
                    return <tr>
                        <td>{expense.id}</td>
                        <td>{expense.date}</td>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                    </tr>
                })}

            </tbody>
        </table>
    
    </>
}

export default ShowExpenses;
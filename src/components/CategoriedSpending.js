import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CategorisedSpending()
{
    const totalSpending = useSelector(state=>state.spendwise.totalSpending)
    const expenses = useSelector((state)=>state.spendwise.expenses)

    const [foodAmount , setFoodAmount] = useState(0);

    useEffect(()=>{
        var sumFoodAmount = 0
        expenses.forEach(expense => {
            if(expense.category==='food')
            {
                console.log(expense)
                sumFoodAmount += Number(expense.amount)
            }
        });
        setFoodAmount(sumFoodAmount)

    },[expenses])

return <>

    <h3>Total Spending : {totalSpending}</h3>
        <ul>
            <li>Food : {foodAmount}</li>
            <li>Groceries : {}</li>
            <li>Entertainment : {}</li>
            <li>Bills : {}</li>
        </ul>
    </>
}

export default CategorisedSpending;
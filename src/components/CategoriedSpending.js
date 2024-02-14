import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './CategoriedSpending.css';
function CategorisedSpending()
{
    const totalSpending = useSelector(state=>state.spendwise.totalSpending)
    const expenses = useSelector((state)=>state.spendwise.expenses)

    const [foodAmount , setFoodAmount] = useState(0);
    const [groceriesAmount , setGroceriesAmount] = useState(0);
    const [entertainmentAmount, setEntertainmentAmount] = useState(0);
    const [billsAmount, setBillsAmount] = useState(0);

    useEffect(()=>{
        var sumFoodAmount = 0
        var sumGroceriesAmount =0
        var sumEntertainmentAmount = 0
        var sumBillsAmount = 0
        
        expenses.forEach(expense => {
            if(expense.category==='food')
            {
                console.log(expense)
                sumFoodAmount += Number(expense.amount)
            }

            else if(expense.category==='grossiory')
            {
                console.log(expense)
                sumGroceriesAmount += Number(expense.amount)
            }
            
            else if(expense.category==='entertainment')
            {
                console.log(expense)
                sumEntertainmentAmount += Number(expense.amount)
            }

            else if(expense.category==='bills')
            {
                sumBillsAmount += Number(expense.amount)
            }
            
        });
        setFoodAmount(sumFoodAmount)
        setGroceriesAmount(sumGroceriesAmount)
        setEntertainmentAmount(sumEntertainmentAmount)
        setBillsAmount(sumBillsAmount)
    },[expenses])

return <>

<div class="grid-container">
  <div>Total Spending : {foodAmount+groceriesAmount+entertainmentAmount+billsAmount}</div>
  <div>Food : {foodAmount}</div>
  <div>Groceries : {groceriesAmount}</div>  
  <div>Entertainment : {entertainmentAmount}</div>
  <div>Bills : {billsAmount}</div>
</div>
    
    {/* <div className="card2">
    <h3>Total Spending : {foodAmount+groceriesAmount+entertainmentAmount+billsAmount}</h3>
        <ul>
            <li>Food : {foodAmount}</li>
            <li>Groceries : {groceriesAmount}</li>
            <li>Entertainment : {entertainmentAmount}</li>
            <li>Bills : {billsAmount}</li>
        </ul>
    </div> */}
    </>
    
}

export default CategorisedSpending;
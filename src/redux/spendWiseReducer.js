import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialData = {
    user:"Initial User",
    expenses:[
        {id:0,
        description:"Test Expense",
        date:"20-02-2024",
        amount:400,
        category:"Food"}
    ],
    totalSpending:400
}

const spendWiseSlice = createSlice(
    {
        name:"spendwise",
        initialState:initialData,
        reducers:{
            addExpense:(state,action)=>{
                const newExpense = {
                    id:nanoid(),
                    ...action.payload
                }
                state.expenses.push(newExpense)

                state.totalExpenses = state.totalExpenses + action.payload.amount;
            },
            removeExpense:(state,action)=>{
                state.expenses = state.expenses.filter((expense)=>expense.id !=action.id)
            },
            renameUser:(state,action)=>{
                state.user = action.user
            }
        }
    }
)

export const {addExpense,removeExpense} = spendWiseSlice.actions
export const spendWiseReducer  = spendWiseSlice.reducer
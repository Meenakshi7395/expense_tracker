import React from "react";
import { useSelector } from "react-redux";
import ShowExpenses from "../components/ShowExpenses";
import AddExpense from "../components/AddExpense";
import CategorisedSpending from "../components/CategoriedSpending";


function Home(props)
{
    const user = useSelector(state=>state.spendwise.user)
    return <>
        <h1>Welcome to SpendWise</h1>
        <h2>You are {user}</h2>
        <AddExpense/>
        <ShowExpenses/>
        <CategorisedSpending />    
    </>
}
export default Home;
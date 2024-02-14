import React from "react";
import { useSelector } from "react-redux";
import ShowExpenses from "../components/ShowExpenses";
import AddExpense from "../components/AddExpense";
import CategorisedSpending from "../components/CategoriedSpending";
import './Home.css';

function Home(props)
{
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    const h2Style={
        display: "flex",
    }
    const user = useSelector(state=>state.spendwise.user)
    return <>
        <h1 style={myStyle}>Welcome to SpendWise</h1>
        <h2 style={h2Style}>You are {user}</h2>
        <div class="row">
            <div class="column-50"><AddExpense/></div>
            <div class="column-50"> <CategorisedSpending /></div><br/>
        </div><br/>
        <ShowExpenses/>
    </>
}
export default Home;
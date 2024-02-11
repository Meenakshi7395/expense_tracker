import React from "react";
import { useSelector } from "react-redux";
import ShowExpenses from "../components/ShowExpenses";


function Home(props)
{
    const user = useSelector(state=>state.spendwise.user)
    return <>
        <h1>Welcome to SpendWise</h1>
        <h2>You are {user}</h2>
        <ShowExpenses/>
        
    </>
}
export default Home;
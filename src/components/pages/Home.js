import React from "react";
import { useSelector } from "react-redux";
import store from "../../redux/store";

function Home(props)
{
    const user = useSelector(state=>state.user)
    return <>
        <h1>Welcome to SpendWise</h1>
        <h2>You are {user}</h2>
    </>
}
export default Home;
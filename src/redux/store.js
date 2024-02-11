import { configureStore } from "@reduxjs/toolkit";
import { spendWiseReducer } from "./spendWiseReducer";

export const store = configureStore({reducer:{
    spendwise:spendWiseReducer
}})
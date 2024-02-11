// import {useState} from 'react';


import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { expenseReducer } from './reducer'; // Assuming you have reducer defined

const store = configureStore({reducer:{expenseReducer}})

export default store;
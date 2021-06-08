import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import allReducer from './reducers';

const store = createStore(allReducer);


// // Example of setup Redux
// import {createStore} from 'redux';

// // STORE (globalized state)

// // ACTION 
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// // REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//   }
// }

// let store = createStore(counter);

// // Display store in console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment());


ReactDOM.render(
    <App />, document.getElementById('root')
);



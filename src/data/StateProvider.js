//YOU CAN USE THIS FILE ANYWHERE

//Setting up the data layer.


//record of the basket 

//keep track of the user WHEN LOGGING IN Electric

import { createContext, useContext, useReducer } from 'react'

//THIS IS THE DATA LAYER
export const StateContext = createContext();


//BUILD A PROVIDER 
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);

import { configureStore } from "@reduxjs/toolkit"; 
import counterReducer from "../features/counter/counterSlice" //Traemos cuestro counterSlide con temas nuevos
import logInOutReducer from "../features/logged/loggedSlice"

export const store = configureStore({ //Exportando una variable storeque es igualada a configureStore
    reducer: { //Donde le pasamos reducer
        counter: counterReducer,
        logged: logInOutReducer,
        //...all reducers
    },  
})
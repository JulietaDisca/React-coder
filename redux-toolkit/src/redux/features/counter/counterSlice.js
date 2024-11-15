import { createSlice } from "@reduxjs/toolkit";  //Se usa siempre en Redux

const initialState = { //Se usa siempre en Redux
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter", //darle un nombre 
    initialState, //agregar el valor inicial
    reducers: { //En reducers se encontrará la logica
        increment: (state) => { //increment le colocaremos una funcion que toma como parametro el estado (state)
            state.value += 1; //devuelve un state acompañado de .value += 1 ó value(valor de initialState) +=1 es  lo mismo que + 1
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
})

//se crearan las actions + reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions; //actions

export default counterSlice.reducer; //reducer 
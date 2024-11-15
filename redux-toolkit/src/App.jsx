import './App.css'
import React from 'react';

//creamos el store
//utilizamos provider pasandole el store
//creamos nuestro slice 
//le pasamos el reducer al store
//ya podemos ver el estado en redux dev tools ()

import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount } from "./redux/features/counter/counterSlice"

import { logInToggle } from './redux/features/logged/loggedSlice';


const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const logged = useSelector((state) => state.logged.logged)

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleIncrementByFive = () => {
    dispatch(incrementByAmount(5)); // <== lo que pasamos por parametro lo resivimos en action.payload
  }

  const handleToggle = () => {
    dispatch(logInToggle())
  }

  return (
    <div className='App'>
      <h1>Redux Toolkit</h1>

      <p>Counter: {counter}</p>

      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleIncrementByFive}>Incrementar By Five</button>

      <div>
        {logged ? <p>Estas Logueado</p> : <p>No estas logueado</p>}
      </div>

      <div>
        <button onClick={handleToggle}>{logged ? "Desloguearse" : "Hacer Login"}</button>
      </div>
    </div>

    
  )
}

export default App;

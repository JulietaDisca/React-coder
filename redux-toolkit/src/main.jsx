import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { Provider } from "react-redux" //Envuelve nuestra app

import { store } from "./redux/store/store.js"

createRoot(document.getElementById('root')).render( //Agregamos ReactDOM
  <Provider store={store}> {/*cambiamos por provider y añadimp¿os store*/}
    <App />
  </Provider>
)

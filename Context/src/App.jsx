import React from 'react'
import './App.css';

import Header from './components/Header/Header';
import ListCard from './components/ListCard/ListCard';

//ContextProvider
import { ItemsProvider } from './context/ItemsContext';

const App = () => {
  return (
    <ItemsProvider>
      <div className="App" >
        <Header />
        <ListCard />
      </div>
    </ItemsProvider>
  )
}

export default App
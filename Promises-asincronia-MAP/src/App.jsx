import './App.css'

//Components
import Header from "./components/Header/Header"
import CardList from "./components/CardList/CardList"

const App = () => {
  return(
    <div className='App'>
        <Header title="Github Users App"/>
        <CardList />
    </div>
  );
}

export default App;

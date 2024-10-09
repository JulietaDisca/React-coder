import {useState} from "react";
import "./App.css";

//COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";

//PROPS => strings, arrays, booleans, functions, objetos, todo tipo de dato.

const App = () => {
  const [counter, setCounter] = useState(0);

  const handlerCounterUp = () => {
    //console.log("Hiciste click en el btn")
    setCounter(counter + 1);
  }

  const handlerCounterDown = () => {
    //console.log("Hiciste click en el btn")
    setCounter(counter - 1);
  }
  
  return (
    <div className="App">
      {
        //Para comentar en jsx utilizar llaves 
        /*<Header 
        title="Soy un title desde una prop"
        subtitle="Soy un subtitle desde una prop"
        bgColor="orange"
        borderColor="black"
        />*/
      }
      <Header 
        title="Soy otra prop con un title"
        subtitle="Soy otro subtitle!!"/>

      <div className="UserSection">
        <UserCard 
          img="https://react.semantic-ui.com/images/avatar/large/matthew.png" 
          name="Daniel Di Salvo" 
          date="Se unió en Enero 2021"
          description="Front-end Developer y profesor del Curso de React.js en CoderHouse"
        />
        <UserCard 
          img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" 
          name="Raún Gutierrez" 
          date="Se unió en Abril 2021"
          description="Scrum Master y UX Designer en Mercado Libre"
        />
        <UserCard 
          img="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" 
          name="Francesca Bertotti" 
          date="Se unió en Julio 2021"
          description="DevOps y profesora del curso de React.js en CoderHouse"
        />
      </div>
      <div className="CounterSection">
        <p>Counter: {counter}</p>
      </div>
      <div className="btn-section">
        <button className="btn" onClick={handlerCounterUp}>Incrementar</button>
        <button className="btn" onClick={handlerCounterDown}>Decrementar</button>
      </div>
    </div>
  );
}

export default App;
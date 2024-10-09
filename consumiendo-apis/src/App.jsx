import { useState, useEffect } from "react";
import "./App.css"
//import axios from "axios";

//COMPONENTS
import Header from './components/Header/Header'
import PictureCard from './components/PictureCard/PictureCard'
import Spinner from "./components/Spinner/Spinner";

//baseURL = https://api.nasa.gov
//https://api.nasa.gov/planetary/apod?api_key=zwJevs0xILNvjEc3YPypBKUixqgGd2KtDHRN7eDQ

//ternary operator => if/else
//condition ? true : false
//condition ? exprIfTrue : exprIfFalse

//.env => guardar info sensible, como url's o apikeys
//estos archivos, NO SE SUBEN AL REPO, se colocan en el gitignore

const App = () => {
  const [data, setData] = useState({});
  const [boolean, setBoolean] = useState(!false);
  const [isLoading, setIsLoading] = useState(false);

  console.log("data", data);

  // console.log(import.meta.env.VITE_API_KEY);
  
  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_BASE_URL}/planetary/apod?api_key=${
      import.meta.env.VITE_API_KEY
    }`)
    .then((resp) => resp.json())
    .then((info) => setData(info));
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  //useEffect(() => {
    //async/await
  //  axios(
  //    "https://api.nasa.gov/planetary/apod?api_key=zwJevs0xILNvjEc3YPypBKUixqgGd2KtDHRN7eDQ"
  //  ) .then((res) => setData(res.data));
  //}, []);

  return (
    <div className='App'>
      {boolean ? (<Header title="NASA App"/>) : (<p>Sin Header</p>) }
      {isLoading ? <Spinner /> : 
        <div className='container-picture-card'>
          <PictureCard data={data} />
        </div>
      }
      {boolean ? <p>Boolean is true</p> : <p>Boolean is false</p>}
    </div>
  )
}

export default App
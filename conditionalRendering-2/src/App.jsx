import './App.css';
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import axios from 'axios';

//Renderizar de forma condicional a partir de la respuesta de una API

//BASE_URL: https://omdbapi.com/
// https://omdbapi.com/  + ?t + pelicula + &apikey=
// https://omdbapi.com/?t=speed&apikey=12480dc5
// https://omdbapi.com/?t=${movieInput}&apikey=12480dc5
//12480dc5


//Components
import Header from "./components/Header/Header";
import CardMovie from './components/CardMovie/CardMovie';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [movieData, setMovieData] = useState({});

  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(inputText){
      // axios(`https://omdbapi.com/?t=${inputText}&apikey=12480dc5`).then((res) => 
      //   console.log(res.data)
      // )
      //UTILIZAREMOS ASYNC/AWAY
      const getMovies = async () => {
        try {
          const resp = await axios(
            `https://omdbapi.com/?t=${inputText}&apikey=12480dc5`
          );
          //console.log(resp.data)
          setMovieData(resp.data);
        } catch (error) {
          //  Handle Error Here
          console.log(error)
        }
      getMovies();
      //Limpiamos el input despues de la busqueda
      setInputText("");
      };
    }
    console.log(inputText);
  }

  return (
    <div className="App">
      <Header />
      <form className="Form" onSubmit={onSubmit}>
        <TextField 
          variant="outlined"  
          placeholder="Search Movie" 
          className="TextField"
          value={inputText}
          onChange={onChange}
        />
        <button className="btn">Search Movie</button>
      </form>
      {movieData.imdbID ? <CardMovie movieData={movieData}/> : null}
    </div>
  )
}

export default App;
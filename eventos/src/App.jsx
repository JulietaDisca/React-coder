import React from 'react';
import {useState} from 'react';
import './App.css';
import axios from "axios";

//COMPONENTS
import Header from './componentes/Header/Header';
import CardUser from './componentes/CardUser/CardUser';

//MUI
import { TextField, Button } from '@mui/material';

const App = () => {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  console.log(userData)

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    const userInput = value.toLowerCase().replace(/ /g, ""); //sanitizamos la variable de espacios
    if(userInput){
      axios(`https://api.github.com/users/${userInput}`).then((res) =>
        setUserData(res.data)
      ).catch((error) => console.log(error));
    }
    setValue(""); //Volver el estado de value a como el principio
  };

  return (
    <div className='App'>
      <Header />
      <Button 
        variant="contained" 
        onClick={() => alert("Hiciste click")}>
        Click
      </Button>
      <form className='Form' onSubmit={onSubmit}>
        <TextField 
          className='TextField' 
          placeholder='Buscar usuario' 
          variant="outlined"
          value= {value}
          onChange={onChange}
        />
        <Button className='btn' variant="contained" type='submit' >
          Buscar
        </Button>
      </form>

      {error ? <p>Hubo un error en la llamada</p> : null}

      {userData.id ? <CardUser userData = {userData} /> : null }
    </div>
  );
};

export default App;
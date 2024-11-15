import {useState} from 'react';
import './App.css';

//MUI
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';

//TERNARY OPERATOR
// contidition ? exprIfTrue : exprIfFalse

//Podemos pintar de forma condicional un elemento jsx
//Podemos pintar de forma conditional un componente
//Podemos pintar de forma conditional un texto

//COMPONENTS
import NotEnabled from "./components/NotEnabled";
import Enabled from "./components/Enabled";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false); //boolean

  const enabledHandler = () => {
    setIsEnabled(!isEnabled);
  }

  return (
    <div className={isEnabled ? 'App-dark' : 'App-light'}>
      <div className={isEnabled ? 'container-dark' : 'container-light'}>
        <h1 style={{ color: isEnabled ? "white" : "black" }}>Conditional Rendering</h1> 

        <div style={{ margin: "20px"}}>
          <IconButton onClick={enabledHandler}>
            {isEnabled ? <LightModeIcon sx={{ color: "green" }}/> : <DarkModeIcon sx={{ color: "red" }}/>}
          </IconButton>
        </div>

        {/* <button 
          className={isEnabled ? 'btn-active-dark' : 'btn-active-light'} 
          onClick={enabledHandler}
        >
          {isEnabled ? "Desactivate" : "Activate"}
        </button> */}

        {isEnabled ? (
          <p style={{color: "white"}}>Está activado</p>
        ) : (
          <p style={{color: "black"}}>No esta activado</p>
        )}

        {isEnabled ? <Enabled /> : <NotEnabled/>}

        <div className={isEnabled ? 'container-paragraph-dark' :'container-paragraph-light'}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi a, neque beatae reprehenderit praesentium iste iure quaerat sed expedita! Illum, officia voluptatum impedit consequuntur molestiae cupiditate optio id sed!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi a, neque beatae reprehenderit praesentium iste iure quaerat sed expedita! Illum, officia voluptatum impedit consequuntur molestiae cupiditate optio id sed!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi a, neque beatae reprehenderit praesentium iste iure quaerat sed expedita! Illum, officia voluptatum impedit consequuntur molestiae cupiditate optio id sed!
          </p>
        </div>
        <div className={isEnabled ? 'container-paragraph-dark' :'container-paragraph-light'}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi a, neque beatae reprehenderit praesentium iste iure quaerat sed expedita! Illum, officia voluptatum impedit consequuntur molestiae cupiditate optio id sed!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi a, neque beatae reprehenderit praesentium iste iure quaerat sed expedita! Illum, officia voluptatum impedit consequuntur molestiae cupiditate optio id sed!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi a, neque beatae reprehenderit praesentium iste iure quaerat sed expedita! Illum, officia voluptatum impedit consequuntur molestiae cupiditate optio id sed!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;
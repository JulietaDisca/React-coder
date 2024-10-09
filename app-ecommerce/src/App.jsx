import "./App.css";

const App = () => {
  // JSX => JAVASCIPT EXTENSION
  const name = "Daniel Di Salvo";
  let city = "CABA";

  const styles = {
    span: {
      backgroundColor: "red",
      padding: "15px",
      fontSize: "25px",
    }
  }

  return (
    /*No se pueden retornar 2 elementos sin estar encapsulados antes*/
    /*Etiqueta vasia tambien cumple la funcionalidad de un div que encapsula*/
    /*Para trabajar JS dentro de JSX usamos las llaves {}*/
    <>
      <div className="App">
        <h1>Bienvenido usuario</h1>
        <span style={styles.span} >Su nombre es {name}</span>
        <p className="pred">Su ciudad de residencia es: {city}</p>
        <p>Numero: {60 / 2}</p>
        <p>{name.toUpperCase()}</p>
        <p>{city.length}</p>
      </div>
    </>
  );
};

export default App; /*Va a ser visible la función App*/

/*
DECLARADAS

function foo() {
  ...cuerpo de la función
}

***************************

  EXPRESION FUNCIONAL

  const foo = () => {
    ...cuerpo de la función
  }
*/
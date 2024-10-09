import "./Header.css";

import logo from "../../assets/logo_coder.png";

const Header = (props) => { //Las props contienen objetos 
  return(
    <div 
        className="Header"
        style={{
            backgroundColor: props.bgColor,
            border: `10px solid ${props.borderColor}`
        }}
    >
        <img src={logo} alt="logo"/>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>

    </div>
  )
};

export default Header;
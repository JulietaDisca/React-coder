import "./Header.css"
import logo from "../../assets/NASA_logo.png";

const Header = ({ title }) => {
  return (
    <div className="Header">
        <h1>{title}</h1>
        <img src={logo} alt="NASA logo" width={200}/>
    </div>
  );
}

export default Header
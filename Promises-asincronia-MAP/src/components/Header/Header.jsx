import "./Header.css";
import img from "../../assets/github-logo.png"

const Header = ({ title }) => {
    return(
        <div className='Header'>
            <h1>{title}</h1>
            <div className="img"><img src={img} alt="Github Logo"/></div>
        </div>
    );
};

export default Header;
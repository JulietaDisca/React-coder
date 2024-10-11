import "./Header.css";

import img from "../../assets/RickandMorty.jpeg";

const Header = () => {
    return (
        <div className="Header">
            <img src={img} alt=""  width={500}/>
        </div>
    )
}

export default Header

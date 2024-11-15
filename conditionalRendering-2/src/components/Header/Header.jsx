import './Header.css';
import img from "./movie_banner.jpeg";

const Header = ({ title }) => {
    return (
        <div className='Header'>
            <img src={img} alt="logo-banner" />
        </div>
    );
};

Header.defaultProps = {
    title: "Movie SearchApp",
};

export default Header;
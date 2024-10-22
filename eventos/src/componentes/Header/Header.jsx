import './Header.css';

import image from '../../assets/LOGO_GitHub.png';

const Header = () => {
  return (
    <div className='Header'>
        <img className='img' src={image} alt="logo-github" width="300"/>
    </div>
  )
}

export default Header;
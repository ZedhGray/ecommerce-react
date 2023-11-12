import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header__container">
      <h1 className="header__title">
        <Link className='header__title-icon' to="/">e-commerce</Link>
      </h1>
      <nav>
        <ul className="header__options-container">
          <li>
            <Link className='header__option-auth' to="/login">
              <i className="bx bxs-user"></i>
            </Link>
          </li>
          <li>
            <Link className='header__option-shop' to="/purchases"><i className='bx bxs-box'></i></Link>
          </li>
          <li>
            <Link className='header__option-cart' to="/cart"><i className='bx bxs-cart-alt'></i></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

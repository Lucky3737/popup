// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log()
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
          alt="website logo"
          className="logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button type="button" className data-testid="hamburgerIconButton">
            <GiHamburgerMenu className="icons" />
          </button>
        }
      >
        {close => (
          <div>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul>
              <li className="home">
                <Link to="/" onClick={() => close()}>
                  <AiFillHome className="icons" />

                  <h1>Home</h1>
                </Link>
              </li>
              <li className="home">
                <Link to="/about" onClick={() => close()}>
                  <BsInfoCircleFill className="icons" />
                  <h1>ABout</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Header

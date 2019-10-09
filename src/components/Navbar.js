import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo/white-logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className=""
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="">
          <div className="">
            <Link to="/" className="" title="Logo">
              <img src={logo} alt="AEM" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="">
              <Link className="" to="/about">
                About
              </Link>
              <Link className="" to="/photography">
                Photography
              </Link>
              <Link className="" to="/contact">
                Contact
              </Link>
              <Link className="" to="/contact/examples">
                Form Examples
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

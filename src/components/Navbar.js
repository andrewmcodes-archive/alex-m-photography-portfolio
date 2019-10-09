import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ''
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: ''
          })
          : this.setState({
            navBarActiveClass: 'nav-block'
          })
      }
    )
  }

  render () {
    return (
      <nav className='nav' role='navigation' aria-label='main-navigation'>
        <div className='nav-brand-container'>
          <Link to='/' className='nav-brand-text' title='Logo'>
            AEM Photography
          </Link>
        </div>
        <div className='nav-btn-container'>
          <button
            className='nav-btn'
            data-target='navMenu'
            onClick={() => this.toggleHamburger()}
          >
            <svg
              class='nav-btn-svg'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>

        <div
          id='navMenu'
          className={`nav-list-container ${this.state.navBarActiveClass}`}
        >
          <div className='nav-list'>
            <Link className='nav-list-item' to='/about'>
              About
            </Link>
            <Link className='nav-list-item' to='/photography'>
              Photography
            </Link>
            <Link className='nav-list-item' to='/contact'>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

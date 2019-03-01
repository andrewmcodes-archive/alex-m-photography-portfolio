import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.closeNavbar = this.closeNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  closeNavbar() {
    if (this.state.collapsed === true) {
      this.toggleNavbar()
    }
  }

  toggleNavbar() {
    const el = document.getElementById('nav')
    el.classList.toggle('block')
    el.classList.toggle('hidden')
  }

  render() {
    return (
      <nav className="bg-white shadow-md z-10 absolute w-full md:mb-16">
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto ">
          <Link
            to="/"
            className="flex items-center no-underline text-blue-darker p-4 md:p-8 sm:hover:text-blue-darker antialiased">
            <span className="font-semibold text-xl tracking-wide">
              AEM Photography
            </span>
          </Link>
          <button
            className="mr-4 sm:mr-8 block sm:hidden border border-blue-darker hover:bg-blue-darker hover:text-grey-lightest focus:bg-blue-darker focus:text-grey-lightest flex items-center px-3 py-2 rounded text-blue-darker"
            onClick={this.toggleNavbar}>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title> Menu </title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div
            id="nav"
            className="text-center hidden sm:flex sm:items-center w-full sm:w-auto">
            <div className="text-sm font-semibold">
              <Link
                to="/"
                className="antialiased block py-6 sm:hover:bg-grey-lightest sm:hover:text-blue-darkest sm:inline-block sm:mt-0 sm:mr-12 no-underline text-blue-darker shadow-inner sm:shadow-none"
                onClick={this.toggleNavbar}>
                Home
              </Link>
              <Link
                to="/about"
                className="antialiased block sm:inline-block py-6 sm:hover:bg-grey-lightest sm:hover:text-blue-darkest sm:mt-0 sm:mr-12 no-underline text-blue-darker shadow-inner sm:shadow-none"
                onClick={this.toggleNavbar}>
                About
              </Link>
              <Link
                to="/blog"
                className="antialiased block sm:inline-block py-6 sm:hover:bg-grey-lightest sm:hover:text-blue-darkest sm:mt-0 sm:mr-12 no-underline text-blue-darker shadow-inner sm:shadow-none"
                onClick={this.toggleNavbar}>
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar

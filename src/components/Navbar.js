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
    console.log(window.outerWidth)
    if (window.outerWidth <= 589) {
      el.classList.toggle('shadow-inner')
      const el2 = document.getElementById('navbar')
      el2.classList.toggle('bg-white')
      const el3 = document.getElementById('nav-brand')
      el3.classList.toggle('text-blue-700')
      const el4 = document.getElementById('nav-btn')
      el4.classList.toggle('border-blue-700')
      el4.classList.toggle('text-blue-700')
    }
  }

  render() {
    return (
      <nav id="navbar" className="z-10 absolute w-full md:mb-16">
        <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto ">
          <Link
            to="/"
            id="nav-brand"
            className="flex items-center no-underline text-white p-4 md:p-8 sm:hover:text-white antialiased">
            <span className="font-semibold text-xl tracking-wider">
              AEM Photography
            </span>
          </Link>
          <button
            id="nav-btn"
            className="mr-4 sm:mr-8 block sm:hidden border border-white hover:bg-white hover:text-blue-900 focus:bg-blue-700 focus:text-gray-100 flex items-center px-3 py-2 rounded text-white"
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
                className="antialiased block py-6 sm:inline-block sm:mt-0 sm:mr-12 no-underline text-blue-700 sm:text-white"
                onClick={this.toggleNavbar}>
                Home
              </Link>
              <Link
                to="/about"
                className="antialiased block sm:inline-block py-6 sm:mt-0 sm:mr-12 no-underline text-blue-700 sm:text-white"
                onClick={this.toggleNavbar}>
                About
              </Link>
              <Link
                to="/blog"
                className="antialiased block sm:inline-block py-6 sm:mt-0 sm:mr-12 no-underline text-blue-700 sm:text-white"
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

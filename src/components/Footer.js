import React from 'react'
import Facebook from '../img/social/facebook-icon'
import Twitter from '../img/social/twitter-icon'
import Instagram from '../img/social/instagram-icon'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="p-4 sm:p-8 bg-black">
        <div className="w-full flex flex-col sm:flex-row-reverse justify-between">
          <div className="mx-auto sm:mx-0 w-1/2 flex justify-between self-center sm:justify-end mb-4 sm:mb-0">
            <a title="facebook" href="https://facebook.com" className="px-4">
              <Facebook />
            </a>
            <a title="twitter" href="https://twitter.com" className="px-4">
              <Twitter />
            </a>
            <a title="instagram" href="https://instagram.com" className="px-4">
              <Instagram />
            </a>
          </div>
          <div className="text-grey-lightest w-full mx-auto text-center self-center sm:text-left text-sm sm:text-xs">
            <p className="mb-2">© 2018 Alex McCutcheon</p>
            <p className="">
              Designed and developed by{' '}
              <a
                href="https://andrewmason.me"
                title="Andrew Mason"
                className="text-grey-lightest">
                Andrew Mason
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

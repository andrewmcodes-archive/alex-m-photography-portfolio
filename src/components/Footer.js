import React from 'react'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="p-4 sm:p-8 bg-grey-lighter shadow-inner">
        <div className="w-full flex flex-col sm:flex-row-reverse justify-between">
          <div className="mx-auto sm:mx-0 w-1/2 flex justify-between self-center sm:justify-end mb-4 sm:mb-0">
            <a title="facebook" href="https://facebook.com" className="px-4">
              <img
                className=""
                src={facebook}
                alt="Facebook"
                style={{ width: '1.5em', height: '1.5em' }}
              />
            </a>
            <a title="twitter" href="https://twitter.com" className="px-4">
              <img
                className=""
                src={twitter}
                alt="Twitter"
                style={{ width: '1.5em', height: '1.5em' }}
              />
            </a>
            <a title="instagram" href="https://instagram.com" className="px-4">
              <img
                className=""
                src={instagram}
                alt="Instagram"
                style={{ width: '1.5em', height: '1.5em', color: 'blue' }}
              />
            </a>
          </div>
          <div className="w-full mx-auto text-center self-center sm:text-left text-sm sm:text-xs">
            <p className="mb-2">© 2018 Alex McCutcheon</p>
            <p className="">
              Designed and developed by{' '}
              <a
                href="https://andrewmason.me"
                title="Andrew Mason"
                className="link">
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

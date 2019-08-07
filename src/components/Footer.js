import React from 'react'
import { FaRegEnvelope, FaInstagram } from "react-icons/fa";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="p-4 sm:p-8 bg-indigo-600">
        <div className="w-full flex flex-col sm:flex-row-reverse justify-between">
          <div className="mx-auto sm:mx-0 w-1/2 flex justify-between self-center sm:justify-end mb-4 sm:mb-0">
            <a title="email" href="mailto:alex.mcc95@gmail.com" className="px-4">
              <FaRegEnvelope className="text-3xl text-white" />
            </a>
            <a title="instagram" href="https://www.instagram.com/aemphoto.graphy/" className="px-4" taget="_blank">
              <FaInstagram className="text-3xl text-white" />
            </a>
          </div>
          <div className="text-gray-100 w-full mx-auto text-center self-center sm:text-left text-sm sm:text-xs">
            <p className="mb-2">© 2018 Alex McCutcheon</p>
            <p className="">
              Designed and developed by{' '}
              <a
                href="https://andrewmason.me"
                title="Andrew Mason"
                className="text-gray-100">
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

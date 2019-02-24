import React from 'react'
import PropTypes from 'prop-types'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-wrap w-full">
    {gridItems.map(item => (
      <div className="w-1/2">
        <div key={item.text} className="m-2 rounded bg-white shadow-md">
          <div className="p-4">
            {/* <div className="text-center">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div> */}
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid

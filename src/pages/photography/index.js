import React from 'react'

import Layout from '../../components/Layout'
import Album from '../../components/Album'

export default class PhotographyIndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <div className=''>
          <h1 className=''>Latest Stories</h1>
        </div>
        <section className=''>
          <div className=''>
            <div className=''>
              <Album />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

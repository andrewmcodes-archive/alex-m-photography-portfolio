import React from 'react'

import Layout from '../../components/Layout'
import Album from '../../components/Album'
import SectionWrapper from '../../components/SectionWrapper'

export default class PhotographyIndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <SectionWrapper>
          <section className='w-full'>
            <div className=''>
              <h1 className='text-gray-100'>Photography</h1>
            </div>
            <div className=''>
              <div className=''>
                <Album />
              </div>
            </div>
          </section>
        </SectionWrapper>
      </Layout>
    )
  }
}

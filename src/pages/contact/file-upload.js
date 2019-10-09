import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode (data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render () {
    return (
      <Layout>
        <section className=''>
          <div className=''>
            <div className=''>
              <h1>File Upload</h1>
              <form
                name='file-upload'
                method='post'
                action='/contact/thanks/'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type='hidden' name='form-name' value='file-upload' />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name='bot-field' onChange={this.handleChange} />
                  </label>
                </div>
                <div className=''>
                  <label className='' htmlFor={'name'}>
                    Your name
                  </label>
                  <div className=''>
                    <input
                      className=''
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className=''>
                  <div className=''>
                    <label className=''>
                      <input
                        className=''
                        type='file'
                        name='attachment'
                        onChange={this.handleAttachment}
                      />
                      <span className=''>
                        <span className=''>Choose a file…</span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className=''>
                  <button className='' type='submit'>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

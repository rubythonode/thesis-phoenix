import React, { PropTypes } from 'react'

// NOTES
// add 'invalid' class to input to give it a red background
// add error text to the errors div and toggle the 'hidden' property
// add the 'disabled' property to inputs that can't be editted if page is static

class ImageTray extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contentId: this.props.data.contentId,
      url: this.props.data.url,
      alt: this.props.data.alt,
      isValid: true
    }

    this.urlChange = this.urlChange.bind(this)
    this.altChange = this.altChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  urlChange (event) {
    this.setState({url: event.target.value})
  }

  altChange (event) {
    this.setState({alt: event.target.value})
  }

  onSave () {
    this.props.onSubmit(this.state)
  }

  previewImageStyle () {
    return {
      backgroundImage: `url(${this.state.url})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 150,
      border: '10px solid white',
      boxShadow: '0px 0px 1px #e9e9e9'
    }
  }

  render () {
    return (
    <div className="tray-container">
      <div className="tray-wrap">
        <div className="tray-title">
          Image URL
        </div>
        <input type="hidden" value="{this.props.data.contentId}" />
        <div className="thesis-field-row">
          <div style={this.previewImageStyle()}></div>
        </div>
        <div className="thesis-field-row">
          <label>
            <span>Image URL</span>
            <input type="text" placeholder="http://placekitten.com/200/300" value={this.state.url} onChange={this.urlChange} />
          </label>
        </div>
        <div className="thesis-field-row">
          <label>
            <span>Alt Text</span>
            <input type="text" placeholder="Describe the image" value={this.state.alt} onChange={this.altChange} />
          </label>
        </div>
        <div className="thesis-field-row errors" hidden={this.state.isValid}>
          {/* Errors go here. Toggle the hidden property depending on error count. */}
        </div>
        <div className="thesis-field-row cta">
          <button className="thesis-tray-cancel" onClick={this.props.onCancel}>
            Cancel
          </button>
          <button className="thesis-tray-save" onClick={this.onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
    )
  }
}

export default ImageTray

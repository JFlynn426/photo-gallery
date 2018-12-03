import React, { Component } from 'react'
import PhotoJson from './PhotoJson'

class PhotoDetail extends Component {
  render() {
    const subject = this.props.match.params.subject
    const number = this.props.match.params.number
    return (
      <div>
        <div>
          <h2>{PhotoJson[subject].photos[number].title}</h2>
          <img
            className="photo-detail"
            src={PhotoJson[subject].photos[number].imageURL}
          />
        </div>
        <a href={PhotoJson[subject].photos[number].sourceURL}>
          Original Source
        </a>
      </div>
    )
  }
}

export default PhotoDetail

import React, { Component } from 'react'
import PhotoJson from './PhotoJson'
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    const subject = this.props.match.params.subject

    return (
      <>
        <h1>{PhotoJson[subject].title}</h1>
        <h3>{PhotoJson[subject].description}</h3>
        <ul className="photo-list">
          {PhotoJson[subject].photos.map((photo, index) => {
            return (
              <li className="photographs">
                <Link to={`/${subject}/${index}`}>
                  <p>{photo.title}</p>
                  <img src={photo.imageURL} />
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default PhotoList

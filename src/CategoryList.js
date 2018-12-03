import React, { Component } from 'react'
import PhotoJson from './PhotoJson'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    return (
      <ul className="photo-list">
        {Object.keys(PhotoJson).map(subject => {
          return (
            <li className="cat-title" key={subject}>
              <Link to={`/${subject}`}>{PhotoJson[subject].title}</Link>
              <img src={PhotoJson[subject].photos[0].imageURL} />
              <p>{PhotoJson[subject].description}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CategoryList

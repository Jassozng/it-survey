import { React, useState } from 'react'
import './Card.css'

const Card = ({ title, imageUrl, votes }) => {
  return (
    <div className="card-container">
        <b>{ title }</b>
        <img src={imageUrl} lang="Language Image" />
        <div className="radio-div">
          <input name="language-vote" id={ title } type="radio" className="radio-input" value={ votes } /> I like it
        </div>
    </div>
  )
}

export default Card
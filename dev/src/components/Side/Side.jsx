import React from 'react'
import languageList from '../language-list.json';

import './Side.css'

const Side = ({ surveyResults }) => {

  return (
    <aside>
      <h1>Survey Results</h1>
      {
        surveyResults.map((value) => {
          return <h2>{ `${ value.name }: ${ value.votes }` }</h2>
        })
      }
    </aside>
  )
}

export default Side
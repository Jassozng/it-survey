import './Survey.css';
import Card from '../Card/Card';
import { React, useState } from 'react';
import handleSubmit from './hooks/handleSubmit';
import languageList from '../language-list.json';

const Survey = ({ results, setResults }) => {
  return (
    <form className="survey-section" onSubmit={ (event) => { setResults(handleSubmit(event, results)) } }>
        <h1>Which is your favorite programming language?</h1>
        <div className="cards-container">
            {
                languageList.map(({ name, imagePath, votes }) => {
                    return ( <Card title={ name } imageUrl={ imagePath } votes={ votes } /> )
                })
            }
        </div>
        <input type="submit" className="vote-button" value="Vote" />
    </form>
  )
}

export default Survey
import { React, useState } from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Side from '../Side/Side.jsx'
import Survey from '../Survey/Survey.jsx'
import './App.css'
import languageList from '../language-list.json';


function App() {
  const [results, setResults] = useState(languageList);

  return (
    <>
      <Header />
      <section className="App">
        <Survey results={ results } setResults={ setResults }/>
        <Side surveyResults={ results } />
      </section>
      <Footer />
    </>
  )
}

export default App
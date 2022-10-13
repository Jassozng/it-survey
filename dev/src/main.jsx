import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import ReloadPrompt from './components/ReloadPrompt/ReloadPrompt.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReloadPrompt />
    <App />
  </React.StrictMode>
)

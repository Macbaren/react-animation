import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const characters = [
  { name: 'Luk', side: 'light' },
  { name: 'Obivan', side: 'light' },
  { name: 'Yoda', side: 'light' },
  { name: 'Palpatin', side: 'dark' },
  { name: 'Darth', side: 'dark' },
]

ReactDOM.render(
  <App list={characters} side="light" />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

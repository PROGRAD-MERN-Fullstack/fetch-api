import React from 'react'
import './App.css'
import FetchComponent from './Components/FetchComponent/FetchComponent'
import TextComponent from './Components/TextComponent/TextComponent'

function App() {

  return (
   <React.Fragment>
    <TextComponent/>
    <FetchComponent/>
   </React.Fragment>
  )
}

export default App

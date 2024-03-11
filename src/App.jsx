import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <> 
        <Route path="/" exact component={HomePageContent} />
        <Route path="/about" component={AboutPage} />
    </>
  )
}

export default App

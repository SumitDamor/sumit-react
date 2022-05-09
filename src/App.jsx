import React from 'react'
import Pokemon from './Pokemon'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Route , Routes, Switch } from 'react-router-dom';
import Services from './Services';
import NavBar from './NavBar';
import Search from './Search';


const App = () => {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Pokemon}/>
      <Route exact path='/services' component={Services}/>
      <Route path='/about' component={About}/>
      <Route path='/contact/:fname/:listNum' component={Contact}/>
      <Route path='/search' component={Search}/>
    </Switch>
    </>

  )
}

export default App;
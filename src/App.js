import React from 'react'
import '../src/styles/App.css'
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';

import About from './pages/About';
import Posts from './pages/Posts';

function App (){
  return (
    <BrowserRouter>
      <Navbar/>
    <Switch>
           <Route path="/posts">
        <Posts/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Redirect to='/posts'/>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
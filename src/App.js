import React from 'react'
import '../src/styles/App.css'
import { BrowserRouter} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';



function App (){
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}
export default App;

//2-23-15
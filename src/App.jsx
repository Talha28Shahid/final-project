import React from 'react';
import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import {Outlet} from 'react-router-dom'
import Detaildata from './detaildata.jsx';

function App() {
  

  return (
      < >
     <Header/>
     <Outlet/>
     <Footer/> 
      </>
  )
}

export default App

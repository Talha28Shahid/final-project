import './header.css'
import logo from './assets/logo.png'
import searchicon from './assets/magnifyingglass.svg'
import { NavLink } from 'react-router-dom'




function Header() {
    return (
        
           <div className='header'>
           <img src={logo} alt="logo" className='logo'/>
           <p className='logotitle'><b>TopUniversities</b></p>
           <ul className='list'>
            <li className='listitems'><NavLink to="/Unidata">Universities</NavLink></li>
            <li className='listitems'>Scholarships</li>
            <li className='listitems'>Blogs</li>
            <li className='listitems'>Aboutus</li>
            <li className='listitems'>Contact us</li>
           </ul>
           <img src={searchicon} alt="searchicon" className="magnifyingglass"/>
           <div className="buttons">
              <button className="button1" >LOGIN</button>
              <button className="button2">SIGN UP</button>

              
           </div>
           </div>

    )
  }
  export default Header
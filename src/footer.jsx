import './footer.css'
import facebook from './assets/facebook-f.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin-in.svg'
import twitter from './assets/twitter.svg'
import youtube from './assets/youtube.svg'
import arrow from './assets/arrow.svg'


function Footer() {
  return(
    
    <div className="footer">
    <ul className='footerlist'>
            <li>Universities</li>
            <li>Scholarships</li>
            <li>Blogs</li>
            <li>Aboutus</li>
            <li>Contact us</li>
           </ul>
           <ul className='sociallogoslist'>
            <li><img src={facebook} alt="facebook" className='sociallogos' /></li>
            <li><img src={instagram} alt="instagram" className='sociallogos' /></li>
            <li><img src={linkedin} alt="linkedin"  className='sociallogos'/></li>
            <li><img src={twitter} alt="twitter" className='sociallogos' /></li>
            <li><img src={youtube} alt="youtube" className='sociallogos' /></li>
           </ul>
           <p className='footerparagraph'>© QS Quacquarelli Symonds Limited 1994 - 2024. All rights reserved.</p>
           <h3 className='h3headind'>Subscribe to Our Newsletter</h3>
           <input type="text" className='inputfield' placeholder='ENTER YOUR EMAIL'/>
           <div className="buttonarrow">
           <button className='fieldbutton'>
            <img src={arrow} alt="arrow" className='arrow' />
           </button>
           </div>
           
           
    </div>
    
  )
}

export default Footer
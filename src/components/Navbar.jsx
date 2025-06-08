import './navbar.scss'
import linkedin from '../assets/social media/linkedin white.svg'
import github from '../assets/social media/github white.svg'
import facebook from '../assets/social media/facebookwhite.svg'
import instagram from '../assets/social media/instagrampink.svg'
const Navbar = () => {
  return (
    <div className='navbar' >
        <div className="nav-hero">
            <div className="name-logo">
                <p>Clerance</p>
            </div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/clerance-paile" target="_blank"><img src={linkedin} width={25} alt="" /></a>
                <a href="https://github.com/CleranceDev" target="_blank"><img src={github} width={25} alt="" /></a>
                <a href="https://www.facebook.com/6glocktoss/" target="_blank"><img src={facebook} width={25} alt="" /></a>
                <a href=""><img src={instagram} width={25} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
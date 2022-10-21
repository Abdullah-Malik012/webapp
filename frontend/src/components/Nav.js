import './Nav.css';
import logo from './logot.png'

function Navbar() {
  

  return (
    <>
      <nav className='Nav'>
        <div className='Navcontainer'>
          <a href='/' className='logo'>
            <img src = {logo} width = "15%"/>
         
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

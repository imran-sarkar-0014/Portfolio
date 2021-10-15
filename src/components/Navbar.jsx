import React from 'react'
import { useLocation, Link } from 'react-router-dom'


const Navbar = () => {

    const location = useLocation()
    const { pathname } = location



    return (
        <nav className='nav'>
            <h2 className="heading">Portfolio</h2>
            <div className="nav-container">
                <Link to='/' className={`nav-item ${pathname === '/' && 'active'}`}>
                    <p>About</p>
                </Link>
                <Link to='/skills' className={`nav-item ${pathname === '/skills' && 'active'}`}>
                    <p>Skills</p>
                </Link>
                <Link to='/projects' className={`nav-item ${pathname === '/projects' && 'active'}`}>
                    <p>Projects</p>
                </Link>
                <Link to='/contact' className={`nav-item ${pathname === '/contact' && 'active'}`}>
                    <p>Contact</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar

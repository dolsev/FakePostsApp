import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
    return (
        <div className='navbar'>
        <button onClick={()=>{logout()}}>Sign Out</button>
        <div className='navbar__links'>
          <Link to='/posts'>Posts</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
    )
}

export default Navbar

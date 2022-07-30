import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { async } from '@firebase/util'

const Nav = () => {
  // const {createUser} = UserAuth()
  const {user} = UserAuth()
  const {logOut} = UserAuth()
  // console.log('user',user)
  const handleLogout = async(event)=>{
    try{
      await logOut()
    }catch(error){
      console.log('error', error)
    }
  }
  return (
    <nav className='flex items-center border-2 m-0 pl-10 pr-10 pt-2 pb-2 w-full sticky left-0 top-0 bg-white'>
        <Link className='mr-auto' to="/"><div className='text-5xl mr-auto font-nunito'>lizwe<span className='text-orange-600'>js</span></div></Link>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
        {/* <p className='text-orange-600 mr-2 font-nunito'>{user.email}</p> */}
        {user? <Link to="/login"><button onClick={handleLogout} className='bg-none rounded-sm mr-5 border-[1px] border-orange-600 w-[5rem]'>Logout</button></Link> : <Link to="/login"><button className='bg-none rounded-sm mr-5 border-[1px] border-orange-600 w-[5rem]'>Login</button></Link>}
        <FontAwesomeIcon icon={faCircleHalfStroke} size="2x"/>
    </nav>
  )
}

export default Nav
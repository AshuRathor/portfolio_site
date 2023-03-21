import React from 'react'
import "./Navbar/Navbar.css"
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navabar = () => {

  const close = useRef()
  const bar = useRef()
  const ul = useRef()
  const [barClicked, setBarClicked] = useState(true)
  const closeFunction = ()=>{
    setBarClicked(true)
    bar.current.style.display = "block"
    close.current.style.display = "none"
    ul.current.style.transform = "translateX(-200%)"

  }
  const barFunction = ()=>{
    setBarClicked(false)
    bar.current.style.display = "none"
    close.current.style.display = "block"
    ul.current.style.transform = "translateX(0%)"
  }
  // const 
  return (

    <div style={{position:"fixed", width:"100%"}}>
          <button onClick={barFunction} ref = {bar} className='bar'><i class="fa-solid fa-bars"></i></button>
        <ul className='ul' ref={ul} style={{display:"flex"}}>
          <button onClick={closeFunction} ref = {close} className='close'><i class="fa-solid fa-xmark"></i></button>
            <li onClick={closeFunction} id='l1'><a className='nav_a' to="#" style={{listStyle:"none", textDecoration:"none", color:"white"}}> Home</a></li>
            <li onClick={closeFunction} id='l2'><a className='nav_a' href="#skillSection" style={{listStyle:"none", textDecoration:"none", color:"white"}}> Skills</a></li>
            <li onClick={closeFunction} id='l3'><a className='nav_a' href="#hobbySection" style={{listStyle:"none", textDecoration:"none", color:"white"}}> Hobbies</a></li>
            <li onClick={closeFunction} id='l4'><Link className='nav_a' to="/explore" style={{listStyle:"none", textDecoration:"none", color:"white"}}> Explore</Link></li>
        </ul>
        
    </div>
  )
}

export default Navabar
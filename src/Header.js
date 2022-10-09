import React, { useEffect, useState } from 'react'
import './Header.css'
const Header = () => {
    const [show,setShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                          setShow(true)
            }else{
                setShow(false)
            }
        })
      
    },[])
  return (
    <div className={`header ${show && "header-black"} `} >
        <img  className='header-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="" />
        <img  className='header-user-icon' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="" />
    </div>
  )
}

export default Header
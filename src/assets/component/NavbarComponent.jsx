import React, {useEffect, useState} from 'react'
import '../css/NavbarComponent.css'
import { SlBasket } from "react-icons/sl";
import exampleimg from '../img/productExample.jpg'

function NavbarComponent() {
  return (
    <> 
        <header>
            <div className="navbar">
                <div className="navbar-brand">
                    <h1>Toko <span>Jaya</span></h1>
                </div>
                <div className="navbarlink">
                    <a href="./Cart">{<SlBasket size={20}/>}</a>
                    <a href=""><img src={exampleimg} alt="" style={{ maxHeight:'80px', border:'1px silid black', borderRadius:"100px", margin:"-25px" }} /></a>
                </div>
            </div>

            <div className="navLinks">
                <a href=''>Women</a>
                <a href=''>Man</a>
                <a href=''>Electronics</a>
                <a href=''>Jewelery</a>
            </div>
        </header>
        
        <hr className='breakline' style={{ margin:"25px", marginTop:'5px' }}/>
    </>
  )
}

export default NavbarComponent
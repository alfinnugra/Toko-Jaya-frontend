import React, {useState, useEffect} from 'react'
import productExample from '../img/productExample.jpg'
import '../css/CartList.css'
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
function CartList() {
    const [cart, setCart] = useState([])

    const getCart = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/carts')
            setCart(res.data)
            console.log(res.data)
        } catch(e) {
            console.log(e.message)
        }
    }

    useState(() => {
        getCart()
    }, [])
  return (
    <>
    <div className="links">
        <a href="/"><FaArrowLeft /> Continue Shopping</a>
    </div>
    <div className="cart">
        <h1>My Cart</h1>
        <hr />
        <div className="cartCard">
            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' style={{ borderRadius: '10px' }} alt="" />
            <div className="content">
                <h1 className='judul'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                <p className='desk'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <h1 className='price'>$1000</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartList
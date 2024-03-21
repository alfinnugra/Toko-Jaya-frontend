import React, {useState, useEffect, Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import imgExample from '../img/productExample.jpg'
import '../css/DetailsProduct.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";

function DetailsProduct() {
    const [productDetails, setProduct] = useState([])
    const {id} = useParams();
    const getDetailsProduct = async () => {
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
            console.log(res.data)
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getDetailsProduct();
    }, [])

    const addToCart = () => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        currentCart.push(productDetails);
        localStorage.setItem('cart', JSON.stringify(currentCart));
    }
  return (
    <>
    <div className="mb-3 m-4 detailsProduct" style={{maxWidth: '540px;'}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img className="imgProduct" src={productDetails.image}  alt="" />
            </div>
                <div className="col-md-8 ml-5">
                    <div className="card-body">
                        <h5 className="card-title">{productDetails.title}</h5>
                        <p className="card-text">{productDetails.description}</p>
                        <h1 className='card-price'>${productDetails.price}</h1>
                            {productDetails.rating && (
                                <>
                        <p className="card-text">
                        <IoStarSharp style={{ color: "#edcf5d" }} />
                         <span  style={{ margin:"5px", marginTop: "10px" }}>{productDetails.rating.rate}</span>
                         </p>
                         </>
                            )}
                </div>
            </div>
        </div>
    </div>
        )
    </>
  )
}

export default DetailsProduct
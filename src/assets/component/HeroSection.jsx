import React, {useState, useEffect} from 'react'
import '../css/HeroSection.css'
import productExample  from '../img/productExample.jpg'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


function HeroSection() {
    const [product, setProduct] = useState([])

    const getProduct = async  () => {
        try{
            const res = await axios.get('https://fakestoreapi.com/products/')
            setProduct(res.data);
            console.log(res.data)
        } catch (e){
            console.log(e.message)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])
  return (
      <>
      <div className="titleHeroSection">
            <h1>Recomend For You</h1>
        </div>
        <div className="heroSection">
        {
            product.map((data, index) => {
                return(
                    <>
            <a href={`/DetailsProduct/${data.id}`} style={{ textDecoration:"none", color:"#010101" }}>
                <div className="card" style={{ width: '18rem', maxHeight: "450px" }} key={index} >
                        <img src={data.image} className="card-img-top" style={{ maxHeight: '200px', maxWidth:'300px'  }} alt="..." />
                    <div className="card-body">
                            <h5 className="card-title fs-5">{data.title.substring(0,50)}</h5>
                        <p className="card-text">
                            $ {data.price}
                        </p>
                    </div>
                </div>
            </a>
            </>
            )
            })
        }
    </div>
    </>
  )
}

export default HeroSection
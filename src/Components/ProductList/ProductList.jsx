// import React from 'react'

import { useContext } from "react"
import { ShopContext } from "../ShopContext/ShopContext"
// import { productsData } from '../../assets/data'
import { BiCart } from 'react-icons/bi';
import './ProductList.css'
import { Link } from "react-router-dom";

const ProductList = () => {
  const {products, addToCart} = useContext(ShopContext)

  return (
    <div>
      <div className="product-list">
        <h2>CIGARETTE PRODUCT COLLECTION</h2>
        <div className="product-display">
          {
            products.map((product) => {
              const {id,image,title, price} = product
              return(
                <div className="product-card" key={id}>
                  <Link to={`/product/${product.id}`}>
                  <img className="product-img" src={image} alt="" />
                  </Link>
                  <div className="product-info">
                    <h4>{title}</h4>
                    <p>Rp. {price}</p>
                  </div>
                  <button className="add-to-cart" onClick={()=> addToCart(product, id)}>
                    Add To Cart 
                    <BiCart className="card-btn" />
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList
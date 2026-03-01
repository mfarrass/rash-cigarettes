import {useContext} from 'react'
import { ShopContext } from '../../Components/ShopContext/ShopContext'
import { productsData } from '../../assets/data'
import { Link, useParams } from 'react-router-dom'
import { BiCart } from 'react-icons/bi';
import './ProductDetails.css'

const ProductDetails = () => {

  const { addToCart } = useContext(ShopContext);

  //get the product id
  const { id } = useParams()
  //get the product based on id
  const product = productsData.find(product=> {
    return product.id ===parseInt(id);
  })


  return (
    <div>
      <div className="product_details_info">
        <Link to={`/product/${product.id}`}>
        <div className="detail_left">
          <img src={product.image} alt="" />
        </div>
        </Link>
        <div className="details_right">
            <h3>{product.title} </h3>
            <p className='product_price'>Rp. {product.price} </p>
            <p className='desc'>{product.description} </p>
            <button onClick={()=> addToCart(product, id)}>
              ADD TO CART
              <BiCart className="card-btn" />
              </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
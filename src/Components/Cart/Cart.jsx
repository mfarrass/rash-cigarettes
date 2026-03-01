import { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import CartDetails from './CartDetails'

const Cart = () => {
  const {cart, total, clearCart, quantity} = useContext(ShopContext)
  return (
    <div>
      <div className="cart_container">
        <div className="cart_left">
          <div className="cart_title">
              <h1>Keranjang</h1>
              <h1>Qty: ({quantity})</h1>
              <FiTrash2 onClick={clearCart} className='delete_cart' />
          </div>
          <div className="cart_header">
              <span>Deskripsi Produk</span>
              <span>Quantity</span>
              <span>Harga</span>
              <span>Total</span>
          </div>
          <div className="cart-detail">

            {cart.length > 0 ? (
              cart.map((item) => (
                <CartDetails item={item} key={item.id} />
              ))
            ) : (
              <div className="empty_cart">
                  🛒 Keranjang anda kosong
              </div>
            )}

          </div>
        </div>
        <div className="cart_right">
            <h2>Total Belanja</h2>
            <div className="summary_item total_cost">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="summary_item">
            <span>Biaya Pengiriman</span>
            <span>0</span>
            </div>
            <div className="summary_item">
              <span>Total Biaya</span>
              <span>${total}</span>
            </div>
            <button
              className="checkout_btn"
              disabled={cart.length === 0}
            >
            CHECKOUT
            </button>
          </div>
      </div>
    </div>
  )
}

export default Cart
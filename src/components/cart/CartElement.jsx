import { useDispatch } from 'react-redux'
import { deleteCartThunk } from '../../store/slices/cart.slice'
import './CartElement.css'

const CartElement = ({ prod }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteCartThunk(prod.id))
  }

  return (
    <article className="cart_Card">
      <section className="cart_cont_img">
        <header className="container_img_cart">
          <img className="cart__img" src={prod.product.images[0].url} alt="" />
        </header>

        <section className="cart_text">
          <h2 className="cart_name">{prod.product.title}</h2>
          <p>
            Price:
            <span>
              {prod.quantity} x <span>$ {prod.product.price}</span>
            </span>
          </p>
          <button className="btn_cart" onClick={handleDelete}>
            <svg viewBox="0 0 448 512" className="svgIcon">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
        </section>
      </section>
      <footer className="cart_footer">
        <span>Subtotal</span>
        <span> ${prod.quantity * prod.product.price}</span>
      </footer>
    </article>
  )
}

export default CartElement

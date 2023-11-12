import { useDispatch } from 'react-redux'
import { postCartThunk } from '../../store/slices/cart.slice'
import './style/ProductInfo.css'
import { useState } from 'react'

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity((state) => state - 1)
    }
  }
  const handleAdd = () => setQuantity((state) => state + 1)
  const dispatch = useDispatch()
  const handleAddtoCart = () => {
    dispatch(postCartThunk(product, quantity))
  }

  return (
    <article className="ProductInfo__container">
      <h3 className="ProductInfo__brand">{product?.brand}</h3>
      <h2 className="ProductInfo__name">{product?.title}</h2>
      <footer className="ProductInfo__footer">
        <ul className="ProductInfo__foot">
          <li className="ProductInfo__price-container">
            <span className="ProductInfo__price-label">Price</span>
            <span className="ProductInfo__price-value">$ {product?.price}</span>
          </li>
          <li className="ProductInfo__quantity-container">
            <span className="ProductInfo__quantity-label">Quantity</span>
            <div className="ProductInfo__quantity-container-div">
              <button
                className="ProductInfo__quantity-container-div-button"
                onClick={handleMinus}
              >
                -
              </button>
              <div className="ProductInfo__quantity-container-div-label">
                {quantity}
              </div>
              <button
                className="ProductInfo__quantity-container-div-button"
                onClick={handleAdd}
              >
                +
              </button>
            </div>
          </li>
        </ul>
        <button onClick={handleAddtoCart} className="ProductInfo__addtocard">
          Add To Card <i className="bx bx-cart"></i>
        </button>
      </footer>
      <p>{product?.description}</p>
    </article>
  )
}

export default ProductInfo

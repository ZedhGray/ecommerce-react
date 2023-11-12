import './PurchaseCard.css'

const PurchaseCard = ({ prod }) => {
  return (
    <article className="Purchase_Card">
      <div className="container_img_purchase">
        <img
          className="purchase__img"
          src={prod.product.images[0].url}
          alt=""
        />
      </div>

      <div className="purchase_text">
        <h3 className="purchase_name">{prod.product.title}</h3>
        <span>{prod.quantity}</span> x <span>{prod.product.price}</span>
      </div>
    </article>
  )
}

export default PurchaseCard

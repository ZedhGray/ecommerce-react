import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import './style/SimilarProducts.css'

const SimilarProducts = ({ product }) => {
  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [productsByCategory, getProductByCategory] = useFetch(baseUrl)

  useEffect(() => {
    if (product) {
      getProductByCategory(`/products?categoryId=${product.category.id}`)
    }
  }, [product])

  return (
    <article className="SimilarProduct__container">
      <h2>Similar Products</h2>
      <section className='SimilarProduct__Cards'>
        {productsByCategory?.map((prod) => {
          if (product.id !== prod.id) {
            return <CardProduct prod={prod} key={prod.id} />
          }
        })}
      </section>
    </article>
  )
}

export default SimilarProducts

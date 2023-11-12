import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import ProductInfo from '../components/ProductId/ProductInfo'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import SliderImgs from '../components/ProductId/SliderImgs'
const ProductIdPages = () => {
  const { id } = useParams()

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [product, getProductById] = useFetch(baseUrl)

  useEffect(() => {
    getProductById(`/products/${id}`)
  }, [id])

  return (
    <article className="ProductPages__container">
      <div className="spaceheader"></div>
      <SliderImgs product={product} />
      <ProductInfo product={product} />
      <SimilarProducts product={product} />
    </article>
  )
}

export default ProductIdPages

import { useEffect } from 'react'
import usePurchase from '../hooks/usePurchase'
import PurchaseCard from '../components/purchases/PurchaseCard'

const PurchasesPage = () => {
  const { purchases, getAllPurchases } = usePurchase()
  useEffect(() => {
    getAllPurchases()
  }, [])

  return (
    <div className="container_purchase">
      <div className="spaceheader"></div>
      <h2>Purchases</h2>
      <div>
        {purchases?.map((prod) => (
          <PurchaseCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  )
}

export default PurchasesPage

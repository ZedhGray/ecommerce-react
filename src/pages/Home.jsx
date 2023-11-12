import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import { useState } from 'react'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: Infinity,
  })
  const products = useSelector((states) => states.products)

  //Cuando se cambie algun cambio en el input
  const handleSearchName = (e) => {
    setInputValue(e.target.value.toLowerCase())
  }
  //Filtro en tiempo real
  const cbFilter = (prod) => prod.title.toLowerCase().includes(inputValue)

  const cbFilterPrice = (prod) => {
    const condMin = priceMinMax.min <= prod.price
    const condMax = prod.price <= priceMinMax.max
    return condMin && condMax
  }
  return (
    <div className="Home">
      <div className="spaceheader"></div>
      <input
        value={inputValue}
        onChange={handleSearchName}
        type="text"
        className="inp_filter"
        placeholder="Search"
      />
      <h2>Filters</h2>
      <aside className="filters_home">
        <FilterPrice
          priceMinMax={priceMinMax}
          setPriceMinMax={setPriceMinMax}
        />
        <FilterCategory />
      </aside>
      <div className="Home__container-card">
        {products
          ?.filter(cbFilter)
          .filter(cbFilterPrice)
          .map((prod) => (
            <CardProduct key={prod.id} prod={prod} />
          ))}
      </div>
    </div>
  )
}

export default Home

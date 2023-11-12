import { useForm } from 'react-hook-form'

const FilterPrice = ({ priceMinMax, setPriceMinMax }) => {
  const { register, reset, handleSubmit } = useForm()
  const submit = (data) => {
    const min = data.from.trim() === '' ? 0 : +data.from
    const max = data.to.trim() === '' ? Infinity : +data.to

    setPriceMinMax({ min, max })
  }
  const handleClearFilter = () => {
    setPriceMinMax({ min: 0, max: Infinity })
    reset({
      from: '',
      to: '',
    })
  }
  return (
    <article className="filter_price">
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div className="filter_price_from">
          <label htmlFor="from">From</label>
          <input
            className="inp_filter_fromto"
            {...register('from')}
            type="number"
            id="from"
            placeholder="$$$"
          />
        </div>
        <div className="filter_price_to">
          <label htmlFor="to">To</label>
          <input
            className="inp_filter_fromto"
            {...register('to')}
            type="number"
            id="to"
            placeholder="$$$"
          />
        </div>
        <button className="filterprice__btn">Filter Price</button>
      </form>
      {priceMinMax.min !== 0 || priceMinMax.max !== Infinity ? (
        <p className="price_check">
          From {priceMinMax.min} to {priceMinMax.max}{' '}
          <b className="x" onClick={handleClearFilter}>
            X
          </b>
        </p>
      ) : (
        ''
      )}
    </article>
  )
}

export default FilterPrice

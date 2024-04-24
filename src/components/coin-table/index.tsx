import { CoinType, CurrencyType } from '../../types/coin'
import CoinTableRow from './CoinTableRow'

const CoinTable = ({
  coins,
  currency,
  emptyMessage = '',
}: {
  coins: CoinType[]
  currency: CurrencyType
  emptyMessage?: string
}) => {
  return (
    <>
      <div className="coin-table row head">
        <div></div>
        <div className="col-span-3 text-left">자산</div>
        <div className="col-span-2 text-end">Price</div>
        <div>1H</div>
        <div>24H</div>
        <div>7D</div>
        <div className="col-span-3">24H Volume</div>
      </div>
      {coins.length > 0 ? (
        coins.map((coin) => <CoinTableRow key={coin.id} currency={currency} coin={coin} />)
      ) : (
        <div>{emptyMessage}</div>
      )}
    </>
  )
}

export default CoinTable

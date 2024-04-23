import { CoinType, CurrencyType } from '../types/coin'
import BookmarkButton from './BookmarkButton'
import priceService from '../util/price'

const PercentageItem = ({
  percentage,
  className = '',
}: {
  percentage: number
  className?: HTMLDivElement['className']
}) => {
  return (
    <div className={className + (percentage > 0 ? ' rise' : ' fall' + (percentage === 0 ? 'text-gray' : ''))}>
      {(percentage ?? 0).toFixed(2)}%
    </div>
  )
}

const CoinTableRow = ({ coin, currency }: { coin: CoinType; currency: CurrencyType }) => {
  const getPrice = (price: number) => {
    return priceService.getFormattedPrice({ currency, price })
  }
  return (
    <>
      <div className="coin-table row">
        <div className="text-left">
          <BookmarkButton id={coin.id} size={20} />
        </div>
        <div className="col-span-2 text-left">{coin.name}</div>
        <div className="text-left">{(coin.symbol ?? '').toUpperCase()}</div>
        <div className="col-span-2 text-end">{getPrice(coin.current_price)}</div>
        <PercentageItem percentage={coin.price_change_percentage_1h_in_currency} />
        <PercentageItem percentage={coin.price_change_percentage_24h_in_currency} />
        <PercentageItem percentage={coin.price_change_percentage_7d_in_currency} />
        <div className="col-span-3 text-end">{getPrice(coin.total_volume)}</div>
      </div>
    </>
  )
}

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

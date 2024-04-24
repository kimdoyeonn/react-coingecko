import { Link } from 'react-router-dom'
import { CoinType, CurrencyType } from '../../types/coin'
import priceService from '../../util/price'
import BookmarkButton from '../BookmarkButton'

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
        <Link to={`/coins/${coin.id}`} className="col-span-2 text-left cursor-pointer">
          {coin.name}
        </Link>
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

export default CoinTableRow
